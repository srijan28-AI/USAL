// src/components/ChatBot.tsx
'use client'

import React, { useState, useRef, useEffect } from 'react'
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa'

type Message = {
  by: 'user' | 'bot'
  text: string
}

export default function ChatBot() {
  // chat open/closed
  const [open, setOpen] = useState(false)
  // loading indicator while fetching
  const [loading, setLoading] = useState(false)
  // current input
  const [input, setInput] = useState<string>('')
  // array of chat messages
  const [messages, setMessages] = useState<Message[]>([])
  // scroll into view
  const endRef = useRef<HTMLDivElement>(null)

  // after each new message, scroll to bottom
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // send the user's message to the API
  const sendMessage = async () => {
    const trimmed = input.trim()
    if (!trimmed) return

    // add user message
    setMessages((prev: Message[]) => [
      ...prev,
      { by: 'user', text: trimmed }
    ])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Unknown API error')

      // add bot reply
      setMessages((prev: Message[]) => [
        ...prev,
        { by: 'bot', text: data.reply }
      ])
    } catch (err: any) {
      console.error('Chat error:', err)
      setMessages((prev: Message[]) => [
        ...prev,
        { by: 'bot', text: '😞 Sorry, something went wrong.' }
      ])
    } finally {
      setLoading(false)
    }
  }

  // handle Enter key
  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !loading) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* toggle button */}
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full shadow-lg transition"
      >
        {open ? <FaTimes /> : <FaRobot />}
        <span>USAL Bot</span>
      </button>

      {/* chat window */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 max-h-[60vh] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden">
          {/* header */}
          <div className="bg-blue-600 text-white px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaRobot />
              <span className="font-semibold">USAL Bot</span>
            </div>
            <button onClick={() => setOpen(false)}>
              <FaTimes />
            </button>
          </div>

          {/* messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.length === 0 && (
              <p className="text-gray-500 text-sm">Ask me anything about studying in the USA…</p>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.by === 'bot' ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`px-3 py-2 rounded-lg max-w-[70%] ${
                    m.by === 'bot'
                      ? 'bg-gray-100 text-gray-900'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* input */}
          <div className="px-4 py-3 border-t flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              disabled={loading}
              placeholder={loading ? 'Thinking…' : 'Type your question…'}
              className="flex-1 border rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

// src/components/ChatBot.tsx
'use client'

import React, { useState, useRef, useEffect } from 'react'
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa'

type Message = {
  by: 'user' | 'bot'
  text: string
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState<string>('')
  const [messages, setMessages] = useState<Message[]>([])
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async () => {
    const trimmed = input.trim()
    if (!trimmed) return

    setMessages(prev => [...prev, { by: 'user', text: trimmed }])
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

      setMessages(prev => [...prev, { by: 'bot', text: data.reply }])
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error('Chat error:', err.message)
      } else {
        console.error('Chat error:', err)
      }
      setMessages(prev => [...prev, { by: 'bot', text: '😞 Sorry, something went wrong.' }])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !loading) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full shadow-lg transition"
      >
        {open ? <FaTimes /> : <FaRobot />}
        <span>USAL Bot</span>
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 w-80 max-h-[60vh] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden">
          <div className="bg-blue-600 text-white px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaRobot />
              <span className="font-semibold">USAL Bot</span>
            </div>
            <button onClick={() => setOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.length === 0 && (
              <p className="text-gray-500 text-sm">Ask me anything about studying in the USA…</p>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.by === 'bot' ? 'justify-start' : 'justify-end'}`}>
                <div
                  className={`px-3 py-2 rounded-lg max-w-[70%] ${
                    m.by === 'bot' ? 'bg-gray-100 text-gray-900' : 'bg-blue-600 text-white'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

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

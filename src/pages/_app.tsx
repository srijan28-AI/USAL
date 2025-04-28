// pages/_app.tsx
import '@/styles/globals.css'
import '@/styles/aboutpage.css'    // ← pull in your old about‑page styles here
import type { AppProps } from 'next/app'
import Script from 'next/script'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatBot from '@/components/ChatBot'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Chatbase embed */}
      <Script
        id="chatbase-embed"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              if(!window.chatbase||window.chatbase("getState")!=="initialized"){
                window.chatbase=(...args)=>{ (window.chatbase.q = window.chatbase.q||[]).push(args) };
                window.chatbase=new Proxy(window.chatbase,{get(t,p){return p==="q"?t.q:(...a)=>t(p,...a)}});
              }
              const onLoad=()=>{ 
                const s=document.createElement("script");
                s.src="https://www.chatbase.co/embed.min.js";
                s.id="wLT9OXGBCp6IO6goF2l-A";
                document.body.appendChild(s);
              };
              document.readyState==="complete" ? onLoad() : window.addEventListener("load",onLoad);
            })();
          `,
        }}
      />

      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <ChatBot />
    </>
  )
}

export default MyApp

import React, { useState, useEffect } from 'react'
 
// Animated WhatsApp-style chat preview — used as the "image" for AI Bot project
const BotPreview = () => {
  const messages = [
    { from: 'bot', text: 'Hi Rahul! Based on your profile, the MBA program aligns perfectly with your goals.' },
    { from: 'user', text: 'What about fees?' },
    { from: 'bot', text: 'Fees are split in 3 installments. Given your finance background, ROI is strong.' },
    { from: 'user', text: 'Sounds good!' },
    { from: 'bot', text: 'Great! I\'ll schedule a counselor call for you tomorrow.' },
  ]
 
  const [visible, setVisible] = useState(0)
 
  useEffect(() => {
    if (visible >= messages.length) return
    const t = setTimeout(() => setVisible(v => v + 1), 900)
    return () => clearTimeout(t)
  }, [visible])
 
  // restart animation loop
  useEffect(() => {
    if (visible === messages.length) {
      const t = setTimeout(() => setVisible(0), 3000)
      return () => clearTimeout(t)
    }
  }, [visible])
 
  return (
    <div className="w-full h-[278px] bg-[#0f172a] rounded-xl overflow-hidden flex flex-col shadow-[0_0_6px_rgba(66,66,66,1)]">
      {/* top bar */}
      <div className="flex items-center gap-2 bg-[#1e293b] px-3 py-2 shrink-0">
        <div className="w-6 h-6 rounded-full bg-green-700 flex items-center justify-content-center">
          <span className="text-[9px] text-green-300 font-bold w-full text-center">B</span>
        </div>
        <div>
          <p className="text-[10px] font-semibold text-white leading-none">Engagement Bot</p>
          <p className="text-[8px] text-green-400 leading-none mt-0.5">● online</p>
        </div>
        <div className="ml-auto flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
        </div>
      </div>
 
      {/* chat area */}
      <div className="flex-1 overflow-hidden flex flex-col justify-end gap-1.5 px-3 py-2">
        {messages.slice(0, visible).map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
          >
            <div
              className={`max-w-[78%] px-2.5 py-1.5 rounded-lg text-[9px] leading-relaxed
                ${msg.from === 'bot'
                  ? 'bg-[#1e3a2e] text-green-200 rounded-bl-sm'
                  : 'bg-[#1e3a5f] text-blue-200 rounded-br-sm'
                }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {visible < messages.length && (
          <div className="flex justify-start">
            <div className="bg-[#1e3a2e] px-3 py-2 rounded-lg rounded-bl-sm flex gap-1 items-center">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </div>
          </div>
        )}
      </div>
 
      {/* stats strip */}
      <div className="bg-[#1e293b] px-3 py-1.5 flex gap-3 shrink-0">
        <div className="text-center">
          <p className="text-[10px] font-bold text-green-400">200+</p>
          <p className="text-[8px] text-slate-400">Leads</p>
        </div>
        <div className="w-px bg-slate-600"></div>
        <div className="text-center">
          <p className="text-[10px] font-bold text-green-400">~80%</p>
          <p className="text-[8px] text-slate-400">Effort saved</p>
        </div>
        <div className="w-px bg-slate-600"></div>
        <div className="text-center">
          <p className="text-[10px] font-bold text-green-400">&lt;2 min</p>
          <p className="text-[8px] text-slate-400">Response</p>
        </div>
      </div>
    </div>
  )
}

export default BotPreview
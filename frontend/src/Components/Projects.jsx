import React, { useState, useEffect } from 'react'
import Recipe from '../assets/Recipe.png'
import Todo from '../assets/Todo.png'
import Drumkit from '../assets/drumkit.png'
import Zivaa from '../assets/zivaaa.png'

const BotPreview = () => {
  const messages = [
    { from: 'bot',  text: 'Hi Rahul! Based on your profile, the MBA program aligns perfectly with your goals.' },
    { from: 'user', text: 'What about fees?' },
    { from: 'bot',  text: 'Fees are split in 3 installments. Given your finance background, ROI is strong.' },
    { from: 'user', text: 'Sounds good!' },
    { from: 'bot',  text: "Great! I'll schedule a counselor call for you tomorrow." },
  ]

  const [visible, setVisible] = useState(0)

  useEffect(() => {
    if (visible >= messages.length) return
    const t = setTimeout(() => setVisible(v => v + 1), 900)
    return () => clearTimeout(t)
  }, [visible])

  useEffect(() => {
    if (visible === messages.length) {
      const t = setTimeout(() => setVisible(0), 3000)
      return () => clearTimeout(t)
    }
  }, [visible])

  return (
    <div className="w-full h-[278px] bg-[#0f172a] rounded-xl overflow-hidden flex flex-col">
      <div className="flex items-center gap-2 bg-[#1e293b] px-3 py-2 shrink-0">
        <div className="w-6 h-6 rounded-full bg-green-700 flex items-center justify-center">
          <span className="text-[9px] text-green-300 font-bold">B</span>
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

      <div className="flex-1 overflow-hidden flex flex-col justify-end gap-1.5 px-3 py-2">
        {messages.slice(0, visible).map((msg, i) => (
          <div key={i} className={`flex animate-fadeIn ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[78%] px-2.5 py-1.5 rounded-lg text-[9px] leading-relaxed ${
              msg.from === 'bot'
                ? 'bg-[#1e3a2e] text-green-200 rounded-bl-sm'
                : 'bg-[#1e3a5f] text-blue-200 rounded-br-sm'
            }`}>
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

const CricketBotPreview = () => {
  const messages = [
    { type: 'score', text: '🏏 IND vs PAK • Over 18.4 • IND: 156/3' },
    { type: 'bot', text: 'Virat just smashed a SIX! 💥 Pakistan bowler looking at the sky like he lost his WiFi password 😭' },
    { type: 'score', text: '🏏 Over 18.5 • WICKET! Kohli OUT for 72' },
    { type: 'bot', text: 'Kohli walks back... Pakistan fans: 🥳 India fans: 😤 Kohli himself: already planning the next century 😎' },
    { type: 'score', text: '🏏 Over 19.1 • FOUR! Hardik hits boundary' },
    { type: 'bot', text: 'Hardik Pandya said "hold my chai" ☕ and smashed it to the fence! Bowler needs therapy 😂' },
  ]

  const [visible, setVisible] = useState(0)

  useEffect(() => {
    if (visible >= messages.length) return
    const t = setTimeout(() => setVisible(v => v + 1), 1000)
    return () => clearTimeout(t)
  }, [visible])

  useEffect(() => {
    if (visible === messages.length) {
      const t = setTimeout(() => setVisible(0), 3000)
      return () => clearTimeout(t)
    }
  }, [visible])

  return (
    <div className="w-full h-[278px] bg-[#17212b] rounded-xl overflow-hidden flex flex-col">
      {/* Telegram header */}
      <div className="flex items-center gap-2 bg-[#232e3c] px-3 py-2 shrink-0">
        <div className="w-7 h-7 rounded-full bg-[#2b5278] flex items-center justify-content-center">
          <span className="text-[10px] text-blue-300 font-bold w-full text-center">🏏</span>
        </div>
        <div>
          <p className="text-[10px] font-semibold text-white leading-none">CricMeme Bot</p>
          <p className="text-[8px] text-green-400 leading-none mt-0.5">● Live • IND vs PAK</p>
        </div>
        <div className="ml-auto">
          <p className="text-[8px] text-slate-400">Telegram</p>
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-hidden flex flex-col justify-end gap-1.5 px-3 py-2">
        {messages.slice(0, visible).map((msg, i) => (
          <div key={i} className="flex justify-start animate-fadeIn">
            <div className={`max-w-[85%] px-2.5 py-1.5 rounded-lg text-[9px] leading-relaxed ${
              msg.type === 'score'
                ? 'bg-[#2b5278] text-blue-200 rounded-bl-sm font-semibold'
                : 'bg-[#232e3c] text-slate-200 rounded-bl-sm'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {visible < messages.length && (
          <div className="flex justify-start">
            <div className="bg-[#232e3c] px-3 py-2 rounded-lg rounded-bl-sm flex gap-1 items-center">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </div>
          </div>
        )}
      </div>

      {/* Stats strip */}
      <div className="bg-[#232e3c] px-3 py-1.5 flex gap-3 shrink-0">
        <div className="text-center">
          <p className="text-[10px] font-bold text-blue-400">Live</p>
          <p className="text-[8px] text-slate-400">Score</p>
        </div>
        <div className="w-px bg-slate-600"></div>
        <div className="text-center">
          <p className="text-[10px] font-bold text-blue-400">AI</p>
          <p className="text-[8px] text-slate-400">Memes</p>
        </div>
        <div className="w-px bg-slate-600"></div>
        <div className="text-center">
          <p className="text-[10px] font-bold text-blue-400">Ball</p>
          <p className="text-[8px] text-slate-400">by Ball</p>
        </div>
        <div className="w-px bg-slate-600"></div>
        <div className="text-center">
          <p className="text-[10px] font-bold text-blue-400">Python</p>
          <p className="text-[8px] text-slate-400">+ OpenAI</p>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  const MainProjects = [
    {
      title: "Cricket Live Score Meme Bot",
      Description: "A Telegram bot built with Python, Selenium, and OpenAI API that sends ball-by-ball live cricket score updates. Instead of standard commentary, the bot generates contextual memes and roast jokes based on match situation and player performance — keeping fans engaged and entertained.",
      technologies: ["Python", "Selenium", "OpenAI API", "Telegram Bot API"],
      customPreview: <CricketBotPreview />,
      link: "https://github.com/al0k0",
    },
    {
      title: "AI Lead Engagement Bot",
      Description: "WhatsApp + Email automation with AI-generated personalized messages, lead scoring, and a 4-stage buyer journey engine. Reduced manual follow-up by ~80% for 200+ leads.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Groq API", "Google Sheets API", "Nodemailer", "IMAP"],
      customPreview: <BotPreview />,
      link: "https://github.com/al0k0",
    },
    {
      title: "Women Fashion E-Commerce",
      Description: "A dynamic e-commerce platform for women's fashion. Includes product catalog, cart and wishlist management, order tracking, and a responsive user interface.",
      technologies: ["React.js", "Tailwind CSS", "MongoDB", "Express.js", "Node.js", "React Router"],
      img: Zivaa,
      link: "https://zivaaa.netlify.app/",
    },
    {
      title: "Recipe Finder App",
      Description: "A React-based application for searching and exploring meal recipes. Features category filtering, meal details, and an intuitive UI.",
      technologies: ["React.js", "Tailwind CSS", "Fetch API", "JavaScript (ES6)", "React Router"],
      img: Recipe,
      link: "https://myrecipefinder-app.netlify.app/",
    },
    {
      title: "To Do List",
      Description: "A simple and interactive to-do list application. Features include adding tasks, marking as completed, and removing tasks. Clean UI with responsive design.",
      technologies: ["HTML", "CSS", "JavaScript (DOM Manipulation)"],
      img: Todo,
      link: "https://github.com/al0k0/ToDo-app.git",
    },
    {
      title: "Drum Kit",
      Description: "An engaging drum kit app — play sounds by clicking drum elements or pressing keyboard keys. Interactive learning experience for music creation.",
      technologies: ["HTML", "CSS", "JavaScript (Event Listeners, Audio API)"],
      img: Drumkit,
      link: "https://github.com/al0k0/drumKit.git",
    },
  ]

  const [visibleIndex, setVisibleIndex] = useState(null)
  const toggleDetails = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index)
  }

  return (
    <div id='portfolio' className='bg-green-950'>
      <div className='py-3 lg:py-12 flex justify-center items-center'>
        <h1 className='absolute text-xl lg:text-3xl text-green-500 font-bold'>My Projects</h1>
        <h1 className='text-5xl lg:text-9xl text-stroke tracking-wider uppercase font-extrabold'>Projects</h1>
      </div>

      <div className='pt-10 lg:pt-28 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 lg:px-36'>
        {MainProjects.map((projects, index) => (
          <div
            key={index}
            className='relative lg:p-3 rounded-2xl shadow-[0_0_12px_rgba(0,0,0,1)] hover:scale-105 transition-transform duration-300 cursor-pointer'
            onClick={() => toggleDetails(index)}
          >
            {projects.customPreview ? (
              <div className='rounded-xl lg:h-[278px] mx-auto shadow-[0_0_6px_rgba(66,66,66,1)] overflow-hidden'>
                {projects.customPreview}
              </div>
            ) : (
              <img
                src={projects.img}
                className='rounded-xl lg:h-[278px] mx-auto shadow-[0_0_6px_rgba(66,66,66,1)]'
                alt={projects.title}
              />
            )}

            <div className={`absolute inset-0 flex flex-col py-2 space-y-2 lg:py-10 items-center opacity-0 hover:opacity-100 bg-green-500/70 rounded-xl duration-500 overflow-y-auto px-3 text-center
              ${visibleIndex === index
                ? 'opacity-100 translate-y-0 delay-20 transition-opacity duration-500 ease-in-out'
                : 'opacity-0 transition-opacity duration-500 ease-in-out'
              }`}
            >
              <h1 className='font-bold text-xl lg:text-3xl'>{projects.title}</h1>
              <p className='lg:py-5 px-4 text-center font-semibold lg:leading-none leading-none lg:text-base text-xs'>
                {projects.Description}
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                className='bg-white p-2 px-3 rounded-full mt-3'
                href={projects.link}
              >
                <i className="fa-solid fa-arrow-up-right-from-square text-base text-green-500"></i>
              </a>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default Projects
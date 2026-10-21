import React from "react";
import { useEffect, useState } from 'react'
import { FaIdCard, FaGraduationCap, FaTools, FaBriefcase, FaFolderOpen, FaLaptopCode, FaRss, FaEdit, FaVolumeUp, FaMoon, FaSnowflake, FaMagic, FaFileDownload, FaCaretDown, FaCaretLeft, FaCaretRight } from 'react-icons/fa'
import { profile } from '../data/content'
import avatar from '../assets/monirul.png'

export const NAV = [
  { id: 'about', label: 'About me', icon: FaIdCard },
  { id: 'education', label: 'Education', icon: FaGraduationCap },
  { id: 'tech', label: 'Tech Stack', icon: FaTools },
  { id: 'experience', label: 'Experience', icon: FaBriefcase },
  { id: 'portfolio', label: 'Portfolio', icon: FaFolderOpen },
  { id: 'services', label: 'Services', icon: FaLaptopCode },
  { id: 'updates', label: 'Updates', icon: FaRss },
  { id: 'contact', label: 'Contact', icon: FaEdit },
]

const COLORS = ['#80d8f8', '#a78bfa', '#4ade80', '#fbbf24', '#fb7185', '#f472b6']
const hexToRgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16)).join(' ')

function UsFlag() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" className="rounded-full">
      <defs><clipPath id="c"><circle cx="16" cy="16" r="16" /></clipPath></defs>
      <g clipPath="url(#c)">
        <rect width="32" height="32" fill="#fff" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => <rect key={i} y={i * 4.57} width="32" height="2.28" fill="#d22f3a" />)}
        <rect width="15" height="17.5" fill="#3c3b6e" />
        {[...Array(12)].map((_, i) => <circle key={i} cx={3 + (i % 3) * 4.5} cy={3 + Math.floor(i / 3) * 4.2} r="0.9" fill="#fff" />)}
      </g>
    </svg>
  )
}

function Typing({ words }) {
  const [text, setText] = useState('')
  useEffect(() => {
    let w = 0, c = 0, del = false, t
    const tick = () => {
      const word = words[w]
      if (!del) { c++; setText(word.slice(0, c)); if (c === word.length) { del = true; t = setTimeout(tick, 1800); return } }
      else { c--; setText(word.slice(0, c)); if (c === 0) { del = false; w = (w + 1) % words.length } }
      t = setTimeout(tick, del ? 45 : 90)
    }
    t = setTimeout(tick, 400)
    return () => clearTimeout(t)
  }, [words])
  return <span>{text}<span className="blink">_</span></span>
}

export default function Sidebar({ active, onNavigate, collapsed, setCollapsed, open, theme, setTheme, accent, setAccent }) {
  const [palette, setPalette] = useState(false)
  const [lang, setLang] = useState(false)

  useEffect(() => {
    accent ? document.documentElement.style.setProperty('--c-accent', hexToRgb(accent)) : document.documentElement.style.removeProperty('--c-accent')
  }, [accent])

  const speak = () => {
    if (!('speechSynthesis' in window)) return
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(`${profile.firstName} ${profile.lastName}`))
  }

  return (
    <aside
      className={`fixed z-30 top-3 bottom-3 left-2 bg-card rounded-[1.375rem] flex flex-col transition-all duration-300
        ${collapsed ? 'w-[5.75rem]' : 'w-[23.5rem]'}
        max-[1100px]:w-[20rem] max-[1100px]:min-w-0 ${open ? 'max-[1100px]:translate-x-0' : 'max-[1100px]:-translate-x-[110%]'}`}
    >
      {/* collapse handle */}
      <button onClick={() => setCollapsed(!collapsed)} aria-label="Toggle sidebar"
        className="max-[1100px]:hidden absolute -right-5 top-[6.5625rem] w-[3.125rem] h-[3.125rem] rounded-full bg-card text-mute flex items-center justify-center pr-5 z-10 hover:text-accent">
        {collapsed ? <FaCaretRight /> : <FaCaretLeft />}
      </button>

      {/* avatar + name */}
      <div className={`flex flex-col items-center ${collapsed ? 'pt-8' : 'pt-7'} pb-5`}>
        <div className="relative group">
          <img src={avatar} alt={`${profile.firstName} ${profile.lastName}`}
            className={`object-cover rounded-full ring-[0.375rem] ring-page/40 transition-all ${collapsed ? 'w-[3.5rem] h-[3.5rem]' : 'w-[11rem] h-[12rem]'}`} />
          <span className={`status-dot absolute rounded-full bg-accent border-[0.3125rem] border-card ${collapsed ? 'w-5 h-5 -right-1 -bottom-1 border-[0.1875rem]' : 'w-[2.625rem] h-[2.625rem] -right-[0.875rem] -bottom-[0.875rem]'}`} />
          {profile.hireStatus && !collapsed && (
            <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[0.6rem] opacity-0 group-hover:opacity-100 transition-opacity bg-[#c9d4e3] text-[#1c2330] rounded-xl px-8 py-2 text-[1.1rem] whitespace-nowrap shadow z-20">{profile.hireStatus}</span>
          )}
        </div>
        {!collapsed && (
          <>
            <div className="mt-6 flex items-center gap-3 font-head font-bold text-[1.5625rem] whitespace-nowrap">
              <span>{profile.firstName.replace('Md. ', '')} <span className="text-accent">{profile.lastName}</span></span>
              <button onClick={speak} aria-label="Pronounce my name" className="text-mute hover:text-accent text-[1.125rem]"><FaVolumeUp /></button>
            </div>
            <div className="text-[1.125rem] text-mute mt-3 h-7"><Typing words={profile.roles} /></div>
          </>
        )}
      </div>

      {/* nav */}
      <nav className="border-t border-line/60 flex-1 overflow-y-auto scroll-thin">
        {NAV.map(({ id, label, icon: Icon }) => (
          <button key={id} onClick={() => onNavigate(id)}
            className={`w-full flex items-center h-[3.2812rem] border-b border-line/40 text-[1.3125rem] transition-colors
              ${collapsed ? 'justify-center' : 'pl-[2.125rem] gap-[1.375rem]'}
              ${active === id ? 'bg-accent text-onaccent' : 'text-ink hover:text-accent'}`}>
            <Icon className={`text-[1.5625rem] flex-none ${active === id ? '' : 'text-mute'}`} />
            {!collapsed && <span>{label}</span>}
          </button>
        ))}
      </nav>

      {/* footer controls */}
      <div className={`border-t border-line/60 h-[4.25rem] flex items-center text-mute relative ${collapsed ? 'flex-col h-auto py-3 gap-3' : 'justify-between px-9'}`}>
        <div className="relative">
          <button onClick={() => { setLang(!lang); setPalette(false) }} className="flex items-center gap-2 hover:text-accent" aria-label="Language"><UsFlag />{!collapsed && <FaCaretDown />}</button>
          {lang && (
            <div className="absolute bottom-12 left-0 bg-inner border border-line rounded-xl p-2 w-40 text-ink z-20">
              <button onClick={() => setLang(false)} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-accent/20 text-[1.0625rem]"><UsFlag />English</button>
            </div>
          )}
        </div>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="hover:text-accent text-[1.625rem]" aria-label="Toggle theme">{theme === 'dark' ? <FaMoon /> : <FaSnowflake />}</button>
        <div className="relative">
          <button onClick={() => { setPalette(!palette); setLang(false) }} className="hover:text-accent text-[1.625rem]" aria-label="Accent color"><FaMagic /></button>
          {palette && (
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-inner border border-line rounded-xl p-3 flex gap-2 z-20">
              {COLORS.map((c) => <button key={c} onClick={() => setAccent(c)} aria-label={c} style={{ background: c }} className={`w-7 h-7 rounded-full ${accent === c ? 'ring-2 ring-ink' : ''}`} />)}
            </div>
          )}
        </div>
        <a href={profile.cv} download className="hover:text-accent text-[1.625rem]" aria-label="Download CV" title="Download CV"><FaFileDownload /></a>
      </div>
    </aside>
  )
}

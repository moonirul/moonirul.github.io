import React from "react";
import { useEffect, useState } from 'react'
import { FaLink, FaTimes, FaCaretRight, FaYoutube, FaFolderOpen } from 'react-icons/fa'

// Both dialogs use the light-blue panel from the reference in dark and light themes.
const ytId = (v = '') => (v.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/) || [])[1] || (/^[\w-]{11}$/.test(v) ? v : '')

function Shell({ onClose, children, wide }) {
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [onClose])
  return (
    <div className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4 fade-in" onClick={onClose}>
      <div role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}
        className={`w-full ${wide ? 'max-w-[61rem]' : 'max-w-[39rem]'} max-h-[94vh] overflow-y-auto rounded-xl bg-[#d9e6f4] text-[#1c2330] shadow-2xl`}>
        {children}
      </div>
    </div>
  )
}

const CloseBtn = ({ onClick }) => (
  <button onClick={onClick} aria-label="Close" className="w-[2.6rem] h-[2.6rem] rounded-full bg-[#c7d6e8] hover:bg-[#b9cbe1] flex items-center justify-center text-[1rem] flex-none"><FaTimes /></button>
)

export default function Modals() {
  const [link, setLink] = useState(null)
  const [video, setVideo] = useState(null)

  useEffect(() => {
    // Every external link (target=_blank) asks for confirmation first
    const onClick = (e) => {
      const a = e.target.closest?.('a[href]')
      if (!a || a.target !== '_blank') return
      const h = a.getAttribute('href')
      if (/^https?:/i.test(h)) { e.preventDefault(); setLink(h) }
    }
    const onVideo = (e) => setVideo(e.detail)
    document.addEventListener('click', onClick)
    window.addEventListener('open-video', onVideo)
    return () => { document.removeEventListener('click', onClick); window.removeEventListener('open-video', onVideo) }
  }, [])

  const proceed = () => { window.open(link, '_blank', 'noopener,noreferrer'); setLink(null) }

  return (
    <>
      {link && (
        <Shell onClose={() => setLink(null)}>
          <div className="flex items-center gap-5 px-6 h-[5.4rem] bg-[#dce8f5]">
            <FaLink className="text-[#246a94] text-[2rem]" />
            <h3 className="font-head font-bold text-[1.9rem] flex-1">Open link?</h3>
            <CloseBtn onClick={() => setLink(null)} />
          </div>
          <div className="px-6 pt-8 pb-6 bg-[#d0e0f1]">
            <p className="text-center text-[1.15rem] leading-relaxed">
              You'll be redirected to an external page in a new tab:<br />
              « <b className="text-[#5d6f88] break-all">{link}</b> »<br /><br />
              Please confirm if you'd like to continue.
            </p>
            <div className="flex justify-between mt-6 gap-3">
              <button onClick={() => setLink(null)} className="flex items-center gap-2 bg-[#353a44] text-white rounded-lg px-5 h-[2.9rem] text-[1.1rem]"><FaTimes /> Cancel</button>
              <button onClick={proceed} className="flex items-center gap-2 bg-[#246a94] text-white rounded-lg px-5 h-[2.9rem] text-[1.1rem]">Proceed <FaCaretRight /></button>
            </div>
          </div>
        </Shell>
      )}

      {video && (
        <Shell wide onClose={() => setVideo(null)}>
          <div className="flex items-center gap-4 px-7 h-[5.2rem] border-b-[5px] border-[#8fb5d9]">
            <FaYoutube className="text-[#246a94] text-[2.2rem]" />
            <h3 className="font-head font-bold text-[1.9rem] flex-1">Get to know more:</h3>
            <CloseBtn onClick={() => setVideo(null)} />
          </div>
          <div className="aspect-video bg-black">
            <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${ytId(video.url)}?autoplay=1`} title={video.title || 'Video'}
              allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
          </div>
          {video.text && (
            <div className="px-7 py-6 border-t-[5px] border-[#8fb5d9]">
              <div className="flex items-center gap-3 font-head font-bold text-[1.4rem]"><FaFolderOpen className="text-[#246a94]" /> About Video</div>
              <p className="mt-3 text-[1.1rem] leading-relaxed">{video.text}</p>
            </div>
          )}
        </Shell>
      )}
    </>
  )
}

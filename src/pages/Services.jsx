import React from "react";
import { PageHeading, SectionTitle } from '../components/ui'
import { getIcon } from '../components/icons'
import { services, profile } from '../data/content'

// Hexagon badge with line-art workflow icon (stands in for the original chart illustration)
function Badge() {
  return (
    <svg viewBox="0 0 320 340" className="w-full max-w-[20.625rem]">
      <path d="M160 6 L300 86 Q312 94 312 108 L312 232 Q312 246 300 254 L160 334 L20 254 Q8 246 8 232 L8 108 Q8 94 20 86 Z" fill="rgb(var(--c-accent))" />
      <g fill="none" stroke="#14171c" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round">
        <rect x="52" y="92" width="62" height="50" rx="10" fill="#fff" />
        <rect x="206" y="92" width="62" height="50" rx="10" fill="#fff" />
        <rect x="129" y="198" width="62" height="50" rx="10" fill="#fff" />
        <path d="M114 117 H206" /><path d="M83 142 V170 H160 V198" /><path d="M237 142 V170 H160" />
        <path d="M186 117 l20 0" />
      </g>
      <circle cx="83" cy="117" r="9" fill="#e8663d" /><circle cx="237" cy="117" r="9" fill="#2a9d6a" /><circle cx="160" cy="223" r="9" fill="#f2a024" />
    </svg>
  )
}

export default function Services() {
  return (
    <>
      <PageHeading sub="You can hire me for" accent="AI Automation" rest="Services" />
      <div className="px-[4.125rem] pb-12">
        <div className="flex flex-col md:flex-row items-center gap-[5rem] mt-14">
          <div className="md:w-[38%] flex justify-center"><Badge /></div>
          <div className="md:w-[62%] text-[1.25rem] leading-[1.65] space-y-6">
            <p>{services.p1}</p>
            <p>
              If you're interested in working with me,{' '}
              <a className="text-accent hover:underline" href={`mailto:${profile.email}`}>don't hesitate to contact me by email. Click now.</a>{' '}
              I'd be happy to discuss your project, technical needs, and everything in between.
            </p>
          </div>
        </div>

        <SectionTitle accent="I offer">What</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          {services.offers.map((o) => {
            const Icon = getIcon(o.icon)
            return (
              <div key={o.title} className="bg-inner/80 rounded-2xl px-8 py-10 text-center text-[1.1875rem] leading-relaxed">
                <div className="flex items-center justify-center gap-3 font-semibold"><Icon className="text-accent text-[1.25rem]" /> {o.title}</div>
                <p className="mt-3 text-mute">{o.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

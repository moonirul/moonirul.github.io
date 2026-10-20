import React from "react";
import { useState } from "react";
import {
  FaSignature,
  FaEnvelope,
  FaEdit,
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaMugHot,
} from "react-icons/fa";

import { PageHeading, SectionTitle } from "../components/ui";
import { profile } from "../data/content";

const ways = [
  {
    icon: FaEnvelope,
    k: "Email",
    v: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: FaPhoneAlt,
    k: "Phone",
    v: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  {
    icon: FaLinkedin,
    k: "LinkedIn",
    v: "linkedin.com/in/moonirul",
    href: profile.linkedin,
  },
  {
    icon: FaGithub,
    k: "GitHub",
    v: "github.com/moonirul",
    href: profile.github,
  },
  {
    icon: FaGlobe,
    k: "Website",
    v: "moonirul.github.io",
    href: profile.website,
  },
  {
    icon: FaMapMarkerAlt,
    k: "Location",
    v: profile.location,
  },
];

export default function Contact() {
  const [f, setF] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const set = (k) => (e) => {
    setF((prev) => ({
      ...prev,
      [k]: e.target.value,
    }));
    setSent(false);
  };

  // Opens the visitor's email application with the form pre-filled.
  const submit = (e) => {
    e.preventDefault();

    const body = `${f.message}\n\n— ${f.name} (${f.email})`;

    window.location.href =
      `mailto:${profile.email}` +
      `?subject=${encodeURIComponent(f.subject)}` +
      `&body=${encodeURIComponent(body)}`;

    setSent(true);
  };

  return (
    <>
      <PageHeading sub="Don't hesitate to" accent="Contact" rest="Me" />

      <div className="px-4 sm:px-8 lg:px-[4.125rem] pb-12">
        {/* Contact Form */}
        <SectionTitle accent="message">Send me a</SectionTitle>
        <form onSubmit={submit} className="px-[1%]">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              <label className="input-row">
                <span className="ico">
                  <FaSignature />
                </span>
                <input
                  required
                  type="text"
                  placeholder="Name *"
                  value={f.name}
                  onChange={set("name")}
                />
              </label>

              <label className="input-row">
                <span className="ico">
                  <FaEnvelope />
                </span>
                <input
                  required
                  type="email"
                  placeholder="E-mail *"
                  value={f.email}
                  onChange={set("email")}
                />
              </label>

              <label className="input-row">
                <span className="ico">
                  <FaEdit />
                </span>
                <input
                  required
                  type="text"
                  placeholder="Subject *"
                  value={f.subject}
                  onChange={set("subject")}
                />
              </label>
            </div>

            <textarea
              required
              className="area min-h-[12.5rem] lg:min-h-0"
              placeholder="Message *"
              value={f.message}
              onChange={set("message")}
            />
          </div>

          <div className="flex flex-col items-center mt-10 gap-4">
            <button
              type="submit"
              className="bg-accent text-onaccent rounded-full
                h-[5.125rem] w-[min(19.0625rem,100%)]
                text-[1.125rem] sm:text-[1.3125rem]
                tracking-wide flex items-center justify-center
                gap-3 hover:brightness-110 transition"
            >
              <FaEnvelope />
              SEND MESSAGE
            </button>

            {sent && (
              <p className="text-mute text-base text-center">
                Opening your email app… if nothing opens, write to{" "}
                {profile.email}.
              </p>
            )}
          </div>
        </form>
        {/* Other Contact Methods */}
        <SectionTitle accent="prefer...">Or if you</SectionTitle>
        <div className="grid sm:grid-cols-2 gap-5">
          {ways.map(({ icon: Icon, k, v, href }) => {
            const Tag = href ? "a" : "div";

            return (
              <Tag
                key={k}
                href={href}
                target={href?.startsWith("http") ? "_blank" : undefined}
                rel={
                  href?.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="bg-inner/80 rounded-2xl p-6
                  flex items-center gap-5
                  hover:bg-inner transition"
              >
                <div
                  className="w-14 h-14 rounded-full bg-accent
                    text-onaccent flex items-center justify-center
                    text-[1.375rem] flex-none"
                >
                  <Icon />
                </div>

                <div className="min-w-0">
                  <div className="text-mute text-base">{k}</div>

                  <div className="text-lg break-words">{v}</div>
                </div>
              </Tag>
            );
          })}
        </div>
        {/* Buy Me a Coffee */}

        <SectionTitle accent="My Work">Support</SectionTitle>
        <div
          className="mt-12 rounded-2xl bg-inner/80
            p-6 sm:p-8 lg:p-10
            flex flex-col sm:flex-row items-center
            gap-6 sm:gap-8
            border border-white/5
            hover:border-accent/30 transition duration-300"
        >
          {/* Coffee Icon */}
          <div
            className="w-16 h-16 sm:w-20 sm:h-20
              rounded-full bg-accent text-onaccent
              flex items-center justify-center
              text-3xl sm:text-4xl flex-none"
          >
            <FaMugHot />
          </div>

          {/* Coffee Content */}
          <div className="flex-1 min-w-0 text-center sm:text-left">
           

            <p className="text-mute leading-relaxed mb-4">
              If you find my open-source work helpful or enjoy browsing through
              my portfolio, please consider supporting my work with a coffee!
            </p>

            <p className="text-mute leading-relaxed">
              Your support helps me continue developing and maintaining projects
              that benefit the community and helps me create more useful
              resources for developers.
            </p>

            {/* GitHub Sponsors Button */}
            <a
              href="https://github.com/sponsors/moonirul"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center
                gap-3 mt-6 px-7 py-4
                rounded-full bg-accent text-onaccent
                font-medium text-base
                hover:brightness-110 hover:scale-[1.03]
                active:scale-95
                transition duration-300"
            >
              <FaMugHot className="text-xl" />
              <span>Buy Me a Coffee</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

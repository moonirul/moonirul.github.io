import React from "react";

import { useEffect, useRef, useState } from "react";
import { FaBars, FaExpandArrowsAlt, FaCompressArrowsAlt } from "react-icons/fa";
import Sidebar, { NAV } from "./components/Sidebar";
import About from "./pages/About";
import Education from "./pages/Education";
import TechStack from "./pages/TechStack";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Updates from "./pages/Updates";
import Contact from "./pages/Contact";
import Modals from "./components/Modals";

const PAGES = {
  about: About,
  education: Education,
  tech: TechStack,
  experience: Experience,
  portfolio: Portfolio,
  services: Services,
  updates: Updates,
  contact: Contact,
};
const fromHash = () => {
  const h = window.location.hash.replace("#", "");
  return PAGES[h] ? h : "about";
};

export default function App() {
  const [page, setPage] = useState(fromHash);
  const [collapsed, setCollapsed] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [full, setFull] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );
  const [accent, setAccent] = useState(() => localStorage.getItem("accent"));
  const scroller = useRef(null);

  useEffect(() => {
    const on = () => setPage(fromHash());
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  useEffect(() => {
    accent
      ? localStorage.setItem("accent", accent)
      : localStorage.removeItem("accent");
  }, [accent]);
  useEffect(() => {
    const on = () => setFull(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", on);
    return () => document.removeEventListener("fullscreenchange", on);
  }, []);
  const toggleFull = () =>
    document.fullscreenElement
      ? document.exitFullscreen()
      : document.documentElement.requestFullscreen?.();
  useEffect(() => {
    scroller.current?.scrollTo({ top: 0 });
  }, [page]);

  const go = (id) => {
    window.location.hash = id;
    setPage(id);
    setDrawer(false);
  };
  const Page = PAGES[page];

  return (
    <>
      <Sidebar
        active={page}
        onNavigate={go}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        open={drawer}
        theme={theme}
        setTheme={setTheme}
        accent={accent}
        setAccent={setAccent}
      />
      {drawer && (
        <div
          className="fixed inset-0 bg-black/60 z-20 min-[1101px]:hidden"
          onClick={() => setDrawer(false)}
        />
      )}
      <button
        onClick={() => setDrawer(true)}
        aria-label="Open menu"
        className="min-[1101px]:hidden fixed z-10 top-4 left-4 w-12 h-12 rounded-xl bg-card text-accent flex items-center justify-center"
      >
        <FaBars />
      </button>

      <main
        className="main-panel bg-card rounded-[1.375rem] overflow-hidden"
        style={{ "--side": collapsed ? "5.75rem" : "23.5rem" }}
      >
        <div className="corner-dash" />
        <button
          onClick={toggleFull}
          aria-label="Toggle fullscreen"
          title={full ? "Exit fullscreen" : "Enter fullscreen"}
          className="group absolute z-20 top-[1.125rem] right-6 w-[3.125rem] h-[3.125rem] rounded-xl bg-page/60 text-mute hover:text-accent flex items-center justify-center text-[1.125rem]"
        >
          {full ? <FaCompressArrowsAlt /> : <FaExpandArrowsAlt />}
          {full && (
            <span className="pointer-events-none absolute -top-[1.1rem] right-[-1.5rem] hidden group-hover:block bg-card text-ink text-[1.05rem] rounded-lg px-4 py-1.5 whitespace-nowrap shadow">
              Exit fullscreen
            </span>
          )}
        </button>
        <div
          ref={scroller}
          className="scroll-thin h-full overflow-y-auto overflow-x-hidden"
        >
          <div key={page} className="fade-in">
            <Page />
          </div>
        </div>
      </main>
      <Modals />
    </>
  );
}

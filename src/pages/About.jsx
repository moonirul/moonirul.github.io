import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaGraduationCap,
  FaBriefcase,
  FaFileDownload,
  FaSearch,
  FaLaptopCode,
  FaChartBar,
  FaChartPie,
  FaDatabase,
  FaHeart,
} from "react-icons/fa";

import ReactCountryFlag from "react-country-flag";

import { PageHeading, SectionTitle } from "../components/ui";
import { profile } from "../data/content";

// Personal Information
const facts = [
  {
    icon: FaBriefcase,
    k: "Role",
    v: "Junior Executive, AI, Softvence IT LTD",
  },
  {
    icon: FaMapMarkerAlt,
    k: "Location",
    v: profile.location,
  },
  {
    icon: FaGraduationCap,
    k: "Degree",
    v: "B.Sc. in CSE, CGPA 3.72 / 4.00",
  },
  {
    icon: FaEnvelope,
    k: "Email",
    v: profile.email,
  },
];

// Languages
const languages = [
  {
    name: "English",
    level: "Native",
    countryCode: "US",
    description:
      "Native speaker with excellent communication and writing skills.",
  },
  {
    name: "Bengali",
    level: "Fluent",
    countryCode: "BD",
    description:
      "Fluent speaker with excellent communication and writing skills.",
  },
  {
    name: "Hindi",
    level: "Fluent",
    countryCode: "IN",
    description: "Fluent speaker with strong listening and speaking skills.",
  },
];

// Personal Interests
const interests = [
  {
    icon: FaSearch,
    accent: "Learning",
    title: "New Technologies",
    description:
      "Continuously learning advanced tools and technologies in the data field.",
  },
  {
    icon: FaLaptopCode,
    accent: "Problem",
    title: "Solving",
    description:
      "Solving complex problems using logical and analytical thinking.",
  },
  {
    icon: FaChartBar,
    accent: "Working",
    title: "with Data",
    description:
      "Working with data to extract insights and meaningful patterns.",
  },
 
  {
    icon: FaDatabase,
    accent: "Solving SQL",
    title: "Challenges",
    description:
      "Practicing and solving SQL challenges to improve query skills.",
  },
 
];

export default function About() {
  return (
    <>
      <PageHeading sub="Know who I am" accent="About" rest="Me" />

      <div className="px-6 sm:px-10 lg:px-[4.125rem] pb-12">
        {/* Professional Summary */}
        <SectionTitle accent="Summary">Professional</SectionTitle>

        <p className="text-lg sm:text-[1.3125rem] leading-[1.65] max-w-[1100px]">
          {profile.summary}
        </p>

        {/* Personal Information */}
        <div className="grid sm:grid-cols-2 gap-5 mt-10">
          {facts.map(({ icon: Icon, k, v }) => (
            <div
              key={k}
              className="bg-inner/80 rounded-2xl p-6 flex items-center gap-5"
            >
              <div className="w-14 h-14 rounded-full bg-accent text-onaccent flex items-center justify-center text-[1.375rem] flex-none">
                <Icon />
              </div>

              <div className="min-w-0">
                <div className="text-mute text-base">{k}</div>
                <div className="text-lg break-words">{v}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Problem Solving */}
        <SectionTitle accent="Solving">Problem</SectionTitle>

        <p className="text-lg sm:text-[1.3125rem] leading-[1.65]">
          Solved 150+ algorithmic problems across LeetCode and HackerRank,
          demonstrating proficiency in Data Structures, Algorithms, and
          computational problem-solving.
          <br />
          <span className="text-mute">LeetCode:</span> monirul8888 &nbsp;|&nbsp;
          <span className="text-mute">HackerRank:</span> monirul_88
        </p>

        {/* Personal Interests */}

        {/* Personal Interests */}
        <section className="mt-14">
          <h2 className="flex items-center gap-3 text-3xl sm:text-[2rem] font-bold mb-8">
            <span className="text-accent text-4xl font-normal leading-none">
              |
            </span>
            <span>
              <span>Personal</span>{" "}
              <span className="text-primary">interests</span>
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {interests.map(({ icon: Icon, accent, title, description }) => (
              <div
                key={`${accent}-${title}`}
                className="flex items-stretch overflow-hidden rounded-2xl bg-inner/70 min-h-[150px] transition-all duration-300 hover:bg-inner hover:-translate-y-1"
              >
                {/* Icon Box */}
                {/* Icon Box */}
                <div className="w-[100px] sm:w-[120px] flex-none bg-accent/10 flex items-center justify-center">
                  <Icon className="text-4xl sm:text-5xl text-accent" />
                </div>

                {/* Interest Details */}
                <div className="flex-1 min-w-0 p-5 sm:p-6 flex flex-col justify-center">
                  <h3 className="text-base sm:text-lg font-bold leading-7">
                    <span className="text-primary">{accent}</span>{" "}
                    <span>{title}</span>
                  </h3>

                  <p className="text-sm sm:text-base text-mute leading-7 mt-1">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Languages I Speak */}
        <section className="mt-14">
          <h2 className="flex items-center gap-3 text-3xl sm:text-[2rem] font-bold mb-8">
            <span className="text-accent text-4xl font-normal leading-none">
              |
            </span>

            <span>
              <span className="text-primary">Languages</span>{" "}
              <span className="text-accent">I speak</span>
            </span>
          </h2>

          <div className="flex flex-col gap-8">
            {languages.map((language) => (
              <div
                key={language.name}
                className="flex items-center gap-5 sm:gap-6"
              >
                {/* Country Flag */}
                <div className="w-14 h-14 rounded-full overflow-hidden border-[3px] border-white/50 shadow-sm flex-none bg-inner">
                  <ReactCountryFlag
                    countryCode={language.countryCode}
                    svg
                    aria-label={`${language.name} flag`}
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Language Details */}
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold leading-7">
                    <span>{language.name}</span>

                    <span className="font-normal text-mute">
                      {" "}
                      - {language.level}
                    </span>
                  </h3>

                  <p className="text-base sm:text-lg text-mute leading-7 mt-1">
                    {language.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Download CV */}
        <div className="flex justify-center mt-12">
          <a
            href={profile.cv}
            download
            className="inline-flex items-center justify-center gap-4 bg-accent text-onaccent rounded-full px-8 sm:px-10 h-16 sm:h-[4.375rem] text-lg sm:text-xl tracking-wide hover:brightness-110 transition"
          >
            <FaFileDownload />
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </>
  );
}

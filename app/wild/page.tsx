"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { projectsData, pastProjectsData } from "@/lib/data";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function WildPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  useEffect(() => {
    document.body.classList.add('wild-mode-active');
    return () => {
      document.body.classList.remove('wild-mode-active');
    };
  }, []);

  const curatedPastProjects = pastProjectsData.filter(p => 
    ["A²R Lab", "HV Enclosure - FSAE", "Dash - Startup", "Air Cleaning Robot v2", "Audio Forensics Research", "Air Cleaning Robot v1"].includes(p.title)
  );

  const allProjects = [...projectsData, ...curatedPastProjects];

  return (
    <div ref={containerRef} className="wild-mode-active min-h-[200vh] bg-black text-[#0f0] font-mono overflow-x-hidden selection:bg-[#0f0] selection:text-black">
      {/* Overlay to hide default layout background */}
      <div className="fixed inset-0 bg-black z-[-1]"></div>
      
      {/* Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f0_1px,transparent_1px),linear-gradient(to_bottom,#0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 z-0 pointer-events-none"></div>

      <main className="relative z-10 p-4 sm:p-10 pt-0 sm:pt-0 mt-4">
        {/* Header - Absolute positioning to stick to top */}
        <header className="flex justify-between items-center border-b-4 border-[#0f0] pb-4 mb-20 pt-4">
          <Link href="/" className="text-2xl font-black hover:bg-[#0f0] hover:text-black px-2 transition-colors">
            ← EXIT_WILD_MODE
          </Link>
          <div className="text-xl animate-pulse hidden sm:block">SYSTEM.STATUS: CRITICAL</div>
        </header>

        {/* Hero - Reduced height further */}
        <section className="min-h-[50vh] flex flex-col justify-center items-start relative">
          <motion.h1 
            className="text-6xl sm:text-9xl font-black leading-none mb-8 mix-blend-difference"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            MIKUL<br/>
            SARAVANAN
          </motion.h1>
          
          <motion.div 
            className="text-2xl sm:text-4xl border-l-8 border-[#f0f] pl-6 mb-10 max-w-3xl"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-[#f0f]">WARNING:</span> EXTREME BUILDER DETECTED.
            SPECIALIZING IN AI, ROBOTICS, AND BREAKING THINGS.
          </motion.div>

          <div className="flex gap-4">
            {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                className="text-4xl hover:text-[#f0f] hover:scale-125 transition-transform"
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>

          {/* Floating 3D-ish Element */}
          <motion.div 
            style={{ rotate }}
            className="absolute right-0 top-1/4 w-64 h-64 border-4 border-[#0f0] rounded-full flex items-center justify-center opacity-50 pointer-events-none hidden sm:flex"
          >
            <div className="w-48 h-48 border-4 border-[#f0f] rotate-45"></div>
          </motion.div>
        </section>

        {/* Projects Marquee */}
        <section className="py-20 overflow-hidden">
          <h2 className="text-4xl font-black mb-10 border-b-4 border-[#f0f] inline-block">PROJECT_DATABASE</h2>
          
          <div className="flex gap-10 w-[200%]">
            <motion.div 
              className="flex gap-10"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            >
              {[...allProjects, ...allProjects].map((project, index) => (
                <div key={index} className="w-[400px] border-4 border-[#0f0] p-6 hover:bg-[#0f0] hover:text-black transition-colors group relative flex-shrink-0">
                  <div className="absolute top-0 right-0 bg-[#f0f] text-white px-2 text-xs font-bold">
                    IDX_{index}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 uppercase truncate" title={project.title}>{project.title}</h3>
                  <p className="font-mono text-sm mb-4 opacity-80 group-hover:opacity-100 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs border border-current px-1">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Chaos Section */}
        <section className="py-40 relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                <h1 className="text-[20vw] font-black text-center leading-none">
                    BUILD<br/>FAST
                </h1>
            </div>
            
            <div className="max-w-4xl mx-auto border-4 border-white p-10 bg-black relative z-10">
                <h2 className="text-5xl font-black mb-8 text-white">THE MISSION</h2>
                <p className="text-xl leading-relaxed text-white">
                    I don't just write code. I engineer systems. From <span className="text-[#0f0]">autonomous robots</span> to <span className="text-[#f0f]">financial algorithms</span>, 
                    my goal is to push the boundaries of what's possible.
                    <br/><br/>
                    Pioneering <span className="text-[#f0f]">Voice AI</span> and <span className="text-[#0f0]">Autonomous Agents</span> to redefine human-computer interaction.
                    <br/><br/>
                    Currently building the future at <span className="bg-white text-black px-1">Columbia University</span>.
                </p>
            </div>
        </section>

        {/* Footer */}
        <footer className="py-20 text-center border-t-4 border-[#0f0]">
            <a href="mailto:mikulventure@gmail.com" className="text-4xl sm:text-6xl font-black hover:bg-[#f0f] hover:text-white transition-colors px-4">
                INITIATE_CONTACT()
            </a>
        </footer>

      </main>
    </div>
  );
}

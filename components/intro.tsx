"use client";

import { motion } from 'framer-motion'
import Link from 'next/link';
import React from 'react'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

export default function Intro() {
    return (
        <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div 
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{type: "tween", duration: 0.2}}
                    >
                        <img src="/Mikul.jpg" alt="Mikul Saravanan Portrait" width={195} height={195} className="h-25 w-25 rounded-full object-cover border-[0.35rem] border-white shadow-xl"/>
                    </motion.div>
                    <motion.span className='absolute bottom-0 right-0 text-4xl'
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{type: "spring", stiffness: 125, delay: .12, duration: 0.7}}
                    >🙌</motion.span>
                </div>
            </div>

            <motion.h1
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello, I am Mikul Saravanan.</span> I'm a{" "}
                <span className="font-bold">Columbia University student</span> and Egleston Scholar majoring in{" "}
                <span className="font-bold">Computer Science</span> and minoring in{" "}
                <span className="font-bold">Economics</span>. I participate in many clubs and am actively researching. My passions are in{" "}
                <span className="underline">CS, Robotics and AI</span>, and <span className="underline">finance</span>.
            </motion.h1>

            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                delay: 0.1,
                }}
            >
        <Link href="#contact"  className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
                    Contact me <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
                </Link>

                <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            href="/Mikul_Saravanan_Resume.pdf"> {/*download={true}*/}
                    Download Resume <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>

                <a className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack" 
                    href="https://www.linkedin.com/in/mikul-saravanan/"
                    target="_blank">
                    <BsLinkedin />
                </a>
                {/*dark:bg-white/10 dark:text-white/60*/}

                <a
                className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack" 
                href="https://github.com/MiPlayer123"
                target="_blank"
                >
                <FaGithubSquare />
                </a>
                {/*dark:bg-white/10 dark:text-white/60*/}
            </motion.div>

        </section>
    )
}

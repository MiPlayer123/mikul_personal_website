"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'

export default function About() {
  return (
    
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
        <SectionHeading>About me</SectionHeading>

        <p className="mb-3">
            I am currently studing {" "} <span className="font-medium">Computer Science and Economics</span> at Columbia University. 
            As an <a href="https://www.engineering.columbia.edu/egleston-scholars/mikul-saravanan" className="text-blue-800 hover:text-blue-900" target='_blank'>Egleston Scholar</a>, I am currently actively 
            <span className='font-medium'> researching at the The Accessible and Accelerated Robotics Lab </span><a href="https://a2r-lab.org/" className="font-medium text-blue-800 hover:text-blue-900" target='_blank'>(A²R Lab)</a>.
            I am also a member of the {" "} <span className="font-medium">Columbia University Formula Racing</span> team and 
            help lead the building of a 12lb battle bot for{" "} <span className="font-medium">Columbia University Robotics Club's Combat Robotics</span> subteam.
            In addition, I am a member of  {" "} <span className="font-medium">Columbia Space Initaive</span> and the Columbia Financial Investment Group. 
            I also am a part of {" "} <span className="font-medium">Paragon National Group's Quant Team</span> in the educational progam and
            learning from CORE's {" "} <span className="font-medium">Project Management</span> Fellowship.
        </p>

        <p className="mb-3">    
            I love creating projects and building things from the ground up, both on the {" "}
            <span className="font-medium">hardware side and software side</span>.{" "}
            <span className="italic">My favorite part of programming</span> is the
            problem-solving aspect. I <span className="underline">love</span> the
            feeling of finally figuring out a solution to a problem. In the same sense, I enjoy researching and 
            analyzing compaines, stocks, or even problem solving. My goal is to become a
            {" "} <span className="font-medium">startup founder one day</span>
            . I am always looking to learn new skills and technologies. I am currently looking for {" "}
            <span className="font-medium">intership oppurtunites</span> as a software
            developer or an analyst.
        </p>

        <p>
            <span className="italic">In my free time</span>, I enjoy
            hanging out with friends, going to the gym, and exploring nature and national parks. I also enjoy{" "}
            <span className="font-medium">working on new projects and learning</span>.
        </p>
        
    </motion.section>
  )
}

"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion} from 'framer-motion'
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    
    <motion.section
      ref={ref}
      className="mb-20 max-w-[47rem] text-left leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
        <SectionHeading>About me</SectionHeading>

        <p className='mb-3 text-center'>An avid learner and passionate maker, I always want to make something new. 🙂</p>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Passions</h2>
        <ul style={{textAlign: 'left', marginBottom:'2rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>Developing technology with a real-world impact, highlighted by my air cleaning robot project which is 
                <a href="https://patents.google.com/patent/US20220390135A1/" className="links" target='_blank'> patent pending </a>
                and <a href="https://doi.org/10.36838/v5i1.17" className="links" target='_blank'>published</a>.
            </li>
            <li>Contributing to the field of Audio Forensics through 
                <a href="https://link.springer.com/article/10.1007/s10462-023-10539-8" className="links" target='_blank'> published research</a>
            </li>
            <li>Automating and enhancing everyday life, from smartifying my home to attending 
            <a href="https://devpost.com/MiPlayer123?ref_content=user-portfolio&ref_feature=portfolio" className="links" target='_blank'> hackathons</a>
            .</li>
            <li>Exploring the intersection of technology and finance.</li>
        </ul>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Hobbies</h2>
        <ul style={{textAlign: 'left', marginBottom:'2rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>Hanging out with friends</li>
            <li>Exploring nature and national parks</li>
            <li>Working out at the gym</li>
            <li>Working on new projects and learning</li>
        </ul>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>School Organizations</h2>
        <ul style={{textAlign: 'left', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>Research @ researching at the The Accessible and Accelerated Robotics Lab 
                <a href="https://a2r-lab.org/" className=" links" target='_blank'> (A²R Lab)</a>
                .</li>
            <li>Columbia University <a href="https://fsae.engineering.columbia.edu/" className="links" target='_blank'>Formula Racing</a></li>
            <li>Columbia University 
                <a href="https://www.columbiaroboticsclub.com/" className="links" target='_blank'> Robotics Club</a>
                 - Combat Robotics (battlebots)</li>
            <li>Columbia Space Initiative</li>
            <li>
                <a href="https://paragoninvestments.org/index.html" className="links" target='_blank'>Paragon Global Investment&apos;s </a>
                 Quant Team</li>
            <li>CORE&apos;s Project Management Fellowship.</li>
            <li>CUSP: <a href="https://www.engineering.columbia.edu/egleston-scholars/mikul-saravanan" className="links" target='_blank'>Egleston Scholar</a></li>
        </ul>
        {/*
        <p className="mb-3">
            An avid learner and a passionate maker, I want to use technology to {" "} <span className="underline">impact the world</span>. 
            My passions have led me to explore and research. As a result, my favorite project is my air cleaning robot is 
            <a href="https://patents.google.com/patent/US20220390135A1/" className="links" target='_blank'> patent pending </a>
            and <a href="https://doi.org/10.36838/v5i1.17" className="links" target='_blank'>published</a>. 
            In the past, I have also published a <a href="https://link.springer.com/article/10.1007/s10462-023-10539-8" className="links" target='_blank'>paper on Audio Forensics</a>.
            I love to automate things, and I have {" "} <span className="underline">smartified</span> my room and my home. I also became a 
            <a href="https://devpost.com/MiPlayer123?ref_content=user-portfolio&ref_feature=portfolio" className="links" target='_blank'> hack[athon]er</a>.
        </p>

        <p className="mb-3">
            I am currently studing {" "} <span className="font-medium">Computer Science and Economics</span> at Columbia University. 
            As an <a href="https://www.engineering.columbia.edu/egleston-scholars/mikul-saravanan" className="links" target='_blank'>Egleston Scholar</a>, I am currently actively 
            <span className='underline'> researching at the The Accessible and Accelerated Robotics Lab </span><a href="https://a2r-lab.org/" className="font-medium links" target='_blank'>(A²R Lab)</a>.
            I am also a member of the {" "} <span className="underline">Columbia University Formula Racing</span> team and 
            help lead the building of a 12lb battle bot for{" "} <span className="underline">Columbia University Robotics Club&apos;s Combat Robotics</span> subteam.
            In addition, I am a member of  {" "} <span className="font-medium">Columbia Space Initaive</span> and the Columbia Financial Investment Group. 
            I also am a part of {" "} <span className="underline">Paragon National Group&apos;s Quant Team</span> in the educational progam and
            learning from CORE&apos;s {" "} <span className="underline">Project Management</span> Fellowship.
        </p>

        <p className="mb-3">    
            I love creating projects and building things from the ground up, both on the {" "}
            <span className="font-medium">hardware side and software side</span>.{" "}
            <span className="italic">My favorite part of programming</span> is the
            problem-solving aspect. My goal is to become a
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
        */}
        
    </motion.section>
  )
}

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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
        <SectionHeading>About me</SectionHeading>

        <p className="mb-3">
            An avid learner and a passionate maker, I want to use technology to {" "} <span className="font-medium">impact the world</span>. 
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
            <span className='font-medium'> researching at the The Accessible and Accelerated Robotics Lab </span><a href="https://a2r-lab.org/" className="font-medium links" target='_blank'>(A²R Lab)</a>.
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
        
    </motion.section>
  )
}

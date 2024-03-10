"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData, pastProjectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.1);

  return (
    <section ref={ref} id="projects" className='scroll-mt-28 mb-5'>
        <SectionHeading>Current Projects</SectionHeading>
        <div className="current-projects grid grid-cols-2 gap-4 scale-95 mb-20">
          {
            projectsData.map((project, index) => (
              <React.Fragment key={index}>
                <Project {...project}/>
              </React.Fragment>
            ))
          }

        </div>  
        <SectionHeading>Past Projects</SectionHeading>
        <div className="past-projects grid grid-cols-2 gap-5 scale-90">
          {
            pastProjectsData.map((project, index) => (
              <React.Fragment key={index}>
                <Project {...project}/>
              </React.Fragment>
            ))
          }

        </div>
    </section>
  )
}

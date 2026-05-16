"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData, pastProjectsData, showcaseData } from "@/lib/data";
import Project from "./project";
import ShowcaseProject from "./showcase-project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.1);

  return (
    <section ref={ref} id="projects" className='scroll-mt-28 mb-0'>
        <SectionHeading>Current Projects</SectionHeading>
        <div className="current-projects grid lg:grid-cols-2 gap-4 mb-8 max-w-xl lg:max-w-[85rem] mx-auto">
          {
            projectsData.map((project, index) => (
              <React.Fragment key={index}>
                <Project {...project}/>
              </React.Fragment>
            ))
          }

        </div>  
        <SectionHeading>
          <span className="mb-0 block">Past Projects</span>
        </SectionHeading>
        <div className="past-projects grid lg:grid-cols-2 gap-5 mb-0 max-w-xl lg:max-w-[85rem] mx-auto">
          {
            pastProjectsData.map((project, index) => (
              <React.Fragment key={index}>
                <Project {...project}/>
              </React.Fragment>
            ))
          }

        </div>
        <SectionHeading>Showcase</SectionHeading>
        <div className="showcase-projects grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 max-w-xl lg:max-w-[85rem] mx-auto">
          {showcaseData.map((project, index) => (
            <React.Fragment key={index}>
              <ShowcaseProject {...project} />
            </React.Fragment>
          ))}
        </div>
    </section>
  )
}

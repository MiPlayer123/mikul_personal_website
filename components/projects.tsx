import React, { useRef } from 'react'
import SectionHeading from './section-heading'
import { pastProjectsData, projectsData } from '@/lib/data'
import Project from './project'

export default function Projects() {
  return (
    <section>
        <SectionHeading>Current Projects</SectionHeading>
        <div className="current-projects grid grid-cols-2 gap-4 scale-95">
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

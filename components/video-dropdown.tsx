"use client";

import React, { useState } from 'react';

export default function VideoDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <section className="mb-20 sm:mb-30">
      <div className="accordion items-center justify-center gap-2 text-lg text-black">
        <button className="accordion-button justify-center bg-white borderBlack p-4 text-black hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer dark:bg-white/20 dark:text-white/80" onClick={toggleOpen}>
          {isOpen ? 'Hide Video' : 'Show 2023 Maker Profile Video'}
        </button>

        {isOpen && (
          <div className="mt-4">
            <br className='mb-10'/>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/SejmLAb3-iA"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
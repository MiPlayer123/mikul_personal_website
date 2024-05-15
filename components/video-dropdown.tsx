"use client";

import React, { useState } from 'react';

export default function VideoDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <section className="mb-20 sm:mb-30">
      <div className="accordion items-center justify-center gap-2 text-lg text-black">
        <div className="flex justify-center">
        <button
          className="accordion-button bg-white borderBlack p-4 text-black hover:text-gray-950 flex items-center gap-2 rounded-full transition cursor-pointer dark:bg-white/20 dark:text-white/80"
          onClick={toggleOpen}
          style={{ transition: 'transform 0.25s', transformOrigin: 'center' }}
        >
          {isOpen ? 'Hide Video' : 'Show 2023 Maker Profile Video'}
        </button>
        </div>

        {isOpen && (
          <div className="mt-4 w-full">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="640"
                height="360"
                className="mt-4 rounded-lg shadow-lg border-2 dark:border-white/20"
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
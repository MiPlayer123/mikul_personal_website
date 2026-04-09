"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { ShowcaseItem } from "@/lib/data";

export default function ShowcaseProject({
  title,
  description,
  url,
  imageUrl,
}: ShowcaseItem) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="h-full"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block group h-full"
      >
        <div className="bg-gray-100 border border-black/5 rounded-lg overflow-hidden hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 h-full flex flex-col">
          {imageUrl && (
            <div className="relative w-full h-36">
              <Image
                src={imageUrl}
                alt={title}
                quality={95}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="p-5 flex-1">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-lg font-semibold dark:text-white">
                {title}
              </h3>
              {url && (
                <FiExternalLink className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400 group-hover:text-gray-700 dark:text-white/40 dark:group-hover:text-white/70 transition" />
              )}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

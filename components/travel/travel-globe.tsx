"use client";

import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { useTheme } from "@/context/theme-context";

type TravelGlobeProps = {
  markers: { lat: number; lng: number }[];
};

export default function TravelGlobe({ markers }: TravelGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerStart = useRef<number | null>(null);
  const dragOffset = useRef(0);
  const dragOffsetAtStart = useRef(0);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const dark = theme === "dark";
    let autoPhi = 0;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: canvas.offsetWidth * 2,
      height: canvas.offsetWidth * 2,
      phi: 0,
      theta: 0.25,
      dark: dark ? 1 : 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: dark ? 8 : 7,
      baseColor: dark ? [0.35, 0.4, 0.5] : [0.82, 0.84, 0.88],
      markerColor: dark ? [0.38, 0.65, 0.98] : [0.15, 0.39, 0.92],
      glowColor: dark ? [0.12, 0.14, 0.2] : [0.95, 0.95, 0.98],
      markers: markers.map(({ lat, lng }) => ({
        location: [lat, lng],
        size: 0.06,
      })),
    });

    const onResize = () => {
      globe.update({
        width: canvas.offsetWidth * 2,
        height: canvas.offsetWidth * 2,
      });
    };
    window.addEventListener("resize", onResize);

    let frame = 0;
    const spin = () => {
      const dragging = pointerStart.current !== null;
      if (!reducedMotion && !dragging) autoPhi += 0.003;
      globe.update({ phi: autoPhi + dragOffset.current });
      frame = requestAnimationFrame(spin);
    };
    frame = requestAnimationFrame(spin);

    // fade in once the first frame is ready
    canvas.style.opacity = "1";

    return () => {
      cancelAnimationFrame(frame);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [theme, markers]);

  return (
    <div className="mx-auto w-full max-w-[24rem] aspect-square">
      <canvas
        ref={canvasRef}
        className="h-full w-full opacity-0 transition-opacity duration-700 cursor-grab active:cursor-grabbing"
        style={{ touchAction: "pan-y" }}
        aria-label="Rotating globe with markers on visited places; drag to spin"
        onPointerDown={(e) => {
          pointerStart.current = e.clientX;
          dragOffsetAtStart.current = dragOffset.current;
          e.currentTarget.setPointerCapture(e.pointerId);
        }}
        onPointerMove={(e) => {
          if (pointerStart.current === null) return;
          dragOffset.current =
            dragOffsetAtStart.current +
            (e.clientX - pointerStart.current) / 120;
        }}
        onPointerUp={() => {
          pointerStart.current = null;
        }}
        onPointerCancel={() => {
          pointerStart.current = null;
        }}
      />
    </div>
  );
}

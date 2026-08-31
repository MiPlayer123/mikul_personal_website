"use client";

import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { useTheme } from "@/context/theme-context";

type TravelGlobeProps = {
  markers: { lat: number; lng: number }[];
};

// cobe draws markers slightly past the visible horizon, where they float in
// the glow. Cull to markers within this angular distance of the view center.
const VIEW_CENTER_LAT = (14 * Math.PI) / 180; // matches theta: 0.25 tilt
const CUTOFF_COS = Math.cos((78 * Math.PI) / 180);
// far-southern markers (Antarctica) can never get closer than ~80° to the
// north-tilted view center; give them a wider envelope - they graze the
// bottom limb, where cobe's overshoot isn't visible
const POLAR_CUTOFF_COS = Math.cos((84 * Math.PI) / 180);

function visibleMarkers(
  all: { lat: number; lng: number }[],
  rotation: number
) {
  // at rotation 0 cobe centers the view near longitude -90; increasing
  // rotation moves the view west
  const centerLng = (-90 * Math.PI) / 180 - rotation;
  return all
    .filter(({ lat, lng }) => {
      const la = (lat * Math.PI) / 180;
      const lo = (lng * Math.PI) / 180;
      const cosDist =
        Math.sin(la) * Math.sin(VIEW_CENTER_LAT) +
        Math.cos(la) * Math.cos(VIEW_CENTER_LAT) * Math.cos(lo - centerLng);
      return cosDist > (lat <= -50 ? POLAR_CUTOFF_COS : CUTOFF_COS);
    })
    .map(({ lat, lng }) => ({
      location: [lat, lng] as [number, number],
      size: 0.035,
    }));
}

export default function TravelGlobe({ markers }: TravelGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerStart = useRef<number | null>(null);
  const dragOffset = useRef(0);
  const dragOffsetAtStart = useRef(0);
  // renders a dragged frame when no animation loop is running (reduced motion)
  const renderDrag = useRef<() => void>(() => {});
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
      markers: visibleMarkers(markers, 0),
      // keep markers on the surface so the sphere occludes far-side dots
      markerElevation: 0,
    });

    const onResize = () => {
      globe.update({
        width: canvas.offsetWidth * 2,
        height: canvas.offsetWidth * 2,
      });
    };
    window.addEventListener("resize", onResize);

    // re-cull markers only after the view has moved meaningfully
    let lastCullRotation = 0;
    const render = () => {
      const rotation = autoPhi + dragOffset.current;
      if (Math.abs(rotation - lastCullRotation) > 0.05) {
        lastCullRotation = rotation;
        globe.update({ phi: rotation, markers: visibleMarkers(markers, rotation) });
      } else {
        globe.update({ phi: rotation });
      }
    };

    let frame = 0;
    if (reducedMotion) {
      // no idle loop: the globe stays static and re-renders only on drag,
      // after a short warm-up while the map texture initializes
      renderDrag.current = render;
      let warmupFrames = 0;
      const warmup = () => {
        renderDrag.current();
        if (++warmupFrames < 30) frame = requestAnimationFrame(warmup);
      };
      frame = requestAnimationFrame(warmup);
    } else {
      const spin = () => {
        if (pointerStart.current === null) autoPhi += 0.003;
        render();
        frame = requestAnimationFrame(spin);
      };
      frame = requestAnimationFrame(spin);
    }

    // fade in once the first frame is ready
    canvas.style.opacity = "1";

    return () => {
      cancelAnimationFrame(frame);
      renderDrag.current = () => {};
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [theme, markers]);

  return (
    <div className="mx-auto w-full max-w-[24rem] aspect-square">
      <canvas
        ref={canvasRef}
        className="h-full w-full opacity-0 transition-opacity duration-700 cursor-grab active:cursor-grabbing"
        style={{ touchAction: "pan-y pinch-zoom" }}
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
          renderDrag.current();
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

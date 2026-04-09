"use client";

import React, { useEffect, useRef, useCallback } from "react";

const DUCK_SIZE = 45;
const BOB_AMPLITUDE = 5;
const BOB_FREQUENCY = 0.5;
const VELOCITY_DAMPING = 0.997;
const BOUNCE_ENERGY_LOSS = 0.4;
const MAX_DRIFT_SPEED = 0.15;
const ENTRY_DURATION = 2500;

interface PhysicsState {
  x: number;
  y: number;
  vx: number;
  vy: number;
  phase: "entering" | "idle" | "dragging";
  bobTime: number;
  entryStart: number;
  entryTargetY: number;
  dragOffsetX: number;
  dragOffsetY: number;
  dragStartX: number;
  dragStartY: number;
  dragMoved: boolean;
  lastPointerX: number;
  lastPointerY: number;
  prevPointerX: number;
  prevPointerY: number;
  rotation: number;
  targetRotation: number; // for smooth flip animation
  scaleX: number;
  scaleY: number;
  driftAngle: number;
  wanderTimer: number;
  isFlipping: boolean;
  flipProgress: number;
}

export default function FloatingDuck() {
  const containerRef = useRef<HTMLDivElement>(null);
  const physicsRef = useRef<PhysicsState | null>(null);
  const viewportRef = useRef({ w: 0, h: 0 });
  const scrollRef = useRef(0);
  const rafRef = useRef<number>(0);

  const initPhysics = useCallback((): PhysicsState => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    viewportRef.current = { w, h };
    scrollRef.current = window.scrollY;
    return {
      x: w * 0.7 + Math.random() * (w * 0.2),
      y: -DUCK_SIZE - 10,
      vx: (Math.random() - 0.5) * 0.1,
      vy: 0,
      phase: "entering",
      bobTime: Math.random() * Math.PI * 2,
      entryStart: performance.now(),
      entryTargetY: 80 + Math.random() * 120,
      dragOffsetX: 0,
      dragOffsetY: 0,
      dragStartX: 0,
      dragStartY: 0,
      dragMoved: false,
      lastPointerX: 0,
      lastPointerY: 0,
      prevPointerX: 0,
      prevPointerY: 0,
      rotation: 0,
      targetRotation: 0,
      scaleX: 1,
      scaleY: 1,
      driftAngle: Math.random() * Math.PI * 2,
      wanderTimer: 0,
      isFlipping: false,
      flipProgress: 0,
    };
  }, []);

  useEffect(() => {
    const physics = initPhysics();
    physicsRef.current = physics;

    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };

    const onResize = () => {
      viewportRef.current = { w: window.innerWidth, h: window.innerHeight };
      const p = physicsRef.current;
      if (p) {
        p.x = Math.min(p.x, viewportRef.current.w - DUCK_SIZE);
        p.y = Math.min(p.y, viewportRef.current.h - DUCK_SIZE);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    let lastTime = performance.now();
    let lastScroll = scrollRef.current;

    const tick = (now: number) => {
      const dt = Math.min(now - lastTime, 32);
      lastTime = now;
      const p = physicsRef.current;
      if (!p || !containerRef.current) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const { w, h } = viewportRef.current;
      const dtS = dt / 1000;

      // Flip animation (runs in any phase except entering)
      if (p.isFlipping) {
        p.flipProgress += dtS * 3; // full flip in ~0.33s
        if (p.flipProgress >= 1) {
          p.isFlipping = false;
          p.flipProgress = 0;
          p.rotation = 0;
          p.targetRotation = 0;
        } else {
          // Smooth eased 360 rotation
          const eased = 1 - Math.pow(1 - p.flipProgress, 3);
          p.rotation = p.targetRotation * eased;
        }
        // Bounce scale during flip — squish at start, stretch at peak, settle
        const t = p.flipProgress;
        p.scaleX = 1 + 0.15 * Math.sin(t * Math.PI);
        p.scaleY = 1 - 0.15 * Math.sin(t * Math.PI);
        // Small upward pop
        if (p.flipProgress < 0.3) {
          p.vy -= 0.08;
        }
      } else {
        // Gentle scale recovery
        p.scaleX += (1 - p.scaleX) * 0.08;
        p.scaleY += (1 - p.scaleY) * 0.08;
      }

      if (p.phase === "entering") {
        const elapsed = now - p.entryStart;
        const progress = Math.min(elapsed / ENTRY_DURATION, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        p.y = -DUCK_SIZE + (p.entryTargetY + DUCK_SIZE) * eased;
        p.x += Math.sin(elapsed * 0.0015) * 0.2;

        if (progress >= 1) {
          p.phase = "idle";
          p.vy = 0;
        }

        containerRef.current.style.transform = `translate(${p.x}px, ${p.y}px) rotate(${p.rotation}deg) scaleX(${p.scaleX}) scaleY(${p.scaleY})`;
      } else if (p.phase === "idle") {
        p.bobTime += dtS;
        p.wanderTimer += dtS;

        // Scroll influence
        const currentScroll = scrollRef.current;
        const scrollDelta = currentScroll - lastScroll;
        if (Math.abs(scrollDelta) > 0.5) {
          p.vy += scrollDelta * 0.01;
          p.vx += (Math.random() - 0.5) * Math.abs(scrollDelta) * 0.005;

          // Stronger scroll = tumble the duck a bit
          if (Math.abs(scrollDelta) > 15 && !p.isFlipping) {
            p.rotation += scrollDelta * 0.3;
          }
        }
        lastScroll = currentScroll;

        // Soft gravity — gently pulls duck toward vertical center
        const centerY = h * 0.45;
        const distFromCenter = (centerY - p.y) / h;
        p.vy += distFromCenter * 0.004;

        // Very slight gravity so it doesn't just float up forever
        p.vy += 0.0006;

        // Very gentle wandering
        p.driftAngle += (Math.random() - 0.5) * 0.01;
        if (p.wanderTimer > 4 + Math.random() * 5) {
          p.driftAngle += (Math.random() - 0.5) * 1.2;
          p.wanderTimer = 0;
        }
        p.vx += Math.cos(p.driftAngle) * 0.001;
        p.vy += Math.sin(p.driftAngle) * 0.0005;

        // Clamp drift speed
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > MAX_DRIFT_SPEED) {
          p.vx = (p.vx / speed) * MAX_DRIFT_SPEED;
          p.vy = (p.vy / speed) * MAX_DRIFT_SPEED;
        }

        // Very gentle damping
        p.vx *= VELOCITY_DAMPING;
        p.vy *= VELOCITY_DAMPING;

        // Apply velocity
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        // Bob
        const bobOffset = Math.sin(p.bobTime * BOB_FREQUENCY * Math.PI * 2) * BOB_AMPLITUDE;

        // Edge bounce — reset drift angle to point away from the wall
        if (p.x < 0) {
          p.x = 0;
          p.vx = Math.abs(p.vx) * BOUNCE_ENERGY_LOSS + 0.02;
          p.driftAngle = (Math.random() - 0.5) * Math.PI * 0.5; // rightward
        } else if (p.x > w - DUCK_SIZE) {
          p.x = w - DUCK_SIZE;
          p.vx = -Math.abs(p.vx) * BOUNCE_ENERGY_LOSS - 0.02;
          p.driftAngle = Math.PI + (Math.random() - 0.5) * Math.PI * 0.5; // leftward
        }
        if (p.y < 0) {
          p.y = 0;
          p.vy = Math.abs(p.vy) * BOUNCE_ENERGY_LOSS + 0.02;
          p.driftAngle = Math.PI * 0.5 + (Math.random() - 0.5) * Math.PI * 0.5; // downward
        } else if (p.y > h - DUCK_SIZE) {
          p.y = h - DUCK_SIZE;
          p.vy = -Math.abs(p.vy) * BOUNCE_ENERGY_LOSS - 0.02;
          p.driftAngle = -Math.PI * 0.5 + (Math.random() - 0.5) * Math.PI * 0.5; // upward
        }

        // Gentle tilt from movement (only if not flipping)
        if (!p.isFlipping) {
          const targetTilt = p.vx * 8;
          p.rotation += (targetTilt - p.rotation) * 0.02;
        }

        containerRef.current.style.transform = `translate(${p.x}px, ${p.y + bobOffset}px) rotate(${p.rotation}deg) scaleX(${p.scaleX}) scaleY(${p.scaleY})`;
      } else if (p.phase === "dragging") {
        containerRef.current.style.transform = `translate(${p.x}px, ${p.y}px) rotate(${p.rotation}deg) scaleX(${p.scaleX}) scaleY(${p.scaleY})`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [initPhysics]);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    const p = physicsRef.current;
    if (!p || p.phase === "entering") return;

    e.preventDefault();
    (e.target as Element).setPointerCapture(e.pointerId);

    p.dragOffsetX = e.clientX - p.x;
    p.dragOffsetY = e.clientY - p.y;
    p.dragStartX = e.clientX;
    p.dragStartY = e.clientY;
    p.dragMoved = false;
    p.lastPointerX = e.clientX;
    p.lastPointerY = e.clientY;
    p.prevPointerX = e.clientX;
    p.prevPointerY = e.clientY;
    p.phase = "dragging";
  }, []);

  // Track recent pointer positions for velocity calculation
  const pointerHistoryRef = useRef<{ x: number; y: number; t: number }[]>([]);

  const onPointerMoveLocal = useCallback((e: React.PointerEvent) => {
    const p = physicsRef.current;
    if (!p || p.phase !== "dragging") return;

    const now = performance.now();
    pointerHistoryRef.current.push({ x: e.clientX, y: e.clientY, t: now });
    // Keep only last 80ms of history
    pointerHistoryRef.current = pointerHistoryRef.current.filter(
      (pt) => now - pt.t < 80
    );

    const dx = e.clientX - p.dragStartX;
    const dy = e.clientY - p.dragStartY;
    if (Math.sqrt(dx * dx + dy * dy) > 5) {
      p.dragMoved = true;
    }

    p.x = e.clientX - p.dragOffsetX;
    p.y = e.clientY - p.dragOffsetY;
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    const p = physicsRef.current;
    if (!p || p.phase !== "dragging") return;

    (e.target as Element).releasePointerCapture(e.pointerId);

    if (!p.dragMoved) {
      // Tap — do a flip!
      p.isFlipping = true;
      p.flipProgress = 0;
      p.targetRotation = p.rotation + 360;
      p.vy -= 0.5; // little upward pop
    } else {
      // Throw — calculate velocity from pointer history
      const history = pointerHistoryRef.current;
      if (history.length >= 2) {
        const oldest = history[0];
        const newest = history[history.length - 1];
        const elapsed = newest.t - oldest.t;
        if (elapsed > 0) {
          p.vx = ((newest.x - oldest.x) / elapsed) * 8;
          p.vy = ((newest.y - oldest.y) / elapsed) * 8;
        }
      }
      pointerHistoryRef.current = [];
    }

    p.phase = "idle";
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 z-50 pointer-events-none"
      style={{ willChange: "transform" }}
      aria-hidden="true"
    >
      <svg
        width={DUCK_SIZE}
        height={DUCK_SIZE}
        viewBox="0 0 32 32"
        shapeRendering="crispEdges"
        className="pointer-events-auto cursor-grab active:cursor-grabbing select-none"
        style={{ touchAction: "none" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMoveLocal}
        onPointerUp={onPointerUp}
      >
        {/* Pixel art rubber duck */}
        {/* Head */}
        <rect x="18" y="4" width="4" height="4" fill="#FFE066" />
        <rect x="14" y="4" width="4" height="4" fill="#FFE066" />
        <rect x="22" y="4" width="4" height="4" fill="#FFE066" />
        <rect x="14" y="8" width="4" height="4" fill="#FFE066" />
        <rect x="18" y="8" width="4" height="4" fill="#FFE066" />
        <rect x="22" y="8" width="4" height="4" fill="#FFE066" />
        {/* Eye */}
        <rect x="20" y="6" width="2" height="2" fill="#1A1A2E" />
        {/* Beak */}
        <rect x="26" y="8" width="4" height="2" fill="#FF8C42" />
        <rect x="26" y="10" width="2" height="2" fill="#FF8C42" />
        {/* Body */}
        <rect x="6" y="12" width="4" height="4" fill="#FFD43B" />
        <rect x="10" y="12" width="4" height="4" fill="#FFD43B" />
        <rect x="14" y="12" width="4" height="4" fill="#FFD43B" />
        <rect x="18" y="12" width="4" height="4" fill="#FFD43B" />
        <rect x="22" y="12" width="4" height="4" fill="#FFD43B" />
        <rect x="4" y="16" width="4" height="4" fill="#FFD43B" />
        <rect x="8" y="16" width="4" height="4" fill="#FFD43B" />
        <rect x="12" y="16" width="4" height="4" fill="#FFD43B" />
        <rect x="16" y="16" width="4" height="4" fill="#FFD43B" />
        <rect x="20" y="16" width="4" height="4" fill="#FFD43B" />
        <rect x="24" y="16" width="4" height="4" fill="#FFD43B" />
        <rect x="4" y="20" width="4" height="4" fill="#FFD43B" />
        <rect x="8" y="20" width="4" height="4" fill="#FFD43B" />
        <rect x="12" y="20" width="4" height="4" fill="#FFD43B" />
        <rect x="16" y="20" width="4" height="4" fill="#FFD43B" />
        <rect x="20" y="20" width="4" height="4" fill="#FFD43B" />
        <rect x="24" y="20" width="4" height="4" fill="#FFD43B" />
        {/* Wing */}
        <rect x="8" y="14" width="4" height="4" fill="#FFC107" />
        <rect x="8" y="18" width="4" height="2" fill="#FFC107" />
        {/* Belly / bottom */}
        <rect x="6" y="24" width="4" height="4" fill="#FFE066" />
        <rect x="10" y="24" width="4" height="4" fill="#FFE066" />
        <rect x="14" y="24" width="4" height="4" fill="#FFE066" />
        <rect x="18" y="24" width="4" height="4" fill="#FFE066" />
        <rect x="22" y="24" width="4" height="4" fill="#FFE066" />
        {/* Feet */}
        <rect x="10" y="28" width="4" height="2" fill="#FF8C42" />
        <rect x="18" y="28" width="4" height="2" fill="#FF8C42" />
      </svg>
    </div>
  );
}

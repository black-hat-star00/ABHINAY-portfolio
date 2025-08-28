import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
};

const randomBetween = (min: number, max: number) => Math.random() * (max - min) + min;

const parseColor = (color: string | null): string => {
  if (!color) return "#f272c8";
  if (color === "transparent" || color === "rgba(0, 0, 0, 0)") return "#f272c8";
  return color;
};

const getColorAtPoint = (x: number, y: number): string => {
  const el = document.elementFromPoint(x, y) as HTMLElement | null;
  if (!el) return "#f272c8";
  const style = window.getComputedStyle(el);
  const bg = parseColor(style.backgroundColor);
  const color = parseColor(style.color);
  // Prefer non-transparent background; fallback to text color; then default
  if (bg !== "transparent" && !bg.includes("rgba(0, 0, 0, 0)")) return bg;
  if (color) return color;
  return "#f272c8";
};

const SparkleCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: true })!;

    const resize = () => {
      const { innerWidth, innerHeight, devicePixelRatio } = window;
      const dpr = Math.min(devicePixelRatio || 1, 2);
      canvas.width = Math.floor(innerWidth * dpr);
      canvas.height = Math.floor(innerHeight * dpr);
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const addParticles = (x: number, y: number) => {
      const baseColor = getColorAtPoint(x, y);
      const count = 12;
      for (let i = 0; i < count; i++) {
        particlesRef.current.push({
          x,
          y,
          vx: randomBetween(-1.2, 1.2),
          vy: randomBetween(-1.8, -0.2),
          life: 0,
          maxLife: randomBetween(500, 1200),
          size: randomBetween(1, 2.2),
          color: baseColor,
        });
      }
      // Cap total particles to avoid perf issues
      if (particlesRef.current.length > 800) {
        particlesRef.current.splice(0, particlesRef.current.length - 800);
      }
    };

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      addParticles(e.clientX, e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    let last = performance.now();
    const gravity = 0.02;
    const friction = 0.985;

    const render = () => {
      const now = performance.now();
      const dt = now - last;
      last = now;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Twinkle background trail
      ctx.globalCompositeOperation = "lighter";

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life += dt;
        if (p.life > p.maxLife) {
          particles.splice(i, 1);
          continue;
        }
        p.vy += gravity * (dt / 16.67);
        p.vx *= friction;
        p.vy *= friction;
        p.x += p.vx * (dt / 16.67);
        p.y += p.vy * (dt / 16.67);

        const t = p.life / p.maxLife;
        const alpha = Math.max(0, 1 - t);
        const glow = Math.max(0, 1 - t * 0.9);

        // Glow
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = glow * 0.25;
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core spark
        ctx.beginPath();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = "#ffffff";
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(render);
    };
    rafRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove as any);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[5]"
      aria-hidden
    />
  );
};

export default SparkleCursor;



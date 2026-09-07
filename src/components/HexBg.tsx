import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  pulseTimer: number;
}

export const HexBg: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Check performance / motion preference
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const nodeCount = isMobile ? 22 : 55;
    const connectionDistance = isMobile ? 90 : 140;

    const points: Point[] = [];

    // Generate sparse points
    for (let i = 0; i < nodeCount; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() > 0.8 ? 3.5 : 2,
        baseAlpha: 0.15 + Math.random() * 0.35,
        alpha: 0.15 + Math.random() * 0.35,
        pulseTimer: Math.random() * 100,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.touches[0].clientX - rect.left;
        mouseY = e.touches[0].clientY - rect.top;
      }
    };

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Draw regular hexagon
    const drawHexagon = (x: number, y: number, r: number, strokeAlpha: number, fillAlpha: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const hx = x + r * Math.cos(angle);
        const hy = y + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
      }
      ctx.closePath();
      if (fillAlpha > 0) {
        ctx.fillStyle = `rgba(160, 175, 195, ${fillAlpha})`;
        ctx.fill();
      }
      if (strokeAlpha > 0) {
        ctx.strokeStyle = `rgba(180, 195, 215, ${strokeAlpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render subtle background grid nodes and connections
      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse proximity reaction
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        let activeAlpha = p.baseAlpha;
        let hexRadius = p.radius * 2;

        if (distToMouse < 160) {
          const factor = 1 - distToMouse / 160;
          activeAlpha = Math.min(0.9, p.baseAlpha + factor * 0.5);
          hexRadius += factor * 3;
        }

        // Occasional subtle pulse
        p.pulseTimer += 0.02;
        if (p.pulseTimer > 100) p.pulseTimer = 0;
        if (p.pulseTimer > 95) {
          activeAlpha = Math.min(0.85, activeAlpha + 0.3);
        }

        // Draw hexagon node
        drawHexagon(p.x, p.y, hexRadius, activeAlpha, activeAlpha * 0.2);

        // Connect nearby nodes with thin system lines
        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const pdx = p2.x - p.x;
          const pdy = p2.y - p.y;
          const pdist = Math.sqrt(pdx * pdx + pdy * pdy);

          if (pdist < connectionDistance) {
            const lineAlpha = (1 - pdist / connectionDistance) * 0.18 * (activeAlpha / p.baseAlpha);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(140, 160, 185, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // Intermittent node connection point in middle
            if (pdist < 70 && i % 3 === 0) {
              const midX = (p.x + p2.x) / 2;
              const midY = (p.y + p2.y) / 2;
              drawHexagon(midX, midY, 1.5, lineAlpha * 1.5, 0);
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
};

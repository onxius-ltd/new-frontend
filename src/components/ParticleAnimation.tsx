'use client';

import { useEffect, useRef } from 'react';

interface ParticleAnimationProps {
  particleCount?: number;
  connectionDistance?: number;
  speed?: number;
  background?: 'dark' | 'transparent' | 'white' | 'light';
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  opacity: number;
  canvasWidth: number;
  canvasHeight: number;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

const ParticleAnimation: React.FC<ParticleAnimationProps> = ({
  particleCount = 80,
  connectionDistance = 150,
  speed = 0.8,
  background = 'dark',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Background options
  const backgroundMap = {
    dark: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a1a 100%)',
    transparent: 'transparent',
    white: '#ffffff',
    light: '#f5f5f5',
  };

  const bgStyle = backgroundMap[background] || backgroundMap.dark;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Color gradient: orange to magenta (NXIUS logo colors)
    const colors = [
      '#FF6B35', // Orange
      '#FF5C5C', // Red-Orange
      '#FF4D7D', // Pink-Red
      '#E91E8C', // Magenta
      '#C41E3A', // Deep Magenta
    ];

    // Particle class
    class ParticleObject implements Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      opacity: number;
      canvasWidth: number;
      canvasHeight: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.vx = (Math.random() - 0.5) * speed;
        this.vy = (Math.random() - 0.5) * speed;
        this.radius = Math.random() * 3 + 1.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.5 + 0.5;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
      }

      update = () => {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > this.canvasWidth) this.vx *= -1;
        if (this.y < 0 || this.y > this.canvasHeight) this.vy *= -1;

        // Keep particles in bounds
        this.x = Math.max(0, Math.min(this.canvasWidth, this.x));
        this.y = Math.max(0, Math.min(this.canvasHeight, this.y));
      };

      draw = (ctx: CanvasRenderingContext2D) => {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      };
    }

    // Initialize particles
    const particles: Particle[] = Array.from(
      { length: particleCount },
      () => new ParticleObject(canvas.width, canvas.height)
    );

    // Draw connection line between close particles
    const drawConnections = () => {
      ctx.strokeStyle = 'rgba(255, 107, 53, 0.2)';
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.globalAlpha = (1 - distance / connectionDistance) * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
    };

    // Animation loop
    const animate = () => {
      // Clear canvas based on background type
      if (background === 'transparent') {
        // For transparent, use clearRect instead of fillRect
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      } else if (background === 'white') {
        // For white background, use white fade
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else if (background === 'light') {
        // For light background, use light fade
        ctx.fillStyle = 'rgba(245, 245, 245, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else {
        // For dark background, use dark fade
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });

      // Draw connections
      drawConnections();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      resizeCanvas();
      // Reinitialize particles with new canvas size
      particles.forEach((particle) => {
        particle.canvasWidth = canvas.width;
        particle.canvasHeight = canvas.height;
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [particleCount, connectionDistance, speed, background]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
        background: bgStyle,
      }}
    />
  );
};

export default ParticleAnimation;

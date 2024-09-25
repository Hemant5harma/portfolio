'use client'

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

type StarProps = {
  size: number;
  top: number;
  left: number;
};

const Star = ({ size, top, left }: StarProps) => (
  <motion.svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute"
    style={{
      width: size,
      height: size,
      top: `${top}%`,
      left: `${left}%`,
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 1, 0] }}
    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
  >
    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" fill='green' />
  </motion.svg>
);

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize(); // Set initial size

    const createCircle = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
      ctx.beginPath();
      ctx.arc(x, y, radius, startAngle, endAngle);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.stroke();
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      for (let i = 0; i < 5; i++) {
        createCircle(centerX, centerY, 100 + i * 50, 0, Math.PI * 2);
      }

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <Star size={20} top={10} left={20} />
      <Star size={40} top={30} left={80} />
      <Star size={50} top={70} left={15} />
      <Star size={30} top={50} left={90} />
      <div className="relative z-10 text-center">
        <motion.img
          src="/avatar.png"
          alt="Avatar"
          className="w-24 h-24 mx-auto mb-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="inline-flex items-center bg-gray-800 rounded-full px-4 py-2 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
          <span className="text-sm">Available for new projects</span>
        </motion.div>
        <motion.h1
          className="text-5xl font-bold mb-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Building Exceptional User Experiences
        </motion.h1>
        <motion.p
          className="text-xl mb-8 max-w-2xl mx-auto text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I specialize in transforming designs into functional, high-performing web applications. Let's discuss your next project.
        </motion.p>
        <motion.div
          className="space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button className="bg-gray-700 text-white px-6 py-3 rounded-full hover:bg-gray-600 transition-colors">
            Explore My Work ↓
          </button>
          <button className="bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors">
            👋 Let's Connect
          </button>
        </motion.div>
      </div>
    </section>
  );
}
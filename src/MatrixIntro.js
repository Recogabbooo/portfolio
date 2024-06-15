import React, { useEffect, useRef } from 'react';
import './MatrixIntro.css';

const MatrixIntro = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%';
    const fontSize = 10;
    const columns = canvas.width / fontSize;

    const drops = Array.from({ length: columns }).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="matrix-container">
      <canvas ref={canvasRef} className="matrix-canvas"></canvas>
      <div className="matrix-text">
        <p>Hello, my name is Gabriel Caballero</p>
        <p>Welcome to my personal website, here you will have all the necessary information about me, my work, my hobbies and what makes me unique as a person. Always focused on creating remarkable experiences and amazing impressions through software development... anytime, anywhere.</p>
      </div>
    </div>
  );
};

export default MatrixIntro;

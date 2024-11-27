import React, { useRef, useEffect } from "react";

const StarryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let stars: Array<{ x: number; y: number; radius: number; opacity: number }> =
      [];

    // creat dots
    const createStars = (count: number) => {
      stars = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
        });
      }
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, width, height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.shadowBlur = 5;
        ctx.shadowColor = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });
    };

    const animateStars = () => {
      drawStars();
      requestAnimationFrame(animateStars);
    };

    // start creat star
    createStars(200);

    // handle resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createStars(200); // creat again when resize screen
    };

    // function resize
    window.addEventListener("resize", handleResize);

    animateStars();

    // Cleanup when unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        background: "linear-gradient(to bottom, #090909, #000000)",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        zIndex: '-90',
        pointerEvents: 'none'
      }}
    ></canvas>
  );
};

export default StarryBackground;

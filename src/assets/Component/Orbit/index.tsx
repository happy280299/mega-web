import React, { useRef, useEffect } from "react";
import { OrbitContaier } from "./styled";

const AtomOrbitCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Đặt kích thước thực tế của canvas
    const width = (canvas.width = 400);
    const height = (canvas.height = 400);

    // const width = (canvas.width = window.innerWidth);
    // const height = (canvas.height = window.innerHeight);

    const centerX = width / 2;
    const centerY = height / 2;
    const orbits = [
      { radiusX: 170, radiusY: 55, rotation: Math.PI / 6 }, // Elip 1
      { radiusX: 170, radiusY: 55, rotation: -Math.PI / 6 }, // Elip 2
      { radiusX: 55, radiusY: 170, rotation: 0 }, // Elip 3
    ];

    const particles = [
      { angle: 0, speed: 0.005, orbitIndex: 0 },
      { angle: Math.PI / 2, speed: 0.005, orbitIndex: 1 },
      { angle: Math.PI, speed: 0.005, orbitIndex: 2 },
    ];

    const drawOrbit = (orbit: any) => {
      ctx.beginPath();
      ctx.ellipse(
        centerX,
        centerY,
        orbit.radiusX,
        orbit.radiusY,
        orbit.rotation,
        0,
        2 * Math.PI
      );
      ctx.strokeStyle = "rgba(255, 255, 255, 1)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    };

    const drawParticle = (particle: any) => {
      const orbit = orbits[particle.orbitIndex];
      // Tính toán vị trí hạt trên quỹ đạo
      const x =
        centerX +
        orbit.radiusX * Math.cos(particle.angle) * Math.cos(orbit.rotation) -
        orbit.radiusY * Math.sin(particle.angle) * Math.sin(orbit.rotation);
      const y =
        centerY +
        orbit.radiusX * Math.cos(particle.angle) * Math.sin(orbit.rotation) +
        orbit.radiusY * Math.sin(particle.angle) * Math.cos(orbit.rotation);

      // Tính toán màu dựa trên góc quay hoặc thời gian
      const colorTransition = (Math.sin(particle.angle) + 1) / 2; // Giá trị từ 0 -> 1
      const r = Math.floor(255 * colorTransition); // Từ 0 -> 255
      const g = Math.floor(255 * (1 - colorTransition)); // Từ 255 -> 0
      const b = 100; // Màu xanh dương cố định
      // Tạo màu dạng "rgb(r, g, b)"
      const color = `rgb(${r}, ${g}, ${b})`;
      ctx.beginPath();
      ctx.arc(x, y, 9, 0, 2 * Math.PI); // Kích thước điểm
      ctx.fillStyle = color;
      ctx.shadowColor = color; // Tạo hiệu ứng ánh sáng cùng màu
      ctx.shadowBlur = 15;
      ctx.fill();
    };

    const drawCenterGlow = () => {
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        20
      );
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.beginPath();
      ctx.arc(centerX, centerY, 50, 0, 2 * Math.PI);
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      drawCenterGlow();

      // Vẽ các quỹ đạo
      orbits.forEach(drawOrbit);

      // Vẽ các điểm chuyển động
      particles.forEach((particle) => {
        drawParticle(particle);
        particle.angle += particle.speed;
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <OrbitContaier className="rive-react-container">
      <canvas
        className="rive-react"
        ref={canvasRef}
      ></canvas>
    </OrbitContaier>
  );
};

export default AtomOrbitCanvas;

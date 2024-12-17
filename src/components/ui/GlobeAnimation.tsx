import { useEffect, useRef } from 'react';

export default function GlobeAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const points: [number, number, number][] = [];
    const numPoints = 800; // Reduced number of points for smaller size
    const radius = 60; // Reduced radius for smaller globe

    // Generate points on the globe
    for (let i = 0; i < numPoints; i++) {
      const lat = Math.random() * Math.PI - Math.PI / 2;
      const lon = Math.random() * Math.PI * 2;
      const x = radius * Math.cos(lat) * Math.cos(lon);
      const y = radius * Math.sin(lat);
      const z = radius * Math.cos(lat) * Math.sin(lon);
      points.push([x, y, z]);
    }

    let rotation = 0;
    const animate = () => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#9333ea'; // Brighter purple color

      // Update rotation
      rotation += 0.005;

      // Draw points
      points.forEach(([x, y, z]) => {
        // Rotate around Y axis
        const newX = x * Math.cos(rotation) + z * Math.sin(rotation);
        const newZ = -x * Math.sin(rotation) + z * Math.cos(rotation);

        // Project 3D to 2D
        const scale = 200 / (200 + newZ);
        const screenX = canvas.width / 2 + newX * scale;
        const screenY = canvas.height / 2 + y * scale;

        // Only draw points on the front half of the globe
        if (newZ < 0) {
          const alpha = Math.max(0.2, -newZ / radius); // Increased minimum opacity
          ctx.globalAlpha = alpha * 0.8; // Increased overall opacity
          ctx.beginPath();
          ctx.arc(screenX, screenY, 1, 0, Math.PI * 2); // Slightly larger point size
          ctx.fill();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={200}
      height={200}
      className="mx-auto mt-2"
    />
  );
}
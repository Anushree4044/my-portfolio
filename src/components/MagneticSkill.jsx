import React, { useRef, useState } from 'react';

export default function MagneticSkill({ children }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // 0.3 is the "magnetic strength"
    const x = (clientX - centerX) * 0.3;
    const y = (clientY - centerY) * 0.3;
    
    setPosition({ x, y });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: position.x === 0 ? "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)" : "none",
        display: "inline-block"
      }}
    >
      {children}
    </div>
  );
}
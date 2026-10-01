import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with pointer
    if (window.matchMedia('(pointer: fine)').matches) {
      const handleMove = (e: MouseEvent) => {
        setPos({ x: e.clientX, y: e.clientY });
        if (!visible) setVisible(true);
      };

      const handleLeave = () => setVisible(false);

      window.addEventListener('mousemove', handleMove, { passive: true });
      document.body.addEventListener('mouseleave', handleLeave);

      return () => {
        window.removeEventListener('mousemove', handleMove);
        document.body.removeEventListener('mouseleave', handleLeave);
      };
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed z-30 transition-opacity duration-300"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: 'translate(-50%, -50%)',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.04) 0%, rgba(139, 92, 246, 0.02) 40%, transparent 70%)',
        borderRadius: '50%',
      }}
    />
  );
}

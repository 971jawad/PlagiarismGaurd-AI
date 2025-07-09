import { useEffect, useRef } from 'react';

export function OrbitAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const nodes = container.querySelectorAll('.orbit-node');
    nodes.forEach((node, index) => {
      const element = node as HTMLElement;
      element.style.animationDelay = `${-index * 5}s`;
    });
  }, []);

  return (
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <div className="orbit-container absolute top-20 left-20" ref={containerRef}>
        <div className="orbit-node"></div>
        <div className="orbit-node"></div>
        <div className="orbit-node"></div>
        <div className="orbit-node"></div>
      </div>
      <div className="orbit-container absolute bottom-20 right-20">
        <div className="orbit-node"></div>
        <div className="orbit-node"></div>
      </div>
    </div>
  );
}

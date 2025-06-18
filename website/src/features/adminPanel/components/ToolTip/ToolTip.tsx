import React, { useEffect, useRef, useState } from "react";

type TooltipProps = {
  children: React.ReactNode; // Elementy, nad którymi ma działać tooltip
  content: React.ReactNode; // Tekst wyświetlany w tooltipie
};

const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(
    null
  );
  const tooltipRef = useRef(null);
  const [tooltipWidth, setTooltipWidth] = useState(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition(null); // Ukryj tooltip
  };

  // Ustaw szerokość tooltipa po każdym pokazaniu
  useEffect(() => {
    if (tooltipRef.current) {
      // setTooltipWidth(tooltipRef.current.offsetWidth);
    }
  }, [position, content]);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: "inline-block", position: "relative" }} // Upewnij się, że działa dla elementów inline
    >
      {children}
      {position && (
        <div
          ref={tooltipRef}
          style={{
            backgroundColor: "#007bb1",
            color: "#fff",
            padding: "8px 12px",
            borderRadius: "4px",
            pointerEvents: "none", // Tooltip nie przechwytuje zdarzeń
            zIndex: 1000,
            whiteSpace: "nowrap",
            boxShadow:
              "0 4px 6px rgba(0, 0, 0, 0.6),0 3px 5px rgba(0, 0, 0, 0.6)",
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;

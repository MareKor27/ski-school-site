import React, { useState } from "react";

type TooltipProps = {
  children: React.ReactNode; // Elementy, nad którymi ma działać tooltip
  content: React.ReactNode; // Tekst wyświetlany w tooltipie
};

const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(
    null
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setPosition({ x: event.pageX, y: event.pageY }); // 10px odstępu
  };

  const handleMouseLeave = () => {
    setPosition(null); // Ukryj tooltip
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: "inline-block" }} // Upewnij się, że działa dla elementów inline
    >
      {children}
      {position && (
        <div
          style={{
            position: "absolute",
            top: position.y + 30,
            left: position.x - 110,
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

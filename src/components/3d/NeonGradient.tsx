
import React from 'react';

interface NeonGradientProps {
  colorFrom?: string;
  colorTo?: string;
  className?: string;
  children?: React.ReactNode;
}

const NeonGradient: React.FC<NeonGradientProps> = ({
  colorFrom = "#9b87f5",
  colorTo = "#7c4dff",
  className = "",
  children
}) => {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(135deg, ${colorFrom}, ${colorTo})`,
        boxShadow: `0 0 15px ${colorFrom}, 0 0 30px ${colorTo}`
      }}
    >
      {children}
    </div>
  );
};

export default NeonGradient;

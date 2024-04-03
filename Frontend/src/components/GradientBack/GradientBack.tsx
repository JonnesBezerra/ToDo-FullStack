import React, { ReactNode } from "react";

interface GradientBackProps {
  children: ReactNode;
}

const GradientBack = ({ children }: GradientBackProps) => {
  return (
    <div className="bg-gradient-to-tr from-blue-600 via-purple-600 to-yellow-300">
      {children}
    </div>
  );
};

export default GradientBack;

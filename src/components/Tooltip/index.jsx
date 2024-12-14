import React from 'react';
import './index.css';

export const Tooltip = ({ text, position = 'top', children }) => {
  return (
    <div className="tooltip-container">
      {children}
      <span className={`tooltip tooltip-${position}`}>{text}</span>
    </div>
  );
};

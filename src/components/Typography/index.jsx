import React from 'react';
import './index.css';

export const Typography = ({ textSize = 'md', children, className }) => {
  return <p className={`typography typography-${textSize} ${className}`}>{children}</p>;
};

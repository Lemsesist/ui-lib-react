import React from 'react';

export const Heading = ({ level, className, children }) => {
  const Tag = `h${level}`;
  return <Tag className={className}>{children}</Tag>;
};

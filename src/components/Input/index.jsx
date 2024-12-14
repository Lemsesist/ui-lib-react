import React from 'react';
import './index.css';

export const Input = ({ type = 'text', placeholder, value, onChange, disabled, label, danger }) => {
  return (
    <div className="input-wrapper">
      {label && <label className={`input-label ${danger ? 'danger' : ''}`}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`input ${danger ? 'danger' : ''}`}
      />
    </div>
  );
};

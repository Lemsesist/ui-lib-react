// import "/index.css";

// function Button(props) {
//     const {size = "md", variant="primary", children } = props;
//     const ClassName = "my-button my-button--${variant} my-button--${size}";

//     return <button ClassName={ClassName}>{children}</button>;
// } 

// export default Button;



import React from 'react';
import './index.css';

export const Button = ({ type = 'button', onClick, disabled, size = 'md', variant = 'primary', children }) => {
  return (
    <button
      type={type}
      className={`button button-${variant} button-${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

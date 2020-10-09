import React from 'react';

const Button = ({ className, text, onClick, disabled }) => {
  return (
    <button disabled={disabled} onClick={onClick} className={`button ${className}`}>
      {text}
    </button>
  )
}

export { Button }

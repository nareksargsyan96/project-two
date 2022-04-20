import React from 'react';
import clsx from 'clsx';

type ButtonTypes = 'submit';

interface ButtonProps {
  type?: ButtonTypes;
  disabled?: boolean;
  children?: string;
  size?: string;
  height?: string;
  className?: string;
  clickHandler?: (data?: any) => void;
}

export const Button: React.FC<ButtonProps> = ({
  type = 'submit',
  children,
  clickHandler,
  disabled,
  size,
  height,
  className,
}) => {
  return (
    <button
      type={type}
      // @ts-ignore
      style={{ width: `${size}px`, height: `${height}px` }}
      onClick={clickHandler}
      disabled={disabled}
      className={clsx(className)}
    >
      {children}
    </button>
  );
};

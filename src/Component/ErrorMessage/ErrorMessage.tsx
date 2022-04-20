import React from 'react';
import clsx from 'clsx';

interface ErrorMessageProps {
  error: string;
  className?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ error, className }) => {
  return (
    <div className={clsx(className)}>
      <p>{error}</p>
    </div>
  );
};

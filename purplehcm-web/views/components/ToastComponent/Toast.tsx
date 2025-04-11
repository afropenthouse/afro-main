import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

type Position = 
  | 'top-right' 
  | 'top-left' 
  | 'top-center' 
  | 'bottom-right' 
  | 'bottom-left' 
  | 'bottom-center';

interface ToastProps {
  message: string;
  position?: Position;
  duration?: number; // Duration in milliseconds
}

const Toast: React.FC<ToastProps> = ({ message, position = 'top-right', duration = 5000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  const positionClasses = clsx({
    'top-4 right-4': position === 'top-right',
    'top-4 left-4': position === 'top-left',
    'top-4 left-1/2 transform -translate-x-1/2': position === 'top-center',
    'bottom-4 right-4': position === 'bottom-right',
    'bottom-4 left-4': position === 'bottom-left',
    'bottom-4 left-1/2 transform -translate-x-1/2': position === 'bottom-center',
  });

  return (
    <div
      className={`fixed ${positionClasses} bg-blue-500 text-white px-4 py-2 rounded shadow-md flex items-center justify-between`}
    >
      <span>{message}</span>
      <button
        onClick={() => setVisible(false)}
        className="ml-4 text-white focus:outline-none"
      >
        &times;
      </button>
    </div>
  );
};

export default Toast;

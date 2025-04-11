"use client"
import React from 'react';
import useModalStore from '@/store/useModalStore';

const ModalButton = ({ className, children }) => {
  const { openModal } = useModalStore();

  return (
    <button 
      onClick={openModal}
      className={`py-3 px-6 bg-red-800 text-white rounded-md font-medium text-sm hover:bg-red-900 transition-colors ${className || ''}`}
    >
      {children || 'Get Quote'}
    </button>
  );
};

export default ModalButton; 
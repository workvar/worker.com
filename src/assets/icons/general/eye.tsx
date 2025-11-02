"use client";

import React from "react";

interface EyeProps {
  className?: string;
}

const Eye: React.FC<EyeProps> = () => {
  return (
    <svg width="58" height="43" viewBox="0 0 58 43" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.58 21.4167C37.58 26.2494 33.6626 30.1667 28.83 30.1667C23.9977 30.1667 20.0801 26.2494 20.0801 21.4167C20.0801 16.5841 23.9977 12.6667 28.83 12.6667C33.6626 12.6667 37.58 16.5841 37.58 21.4167Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28.8315 1C15.7716 1 4.71665 9.5834 1 21.4167C4.71659 33.2499 15.7716 41.8333 28.8315 41.8333C41.8911 41.8333 52.9462 33.2499 56.6629 21.4167C52.9462 9.58349 41.8911 1 28.8315 1Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default Eye;


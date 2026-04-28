'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  glass?: boolean;
  className?: string;
  onClick?: () => void;
}

export function Card({
  children,
  hover = false,
  glass = false,
  className = '',
  onClick,
}: CardProps) {
  const baseStyles = 'rounded-xl transition-all duration-300 ease-out';
  const glassStyles = glass ? 'glass' : 'bg-white border border-gray-10';
  const hoverStyles = hover ? 'cursor-pointer card-hover' : '';
  const clickStyles = onClick ? 'cursor-pointer' : '';

  if (hover) {
    return (
      <motion.div
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className={`${baseStyles} ${glassStyles} ${hoverStyles} ${clickStyles} ${className}`}
        onClick={onClick}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      className={`${baseStyles} ${glassStyles} ${clickStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

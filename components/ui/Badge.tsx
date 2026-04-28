import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'blue' | 'green' | 'coral' | 'purple' | 'yellow';
  size?: 'sm' | 'md';
}

export function Badge({ children, variant = 'default', size = 'md' }: BadgeProps) {
  const variants = {
    default: 'bg-gray-10 text-gray-90',
    blue: 'bg-slalom-blue/10 text-slalom-blue',
    green: 'bg-support-green/10 text-green-700',
    coral: 'bg-support-coral/10 text-red-700',
    purple: 'bg-support-purple/10 text-purple-700',
    yellow: 'bg-support-yellow/10 text-yellow-700',
  };

  const sizes = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-body-sm',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </span>
  );
}

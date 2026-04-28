import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  icon = false,
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-slalom-blue text-white hover:bg-blue-600 focus-visible:outline-slalom-blue shadow-md hover:shadow-lg',
    secondary:
      'bg-gray-90 text-white hover:bg-gray-70 focus-visible:outline-gray-90',
    ghost:
      'bg-transparent text-gray-90 hover:bg-gray-10 focus-visible:outline-gray-90',
  };

  const sizes = {
    sm: 'px-4 py-2 text-body-sm',
    md: 'px-6 py-3 text-body',
    lg: 'px-8 py-4 text-body-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="w-4 h-4" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}

import { ReactNode, MouseEventHandler } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: ReactNode;
  secondary?: boolean;
  size?: ButtonSize;
  fullWidth?: boolean;
  isActive?: boolean;
  type?: 'submit' | 'button' | 'reset',
  className: string
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3',
};

export const Button = ({
  children,
  onClick,
  icon,
  secondary = false,
  size = 'md',
  fullWidth = false,
  isActive = true,
  type,
  className
}: ButtonProps) => {
  const baseClasses = clsx(
    `flex items-center justify-center gap-2 rounded-md font-medium transition-all 
    duration-150 ${className}`,
    sizeClasses[size],
    fullWidth && 'w-full',
    secondary
      ? 'bg-transparent border-2 border-green-500 text-green-500'
      : 'bg-green-500 text-white',
    !isActive && 'opacity-50 cursor-not-allowed'
  );

  return (
    <motion.button
      type={type}
      className={baseClasses}
      whileHover={isActive ? { scale: 1.05 } : undefined}
      whileTap={isActive ? { scale: 0.95 } : undefined}
      onClick={onClick}
      disabled={!isActive}
    >
      {icon}
      {children}
    </motion.button>
  );
};

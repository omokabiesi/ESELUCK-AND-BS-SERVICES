import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  icon = false,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-gradient-to-r from-gold to-gold-light text-forest hover:shadow-gold hover:scale-105 active:scale-100',
    secondary:
      'bg-forest text-white hover:bg-forest-light hover:shadow-lg active:scale-95',
    outline:
      'bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-forest active:scale-95',
    ghost:
      'bg-transparent text-white hover:bg-white/10 active:scale-95',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {icon && (
        <ArrowRight
          size={size === 'sm' ? 16 : size === 'lg' ? 22 : 18}
          className="group-hover:translate-x-1 transition-transform"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link to={href} className={`group ${combinedClasses}`}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group ${combinedClasses}`}
    >
      {content}
    </motion.button>
  );
}

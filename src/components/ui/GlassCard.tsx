import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  dark?: boolean;
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  dark = false,
  ...props
}: GlassCardProps) {
  const baseClasses = dark
    ? 'bg-charcoal/60 backdrop-blur-xl border border-white/10'
    : 'bg-white/80 backdrop-blur-xl border border-white/50';

  const hoverClasses = hover
    ? 'hover:shadow-elevation hover:border-gold/30 hover:-translate-y-1'
    : '';

  return (
    <motion.div
      className={`rounded-2xl shadow-glass transition-all duration-500 ${baseClasses} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

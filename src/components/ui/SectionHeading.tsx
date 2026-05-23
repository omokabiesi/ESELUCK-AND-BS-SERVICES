import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  children?: ReactNode;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  light = false
}: SectionHeadingProps) {
  return (
    <div data-ev-id="ev_76f5c14d08" className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-12 lg:mb-16`}>
      {badge &&
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 ${
        light ?
        'bg-white/10 border-white/20 text-white' :
        'bg-gold/10 border-gold/30 text-gold'}`
        }>

          <span data-ev-id="ev_293e72b3c3" className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span data-ev-id="ev_c7a5d0cce9" className="text-sm font-medium tracking-wide uppercase">{badge}</span>
        </motion.div>
      }
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance ${
        light ? 'text-white' : 'text-charcoal'}`
        }>

        {title}
      </motion.h2>
      {subtitle &&
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`mt-4 text-lg lg:text-xl leading-relaxed ${
        light ? 'text-white/70' : 'text-slate'}`
        }>

          {subtitle}
        </motion.p>
      }
    </div>);

}
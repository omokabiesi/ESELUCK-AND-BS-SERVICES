import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, MapPin, Package } from 'lucide-react';

const stats = [
{
  icon: TrendingUp,
  value: 15,
  suffix: '+',
  label: 'Years of Excellence',
  description: 'Trusted industry experience'
},
{
  icon: Users,
  value: 500,
  suffix: '+',
  label: 'Partner Farms',
  description: 'Nationwide network'
},
{
  icon: MapPin,
  value: 36,
  suffix: '',
  label: 'States Covered',
  description: 'Complete national reach'
},
{
  icon: Package,
  value: 50,
  suffix: 'K+',
  label: 'Tonnes Delivered',
  description: 'Annual distribution capacity'
}];


function AnimatedCounter({ value, suffix }: {value: number;suffix: string;}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span data-ev-id="ev_42906f7bd5" ref={ref} className="font-display text-5xl lg:text-6xl font-bold">
      {count}
      {suffix}
    </span>);

}

export default function CounterSection() {
  return (
    <section data-ev-id="ev_5a922bec5e" className="relative py-24 lg:py-32 bg-forest overflow-hidden">
      {/* Background Pattern */}
      <div data-ev-id="ev_f0f6810ad6" className="absolute inset-0">
        <div data-ev-id="ev_f2a54da0d8"
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #C4A052 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />

        <div data-ev-id="ev_ac6ee63cac" className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div data-ev-id="ev_0e2a03e5c3" className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </div>

      {/* Floating Orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-gold rounded-full blur-3xl" />


      <div data-ev-id="ev_bee0e81398" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">

          <h2 data-ev-id="ev_9db5609882" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by Nigeria's
            <span data-ev-id="ev_f0be349565" className="text-gold"> Leading Agribusinesses</span>
          </h2>
          <p data-ev-id="ev_fa035846d6" className="text-white/60 text-lg max-w-2xl mx-auto">
            Our numbers tell the story of dedication, quality, and nationwide impact.
          </p>
        </motion.div>

        <div data-ev-id="ev_9ff7687acc" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) =>
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group">

              <div data-ev-id="ev_6ff95df708" className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div data-ev-id="ev_8ac392a960" className="relative text-center p-8 rounded-2xl border border-white/10 hover:border-gold/30 transition-colors">
                <div data-ev-id="ev_1285fea69a" className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <stat.icon size={32} className="text-gold" />
                </div>
                <div data-ev-id="ev_38a4b46582" className="text-gold mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <h3 data-ev-id="ev_ee64ef1577" className="font-display text-xl font-semibold text-white mb-1">
                  {stat.label}
                </h3>
                <p data-ev-id="ev_fb1e0d1c91" className="text-white/50 text-sm">{stat.description}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
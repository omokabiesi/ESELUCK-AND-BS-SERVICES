import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, LogIn } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import Logo from '@/components/ui/Logo';

const navLinks = [
{ name: 'Home', path: '/' },
{ name: 'About', path: '/about' },
{ name: 'Products', path: '/products' },
{ name: 'Industries', path: '/industries' },
{ name: 'Import & Logistics', path: '/logistics' },
{ name: 'Partnership', path: '/partnership' },
{ name: 'Blog', path: '/blog' },
{ name: 'Contact', path: '/contact' }];


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { profile, loading } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ?
        'bg-forest/95 backdrop-blur-xl shadow-elevation border-b border-gold/10' :
        'bg-transparent'}`
        }>

        <div data-ev-id="ev_777be2f6ab" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-ev-id="ev_eeb70d9d74" className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <Logo className="w-12 h-12 lg:w-14 lg:h-14 transition-transform group-hover:scale-105" />
              <div data-ev-id="ev_be67d97665" className="hidden sm:block">
                <p data-ev-id="ev_d25e35348d" className="font-display text-lg lg:text-xl font-bold text-white leading-tight">
                  ESELUCK & BS
                </p>
                <p data-ev-id="ev_f65f3736f7" className="text-[10px] lg:text-xs text-gold tracking-[0.2em] uppercase">
                  Nigeria Limited
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav data-ev-id="ev_88326c97b6" className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) =>
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                location.pathname === link.path ?
                'text-gold bg-gold/10' :
                'text-white/80 hover:text-gold hover:bg-white/5'}`
                }>

                  {link.name}
                </Link>
              )}
            </nav>

            {/* CTA Buttons */}
            <div data-ev-id="ev_f133360017" className="hidden lg:flex items-center gap-3">
              {!loading && profile ?
              <Link
                to="/dashboard"
                className="flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 text-white font-medium text-sm rounded-lg hover:bg-white/20 transition-all">

                  <User size={18} />
                  Dashboard
                </Link> :

              <>
                  <Link
                  to="/login"
                  className="flex items-center gap-2 px-4 py-2.5 text-white/80 font-medium text-sm hover:text-gold transition-colors">

                    <LogIn size={18} />
                    Login
                  </Link>
                  <Link
                  to="/register"
                  className="px-6 py-2.5 bg-forest border-2 border-gold text-gold font-semibold text-sm rounded-lg hover:bg-gold hover:text-forest transition-all">

                    Register as Distributor
                  </Link>
                  <Link
                  to="/contact"
                  className="px-6 py-2.5 bg-gradient-to-r from-gold to-gold-light text-forest font-semibold text-sm rounded-lg hover:shadow-gold transition-all duration-300 hover:scale-105">

                    Request Quote
                  </Link>
                </>
              }
            </div>

            {/* Mobile Menu Button */}
            <button data-ev-id="ev_3172dea1c7"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 text-white hover:text-gold transition-colors"
            aria-label="Toggle menu">

              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 xl:hidden">

            <div data-ev-id="ev_8c5449987c"
          className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)} />

            <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-forest-dark border-l border-gold/20 shadow-2xl">

              <div data-ev-id="ev_54f239808a" className="p-6 pt-24 flex flex-col gap-2">
                {navLinks.map((link, index) =>
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}>

                    <Link
                  to={link.path}
                  className={`block px-4 py-3 text-lg font-medium rounded-lg transition-all ${
                  location.pathname === link.path ?
                  'text-gold bg-gold/10' :
                  'text-white/80 hover:text-gold hover:bg-white/5'}`
                  }>

                      {link.name}
                    </Link>
                  </motion.div>
              )}
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 pt-6 border-t border-gold/20 flex flex-col gap-3">

                  {!loading && profile ?
                <Link
                  to="/dashboard"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg">

                      <User size={18} />
                      Dashboard
                    </Link> :

                <>
                      <Link
                    to="/login"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg">

                        <LogIn size={18} />
                        Login
                      </Link>
                      <Link
                    to="/register"
                    className="block w-full px-6 py-3 bg-forest border-2 border-gold text-gold font-semibold text-center rounded-lg hover:bg-gold hover:text-forest transition-all">

                        Register as Distributor
                      </Link>
                      <Link
                    to="/contact"
                    className="block w-full px-6 py-3 bg-gradient-to-r from-gold to-gold-light text-forest font-semibold text-center rounded-lg hover:shadow-gold transition-all">

                        Request Quote
                      </Link>
                    </>
                }
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}
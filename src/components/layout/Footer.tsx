import { Link } from 'react-router';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUpRight } from
'lucide-react';
import Logo from '@/components/ui/Logo';

const footerLinks = {
  company: [
  { name: 'About Us', path: '/about' },
  { name: 'Our Products', path: '/products' },
  { name: 'Industries', path: '/industries' },
  { name: 'Blog', path: '/blog' }],

  services: [
  { name: 'Import & Logistics', path: '/logistics' },
  { name: 'Partnership', path: '/partnership' },
  { name: 'Distribution', path: '/partnership' },
  { name: 'Consultation', path: '/contact' }],

  support: [
  { name: 'Contact Us', path: '/contact' },
  { name: 'Request Quote', path: '/contact' },
  { name: 'FAQs', path: '/contact' },
  { name: 'Terms of Service', path: '/' }]

};

export default function Footer() {
  return (
    <footer data-ev-id="ev_809705b11a" className="relative bg-charcoal overflow-hidden">
      {/* Decorative Elements */}
      <div data-ev-id="ev_f3b1d7dc5f" className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div data-ev-id="ev_66f33b7897" className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2" />
      <div data-ev-id="ev_dc3145d969" className="absolute bottom-0 left-0 w-64 h-64 bg-forest/30 rounded-full blur-3xl translate-y-1/2" />

      <div data-ev-id="ev_986d6c96f2" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div data-ev-id="ev_5baef460df" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div data-ev-id="ev_f81b5e0663" className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <Logo className="w-14 h-14" />
              <div data-ev-id="ev_044d0443ef">
                <p data-ev-id="ev_49ee1df0da" className="font-display text-xl font-bold text-white">
                  ESELUCK & BS
                </p>
                <p data-ev-id="ev_ca107e162b" className="text-xs text-gold tracking-[0.2em] uppercase">
                  Nigeria Limited
                </p>
              </div>
            </Link>
            <p data-ev-id="ev_02806c21ce" className="text-white/60 leading-relaxed mb-8 max-w-sm">
              Nigeria's trusted importer and distributor of premium bio feeds,
              feedstock raw materials, and livestock nutrition solutions.
            </p>
            <div data-ev-id="ev_f58b4e8cbe" className="flex flex-col gap-4">
              <a data-ev-id="ev_02086bdab4"
              href="tel:+2348028325634"
              className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors group">

                <div data-ev-id="ev_40a7adf499" className="w-10 h-10 rounded-lg bg-forest flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  <Phone size={18} className="text-gold" />
                </div>
                <span data-ev-id="ev_7de4f4776a">+234 802 832 5634</span>
              </a>
              <a data-ev-id="ev_53d0e97d8c"
              href="mailto:info@eselucknbs.com"
              className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors group">

                <div data-ev-id="ev_ed1467dcb0" className="w-10 h-10 rounded-lg bg-forest flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  <Mail size={18} className="text-gold" />
                </div>
                <span data-ev-id="ev_685ac1d604">info@eselucknbs.com</span>
              </a>
              <div data-ev-id="ev_c1c63995f1" className="flex items-start gap-3 text-white/70">
                <div data-ev-id="ev_101dbd4331" className="w-10 h-10 rounded-lg bg-forest flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-gold" />
                </div>
                <span data-ev-id="ev_3ea778cb30">Shop 06d Sabo Market, First Gate, Ikorodu, Lagos</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div data-ev-id="ev_49d03342af" className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div data-ev-id="ev_c111f66398">
              <h4 data-ev-id="ev_2b96b181a4" className="font-display text-lg font-semibold text-white mb-6">
                Company
              </h4>
              <ul data-ev-id="ev_5a2e7ff256" className="flex flex-col gap-3">
                {footerLinks.company.map((link) =>
                <li data-ev-id="ev_b0a0b4163a" key={link.path + link.name}>
                    <Link
                    to={link.path}
                    className="text-white/60 hover:text-gold transition-colors inline-flex items-center gap-1 group">

                      {link.name}
                      <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />

                    </Link>
                  </li>
                )}
              </ul>
            </div>
            <div data-ev-id="ev_769292e1b4">
              <h4 data-ev-id="ev_729012ecf5" className="font-display text-lg font-semibold text-white mb-6">
                Services
              </h4>
              <ul data-ev-id="ev_c220809855" className="flex flex-col gap-3">
                {footerLinks.services.map((link) =>
                <li data-ev-id="ev_8f2712f055" key={link.path + link.name}>
                    <Link
                    to={link.path}
                    className="text-white/60 hover:text-gold transition-colors inline-flex items-center gap-1 group">

                      {link.name}
                      <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />

                    </Link>
                  </li>
                )}
              </ul>
            </div>
            <div data-ev-id="ev_68c6910d57">
              <h4 data-ev-id="ev_49bb1a7ce9" className="font-display text-lg font-semibold text-white mb-6">
                Support
              </h4>
              <ul data-ev-id="ev_c5ff8356e8" className="flex flex-col gap-3">
                {footerLinks.support.map((link) =>
                <li data-ev-id="ev_4fa745d56b" key={link.path + link.name}>
                    <Link
                    to={link.path}
                    className="text-white/60 hover:text-gold transition-colors inline-flex items-center gap-1 group">

                      {link.name}
                      <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />

                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div data-ev-id="ev_11010c890e" className="mt-16 pt-8 border-t border-white/10">
          <div data-ev-id="ev_8d3d61f601" className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p data-ev-id="ev_d8225bbe58" className="text-white/40 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} ESELUCK & BS Nigeria Limited. All rights reserved.
            </p>
            <div data-ev-id="ev_f6b7c979f9" className="flex items-center gap-4">
              {[
              { icon: Facebook, href: '#' },
              { icon: Twitter, href: '#' },
              { icon: Linkedin, href: '#' },
              { icon: Instagram, href: '#' }].
              map((social, index) =>
              <a data-ev-id="ev_d90f4568a6"
              key={index}
              href={social.href}
              className="w-10 h-10 rounded-lg bg-forest/50 flex items-center justify-center text-white/60 hover:text-gold hover:bg-gold/10 transition-all"
              aria-label={`Social link ${index + 1}`}>

                  <social.icon size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>);

}
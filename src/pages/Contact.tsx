import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Check, MessageCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';

const contactInfo = [
{
  icon: Phone,
  title: 'Phone',
  details: ['+234 802 832 5634'],
  action: 'tel:+2348028325634'
},
{
  icon: Mail,
  title: 'Email',
  details: ['info@eselucknbs.com'],
  action: 'mailto:info@eselucknbs.com'
},
{
  icon: MapPin,
  title: 'Address',
  details: ['Shop 06d Sabo Market, First Gate', 'Ikorodu, Lagos'],
  action: 'https://maps.google.com'
},
{
  icon: Clock,
  title: 'Business Hours',
  details: ['Monday - Friday: 8AM - 6PM', 'Saturday: 9AM - 2PM'],
  action: null
}];


const inquiryTypes = [
'Product Inquiry',
'Partnership Opportunity',
'Quote Request',
'Technical Support',
'General Inquiry'];


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiry_type: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    if (!supabase) {
      setError('Unable to submit. Please try again later.');
      setIsSubmitting(false);
      return;
    }

    const { error: submitError } = await supabase.
    from('contact_messages').
    insert({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || null,
      company: formData.company || null,
      inquiry_type: formData.inquiry_type,
      message: formData.message
    });

    setIsSubmitting(false);

    if (submitError) {
      setError('Failed to send message. Please try again.');
    } else {
      setIsSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section data-ev-id="ev_cb9461d7c1" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-forest via-forest-dark to-charcoal overflow-hidden">
        <div data-ev-id="ev_0e79996ac5" className="absolute inset-0">
          <div data-ev-id="ev_278d0d1eaa"
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(196, 160, 82, 0.3) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(196, 160, 82, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />

        </div>

        <div data-ev-id="ev_07f8b63db6" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto">

            <div data-ev-id="ev_c6166c395a" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
              <span data-ev-id="ev_d34d76768a" className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span data-ev-id="ev_9e16871c76" className="text-gold text-sm font-medium tracking-wide uppercase">Contact Us</span>
            </div>
            <h1 data-ev-id="ev_358cc29b85" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Get In
              <span data-ev-id="ev_aa5658464c" className="text-gold"> Touch</span>
            </h1>
            <p data-ev-id="ev_991c4485c5" className="text-xl text-white/70 leading-relaxed">
              Have questions about our products or services? Our team is ready to
              help you find the perfect feed solutions for your needs.
            </p>
          </motion.div>
        </div>

        {/* Wave */}
        <div data-ev-id="ev_935f39fdaa" className="absolute bottom-0 left-0 right-0">
          <svg data-ev-id="ev_98f0cb9a2b" viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
            <path data-ev-id="ev_f617fb0628"
            d="M0 120L48 105C96 90 192 60 288 45C384 30 480 30 576 37.5C672 45 768 60 864 67.5C960 75 1056 75 1152 67.5C1248 60 1344 45 1392 37.5L1440 30V120H0Z"
            fill="#FAF9F6" />

          </svg>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section data-ev-id="ev_47e5c2aaf4" className="py-16 bg-cream">
        <div data-ev-id="ev_a26ac7e1e3" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-ev-id="ev_505b278a8c" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) =>
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>

                <GlassCard className="h-full p-6 text-center">
                  <div data-ev-id="ev_edc3d0df53" className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gold/10 flex items-center justify-center">
                    <info.icon size={28} className="text-gold" />
                  </div>
                  <h3 data-ev-id="ev_d440ead4e4" className="font-display text-lg font-bold text-charcoal mb-3">
                    {info.title}
                  </h3>
                  {info.details.map((detail, i) =>
                <p data-ev-id="ev_b3b00d1a26" key={i} className="text-slate text-sm">
                      {info.action ?
                  <a data-ev-id="ev_73e0098c8d"
                  href={info.action}
                  className="hover:text-gold transition-colors"
                  target={info.action.startsWith('http') ? '_blank' : undefined}
                  rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}>

                          {detail}
                        </a> :

                  detail
                  }
                    </p>
                )}
                </GlassCard>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section data-ev-id="ev_d0e4220eaf" className="py-16 lg:py-24 bg-cream">
        <div data-ev-id="ev_5277e82f0c" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-ev-id="ev_73ad46e3b4" className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>

              <h2 data-ev-id="ev_c5268c41f1" className="font-display text-3xl font-bold text-charcoal mb-2">
                Send Us a Message
              </h2>
              <p data-ev-id="ev_af6cc4b6bb" className="text-slate mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {isSubmitted ?
              <div data-ev-id="ev_9e2fb91d5b" className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div data-ev-id="ev_804053d0d7" className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <Check size={32} className="text-green-600" />
                  </div>
                  <h3 data-ev-id="ev_4c789fabc9" className="font-display text-xl font-bold text-charcoal mb-2">
                    Message Sent!
                  </h3>
                  <p data-ev-id="ev_1dd11aa84f" className="text-slate mb-4">
                    Thank you for contacting us. We'll respond to your inquiry shortly.
                  </p>
                  <button data-ev-id="ev_6304af0e4c"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', company: '', inquiry_type: '', message: '' });
                }}
                className="px-6 py-3 bg-forest text-white font-semibold rounded-xl hover:bg-forest-light transition-colors">

                    Send Another Message
                  </button>
                </div> :

              <form data-ev-id="ev_4ed80bc786" onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {error &&
                <div data-ev-id="ev_3f3315fddc" className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
                      {error}
                    </div>
                }

                  <div data-ev-id="ev_0ac0deedf3" className="grid sm:grid-cols-2 gap-6">
                    <div data-ev-id="ev_315477b612">
                      <label data-ev-id="ev_fed9a76b7c" className="block text-charcoal font-medium mb-2">Full Name *</label>
                      <input data-ev-id="ev_6023f6bb2e"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    placeholder="John Doe" />

                    </div>
                    <div data-ev-id="ev_738c688e08">
                      <label data-ev-id="ev_c077a93db9" className="block text-charcoal font-medium mb-2">Email Address *</label>
                      <input data-ev-id="ev_63373daa97"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    placeholder="john@example.com" />

                    </div>
                  </div>

                  <div data-ev-id="ev_430da69a9e" className="grid sm:grid-cols-2 gap-6">
                    <div data-ev-id="ev_e12db0460b">
                      <label data-ev-id="ev_fbbe68c278" className="block text-charcoal font-medium mb-2">Phone Number</label>
                      <input data-ev-id="ev_3ace475000"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    placeholder="+234 ..." />

                    </div>
                    <div data-ev-id="ev_909ea8c5cf">
                      <label data-ev-id="ev_5852fe6d77" className="block text-charcoal font-medium mb-2">Company/Farm Name</label>
                      <input data-ev-id="ev_8337e07b73"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    placeholder="Your business name" />

                    </div>
                  </div>

                  <div data-ev-id="ev_cfb6908dba">
                    <label data-ev-id="ev_b63c6c9ffe" className="block text-charcoal font-medium mb-2">Inquiry Type *</label>
                    <select data-ev-id="ev_6f2db9db22"
                  name="inquiry_type"
                  value={formData.inquiry_type}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold">

                      <option data-ev-id="ev_e444c9182c" value="">Select inquiry type</option>
                      {inquiryTypes.map((type) =>
                    <option data-ev-id="ev_23c60f91a0" key={type} value={type}>{type}</option>
                    )}
                    </select>
                  </div>

                  <div data-ev-id="ev_34715f6e75">
                    <label data-ev-id="ev_63949a7c5d" className="block text-charcoal font-medium mb-2">Your Message *</label>
                    <textarea data-ev-id="ev_6ed19ff648"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold resize-none"
                  placeholder="Tell us how we can help you..." />

                  </div>

                  <button data-ev-id="ev_b3acc0efae"
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-gold to-gold-light text-forest font-semibold rounded-xl hover:shadow-gold transition-all disabled:opacity-50 flex items-center justify-center gap-2">

                    {isSubmitting ? 'Sending...' : <><Send size={18} /> Send Message</>}
                  </button>
                </form>
              }
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8">

              {/* Map Placeholder */}
              <div data-ev-id="ev_f2fb0e810b" className="relative h-64 lg:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-forest to-forest-dark">
                <div data-ev-id="ev_d45bc540f0" className="absolute inset-0 flex items-center justify-center">
                  <div data-ev-id="ev_12eaab8392" className="text-center">
                    <MapPin size={48} className="text-gold/50 mx-auto mb-4" />
                    <h3 data-ev-id="ev_bac4dbe4b5" className="font-display text-xl font-bold text-white mb-2">
                      Visit Our Office
                    </h3>
                    <p data-ev-id="ev_196082ee55" className="text-white/60">
                      Shop 06d Sabo Market, First Gate<br data-ev-id="ev_9374aa59e2" />
                      Ikorodu, Lagos
                    </p>
                  </div>
                </div>
                <div data-ev-id="ev_efb23db2fd"
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(#C4A052 1px, transparent 1px),
                                      linear-gradient(90deg, #C4A052 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }} />

              </div>

              {/* Quick Actions */}
              <div data-ev-id="ev_5b8cbb45df" className="bg-forest rounded-2xl p-8">
                <h3 data-ev-id="ev_9f69605f33" className="font-display text-xl font-bold text-white mb-6">
                  Quick Contact Options
                </h3>
                <div data-ev-id="ev_279cdc2cde" className="flex flex-col gap-4">
                  <a data-ev-id="ev_2002ba6a7a"
                  href="tel:+2348028325634"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 transition-colors group">

                    <div data-ev-id="ev_60994a2dbd" className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <Phone size={24} className="text-gold" />
                    </div>
                    <div data-ev-id="ev_1d38257dcb">
                      <p data-ev-id="ev_f1519ef2fc" className="text-white font-medium">Call Sales Team</p>
                      <p data-ev-id="ev_1fb53acd3c" className="text-white/60 text-sm">Mon-Sat, 8AM-6PM</p>
                    </div>
                  </a>
                  <a data-ev-id="ev_3cefa1d04b"
                  href="https://wa.me/2348028325634"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/30 transition-colors group">

                    <div data-ev-id="ev_1a34367593" className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                      <MessageCircle size={24} className="text-green-400" />
                    </div>
                    <div data-ev-id="ev_9c0b0c371b">
                      <p data-ev-id="ev_2d87a2a3b7" className="text-white font-medium">WhatsApp Us</p>
                      <p data-ev-id="ev_16e4cf0d35" className="text-white/60 text-sm">Quick response</p>
                    </div>
                  </a>
                  <a data-ev-id="ev_c66453d9a1"
                  href="mailto:info@eselucknbs.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 transition-colors group">

                    <div data-ev-id="ev_21ab315db6" className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <Mail size={24} className="text-gold" />
                    </div>
                    <div data-ev-id="ev_993d18fff9">
                      <p data-ev-id="ev_3c7a383d4d" className="text-white font-medium">Email Us</p>
                      <p data-ev-id="ev_28e94dea54" className="text-white/60 text-sm">info@eselucknbs.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section data-ev-id="ev_2f563a32af" className="py-16 bg-gradient-to-r from-gold to-gold-light">
        <div data-ev-id="ev_89d49beb52" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>

            <h2 data-ev-id="ev_fd9a1e0a15" className="font-display text-3xl font-bold text-forest mb-4">
              Looking for Product Information?
            </h2>
            <p data-ev-id="ev_ddbc4eaa8e" className="text-forest/70 text-lg mb-8">
              Browse our complete product catalog or request a custom quote for your specific needs.
            </p>
            <div data-ev-id="ev_5729743855" className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/products" variant="secondary" icon>
                View Products
              </Button>
              <Button href="/partnership" variant="outline" icon className="border-forest text-forest hover:bg-forest hover:text-gold">
                Become a Partner
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>);

}
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Shield, Award, MapPin, Phone, Mail, Check, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';

const benefits = [
{
  icon: TrendingUp,
  title: 'Competitive Margins',
  description: 'Enjoy industry-leading wholesale pricing and healthy profit margins on all products.'
},
{
  icon: Shield,
  title: 'Territory Protection',
  description: 'Exclusive distribution rights in your area to protect your market investment.'
},
{
  icon: Award,
  title: 'Marketing Support',
  description: 'Access to marketing materials, brand assets, and co-branded campaigns.'
},
{
  icon: Users,
  title: 'Training Programs',
  description: 'Technical product training and sales skills development for your team.'
}];


const partnerTypes = [
{
  title: 'Retail Distributor',
  description: 'For agro-vet shops and retail outlets selling directly to farmers.',
  requirements: ['Registered business', 'Retail location', 'Initial stock investment']
},
{
  title: 'Wholesale Distributor',
  description: 'For larger operations serving multiple retailers or direct farm clients.',
  requirements: ['Warehouse capacity', 'Distribution network', 'Sales team']
},
{
  title: 'Institutional Partner',
  description: 'For feed mills, cooperatives, and large-scale farming operations.',
  requirements: ['Established operation', 'Bulk buying capacity', 'Long-term commitment']
}];


const nigerianStates = [
'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe',
'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara',
'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau',
'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'];


export default function Partnership() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    partnerType: '',
    currentBusiness: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section data-ev-id="ev_02e9757bdb" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-forest via-forest-dark to-charcoal overflow-hidden">
        <div data-ev-id="ev_1e5fcfe215" className="absolute inset-0">
          <div data-ev-id="ev_af57e69c41"
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(196, 160, 82, 0.3) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(196, 160, 82, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />

        </div>

        <div data-ev-id="ev_28fdf4419e" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto">

            <div data-ev-id="ev_37cab9e93d" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
              <span data-ev-id="ev_4b3dcc43f6" className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span data-ev-id="ev_7a95672a45" className="text-gold text-sm font-medium tracking-wide uppercase">Partnership Program</span>
            </div>
            <h1 data-ev-id="ev_e6a0adf91d" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Grow Your Business
              <span data-ev-id="ev_630769c07e" className="text-gold"> With Us</span>
            </h1>
            <p data-ev-id="ev_4b9a8c7d35" className="text-xl text-white/70 leading-relaxed">
              Join Nigeria's most trusted feed distribution network. Partner with ESELUCK & BS
              and gain access to premium products, exclusive territories, and business support.
            </p>
          </motion.div>
        </div>

        {/* Wave */}
        <div data-ev-id="ev_58b3e3aa32" className="absolute bottom-0 left-0 right-0">
          <svg data-ev-id="ev_42adbef000" viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
            <path data-ev-id="ev_b7aad48f40"
            d="M0 120L48 105C96 90 192 60 288 45C384 30 480 30 576 37.5C672 45 768 60 864 67.5C960 75 1056 75 1152 67.5C1248 60 1344 45 1392 37.5L1440 30V120H0Z"
            fill="#FAF9F6" />

          </svg>
        </div>
      </section>

      {/* Benefits */}
      <section data-ev-id="ev_8caabce552" className="py-20 lg:py-28 bg-cream">
        <div data-ev-id="ev_ba86260397" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Partner Benefits"
            title="Why Partner With ESELUCK & BS"
            subtitle="We invest in our partners' success with comprehensive support and industry-leading terms." />


          <div data-ev-id="ev_9b38150638" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) =>
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>

                <GlassCard className="h-full p-6 text-center">
                  <div data-ev-id="ev_e7499e9ce5" className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gold/10 flex items-center justify-center">
                    <benefit.icon size={28} className="text-gold" />
                  </div>
                  <h3 data-ev-id="ev_e966ab6cb6" className="font-display text-lg font-bold text-charcoal mb-2">
                    {benefit.title}
                  </h3>
                  <p data-ev-id="ev_bb661fe194" className="text-slate text-sm">{benefit.description}</p>
                </GlassCard>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section data-ev-id="ev_8db0917ae3" className="py-20 lg:py-28 bg-white">
        <div data-ev-id="ev_a636026742" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Partnership Types"
            title="Find Your Partnership Level"
            subtitle="We have partnership options for businesses of all sizes." />


          <div data-ev-id="ev_5519f8a2ff" className="grid md:grid-cols-3 gap-6">
            {partnerTypes.map((type, index) =>
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-cream rounded-2xl p-6 hover:shadow-lg transition-shadow">

                <h3 data-ev-id="ev_896a59271f" className="font-display text-xl font-bold text-charcoal mb-2">
                  {type.title}
                </h3>
                <p data-ev-id="ev_f1d39a7cab" className="text-slate mb-6">{type.description}</p>
                <div data-ev-id="ev_5a3c52badd" className="flex flex-col gap-2">
                  <p data-ev-id="ev_58865a8643" className="text-sm font-semibold text-gold uppercase tracking-wider">Requirements:</p>
                  {type.requirements.map((req) =>
                <div data-ev-id="ev_61f03a598f" key={req} className="flex items-center gap-2 text-slate text-sm">
                      <Check size={16} className="text-forest shrink-0" />
                      <span data-ev-id="ev_e56c9a1793">{req}</span>
                    </div>
                )}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section data-ev-id="ev_dd4e25d7e3" className="py-20 lg:py-28 bg-forest">
        <div data-ev-id="ev_97ccc8d55e" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Apply Now"
            title="Become a Partner"
            subtitle="Fill out the form below and our partnership team will contact you within 48 hours."
            light />


          {isSubmitted ?
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 lg:p-12 text-center">

              <div data-ev-id="ev_be9f04c5d6" className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check size={40} className="text-green-400" />
              </div>
              <h3 data-ev-id="ev_c53f467e01" className="font-display text-2xl font-bold text-white mb-4">
                Application Submitted!
              </h3>
              <p data-ev-id="ev_0c6c93119c" className="text-white/70 mb-6">
                Thank you for your interest in partnering with ESELUCK & BS. Our team
                will review your application and contact you within 48 hours.
              </p>
              <Button href="/" variant="primary">
                Return Home
              </Button>
            </motion.div> :

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 lg:p-12">

              <div data-ev-id="ev_10ea03cb0a" className="grid md:grid-cols-2 gap-6">
                <div data-ev-id="ev_c895a65432">
                  <label data-ev-id="ev_13376071e4" className="block text-white/80 text-sm font-medium mb-2">Business Name *</label>
                  <input data-ev-id="ev_5071ff4621"
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                placeholder="Your business name" />

                </div>
                <div data-ev-id="ev_5601555eb2">
                  <label data-ev-id="ev_bce9501982" className="block text-white/80 text-sm font-medium mb-2">Contact Person *</label>
                  <input data-ev-id="ev_a0f2526bdc"
                type="text"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                placeholder="Your full name" />

                </div>
                <div data-ev-id="ev_7cfe39c91f">
                  <label data-ev-id="ev_553bd9664e" className="block text-white/80 text-sm font-medium mb-2">Email Address *</label>
                  <input data-ev-id="ev_bfd095c33e"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                placeholder="email@example.com" />

                </div>
                <div data-ev-id="ev_615e4691cb">
                  <label data-ev-id="ev_2983c96acf" className="block text-white/80 text-sm font-medium mb-2">Phone Number *</label>
                  <input data-ev-id="ev_b59261a547"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                placeholder="+234 ..." />

                </div>
                <div data-ev-id="ev_dd7cb0a357">
                  <label data-ev-id="ev_db64ff5f0b" className="block text-white/80 text-sm font-medium mb-2">State *</label>
                  <select data-ev-id="ev_bc46ebff6c"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold">

                    <option data-ev-id="ev_0f40fa6c14" value="" className="text-charcoal">Select state</option>
                    {nigerianStates.map((state) =>
                  <option data-ev-id="ev_ead51dd8fd" key={state} value={state} className="text-charcoal">{state}</option>
                  )}
                  </select>
                </div>
                <div data-ev-id="ev_5bfe6545f9">
                  <label data-ev-id="ev_f77dff2a1e" className="block text-white/80 text-sm font-medium mb-2">City/Town *</label>
                  <input data-ev-id="ev_75dd080f18"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                placeholder="Your city" />

                </div>
                <div data-ev-id="ev_d4cb70fa3c" className="md:col-span-2">
                  <label data-ev-id="ev_14e90b041d" className="block text-white/80 text-sm font-medium mb-2">Partnership Type *</label>
                  <select data-ev-id="ev_c2480f83ed"
                name="partnerType"
                value={formData.partnerType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold">

                    <option data-ev-id="ev_b32679c667" value="" className="text-charcoal">Select partnership type</option>
                    <option data-ev-id="ev_736d7cbded" value="retail" className="text-charcoal">Retail Distributor</option>
                    <option data-ev-id="ev_39119084e8" value="wholesale" className="text-charcoal">Wholesale Distributor</option>
                    <option data-ev-id="ev_62605146ab" value="institutional" className="text-charcoal">Institutional Partner</option>
                  </select>
                </div>
                <div data-ev-id="ev_f0e70a2276" className="md:col-span-2">
                  <label data-ev-id="ev_355f148ed9" className="block text-white/80 text-sm font-medium mb-2">Current Business Description</label>
                  <textarea data-ev-id="ev_f3e3254f7d"
                name="currentBusiness"
                value={formData.currentBusiness}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold resize-none"
                placeholder="Tell us about your current business operations..." />

                </div>
              </div>

              <div data-ev-id="ev_3be35672fc" className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}>

                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </Button>
              </div>
            </motion.form>
          }
        </div>
      </section>

      {/* Contact CTA */}
      <section data-ev-id="ev_c9f50a69f3" className="py-16 bg-cream">
        <div data-ev-id="ev_f919a6dd8b" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-ev-id="ev_3c45876fb2" className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 bg-white rounded-2xl shadow-lg">
            <div data-ev-id="ev_fec8ff3b21">
              <h3 data-ev-id="ev_49789c0ed6" className="font-display text-xl font-bold text-charcoal mb-2">
                Have Questions About Partnership?
              </h3>
              <p data-ev-id="ev_413e091582" className="text-slate">Our partnership team is ready to help you get started.</p>
            </div>
            <div data-ev-id="ev_391c1393ae" className="flex items-center gap-4">
              <a data-ev-id="ev_a73a955fe9"
              href="tel:+2348012345678"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-forest/10 text-forest hover:bg-forest/20 transition-colors">

                <Phone size={18} />
                <span data-ev-id="ev_6f461e229b" className="font-medium">Call Us</span>
              </a>
              <a data-ev-id="ev_3c3fc5af78"
              href="mailto:partners@eseluck.com"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gold text-forest hover:bg-gold-light transition-colors">

                <Mail size={18} />
                <span data-ev-id="ev_b46dbc9934" className="font-medium">Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>);

}
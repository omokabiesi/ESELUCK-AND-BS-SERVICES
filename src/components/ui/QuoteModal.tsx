import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Check } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const productOptions = [
'Broiler Starter Feed',
'Broiler Finisher Feed',
'Layer Mash Premium',
'Catfish Floating Pellets',
'Tilapia Grower Feed',
'Fish Fry Starter',
'Cattle Feed Concentrate',
'Pig Grower Pellets',
'Soybean Meal',
'Fish Meal',
'Corn Gluten Meal',
'Vitamin Premix',
'Other (specify in message)'];


export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product_interest: '',
    quantity: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    if (!supabase) {
      setError('Unable to submit. Please try again later.');
      setSubmitting(false);
      return;
    }

    const { error: submitError } = await supabase.
    from('quote_requests').
    insert({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company || null,
      product_interest: formData.product_interest,
      quantity: formData.quantity || null,
      message: formData.message || null
    });

    setSubmitting(false);

    if (submitError) {
      setError('Failed to submit. Please try again.');
    } else {
      setSubmitted(true);
    }
  };

  const resetAndClose = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      product_interest: '',
      quantity: '',
      message: ''
    });
    setSubmitted(false);
    setError('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen &&
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4">

          {/* Backdrop */}
          <div data-ev-id="ev_665d12f751" className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm" onClick={resetAndClose} />

          {/* Modal */}
          <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl">

            {/* Header */}
            <div data-ev-id="ev_e055747d13" className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between rounded-t-3xl">
              <div data-ev-id="ev_169efc94bd">
                <h2 data-ev-id="ev_a6bd40dc88" className="text-xl font-display font-bold text-charcoal">Request a Quote</h2>
                <p data-ev-id="ev_9116c2c4e0" className="text-slate text-sm">Get pricing for your requirements</p>
              </div>
              <button data-ev-id="ev_e498b762f2"
            onClick={resetAndClose}
            className="p-2 text-slate hover:text-charcoal hover:bg-gray-100 rounded-lg transition-colors">

                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div data-ev-id="ev_5c8b3e3f49" className="p-6">
              {submitted ?
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-8">

                  <div data-ev-id="ev_85bc0e66a4" className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <Check size={32} className="text-green-600" />
                  </div>
                  <h3 data-ev-id="ev_cac187bdea" className="text-xl font-display font-bold text-charcoal mb-2">
                    Quote Request Submitted!
                  </h3>
                  <p data-ev-id="ev_4710bf3b72" className="text-slate mb-6">
                    Thank you for your interest. Our team will contact you within 24 hours.
                  </p>
                  <button data-ev-id="ev_24e0d71e60"
              onClick={resetAndClose}
              className="px-6 py-3 bg-forest text-white font-semibold rounded-xl hover:bg-forest-light transition-colors">

                    Close
                  </button>
                </motion.div> :

            <form data-ev-id="ev_309093d013" onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {error &&
              <div data-ev-id="ev_e0291fa3d4" className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                      {error}
                    </div>
              }

                  <div data-ev-id="ev_e56c05ba46" className="grid sm:grid-cols-2 gap-4">
                    <div data-ev-id="ev_2a9467d070">
                      <label data-ev-id="ev_ab42804644" className="block text-sm font-medium text-charcoal mb-1">Full Name *</label>
                      <input data-ev-id="ev_45297d7657"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  placeholder="Your name" />

                    </div>
                    <div data-ev-id="ev_775a14d495">
                      <label data-ev-id="ev_55f24ce6bd" className="block text-sm font-medium text-charcoal mb-1">Phone *</label>
                      <input data-ev-id="ev_685c10cb66"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  placeholder="+234..." />

                    </div>
                  </div>

                  <div data-ev-id="ev_bc09beaa5d">
                    <label data-ev-id="ev_bed2a6f17a" className="block text-sm font-medium text-charcoal mb-1">Email *</label>
                    <input data-ev-id="ev_efa021e6b2"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                placeholder="your@email.com" />

                  </div>

                  <div data-ev-id="ev_284be0719b">
                    <label data-ev-id="ev_60bbbaabf9" className="block text-sm font-medium text-charcoal mb-1">Company/Farm Name</label>
                    <input data-ev-id="ev_1a06a5ef1b"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                placeholder="Optional" />

                  </div>

                  <div data-ev-id="ev_70fd75dcca">
                    <label data-ev-id="ev_04de90750d" className="block text-sm font-medium text-charcoal mb-1">Product Interest *</label>
                    <select data-ev-id="ev_4c5072d52b"
                name="product_interest"
                value={formData.product_interest}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold">

                      <option data-ev-id="ev_50d59dc064" value="">Select a product</option>
                      {productOptions.map((product) =>
                  <option data-ev-id="ev_8760ebf806" key={product} value={product}>{product}</option>
                  )}
                    </select>
                  </div>

                  <div data-ev-id="ev_9c94b5b388">
                    <label data-ev-id="ev_b51ea32646" className="block text-sm font-medium text-charcoal mb-1">Quantity Needed</label>
                    <input data-ev-id="ev_bb4edac77b"
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                placeholder="e.g., 100 bags, 5 tonnes" />

                  </div>

                  <div data-ev-id="ev_dff6234762">
                    <label data-ev-id="ev_1cb530849c" className="block text-sm font-medium text-charcoal mb-1">Additional Details</label>
                    <textarea data-ev-id="ev_1eda46bb17"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold resize-none"
                placeholder="Any specific requirements..." />

                  </div>

                  <button data-ev-id="ev_88b4b00aaa"
              type="submit"
              disabled={submitting}
              className="w-full py-3 bg-gradient-to-r from-gold to-gold-light text-forest font-semibold rounded-xl hover:shadow-gold transition-all disabled:opacity-50 flex items-center justify-center gap-2">

                    {submitting ? 'Submitting...' : <><Send size={18} /> Submit Request</>}
                  </button>
                </form>
            }
            </div>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}
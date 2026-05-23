import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const whatsappNumber = '+2348012345678';
  const message = encodeURIComponent(
    'Hello ESELUCK & BS Nigeria Limited, I would like to inquire about your products and services.'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${message}`;

  return (
    <div data-ev-id="ev_b0634c011a" className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isTooltipVisible &&
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          className="absolute bottom-full right-0 mb-3 w-64">

            <div data-ev-id="ev_aec96d04f9" className="relative bg-white rounded-2xl shadow-elevation p-4">
              <button data-ev-id="ev_faeaa6045a"
            onClick={() => setIsTooltipVisible(false)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-charcoal rounded-full flex items-center justify-center text-white hover:bg-forest transition-colors">

                <X size={14} />
              </button>
              <p data-ev-id="ev_b6d8a8e056" className="text-charcoal font-medium mb-1">Need Help?</p>
              <p data-ev-id="ev_33107a51bb" className="text-slate text-sm mb-3">
                Chat with us on WhatsApp for quick assistance.
              </p>
              <a data-ev-id="ev_a0becc3578"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-2.5 bg-[#25D366] text-white text-center font-medium rounded-lg hover:bg-[#20BD5A] transition-colors">

                Start Chat
              </a>
              {/* Tooltip Arrow */}
              <div data-ev-id="ev_d100145e63" className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45" />
            </div>
          </motion.div>
        }
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        onClick={() => setIsTooltipVisible(!isTooltipVisible)}
        className="group relative w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110"
        aria-label="Chat on WhatsApp">

        {/* Pulse Animation */}
        <span data-ev-id="ev_9b87f83294" className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <MessageCircle size={28} className="text-white relative z-10" fill="white" />
      </motion.button>
    </div>);

}
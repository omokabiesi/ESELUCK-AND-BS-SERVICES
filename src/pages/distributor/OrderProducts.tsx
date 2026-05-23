import { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Plus, Minus, ShoppingCart, Check } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const products = [
{ id: 1, name: 'Broiler Starter Feed', category: 'Poultry', unit: 'bags (25kg)' },
{ id: 2, name: 'Broiler Finisher Feed', category: 'Poultry', unit: 'bags (25kg)' },
{ id: 3, name: 'Layer Mash Premium', category: 'Poultry', unit: 'bags (25kg)' },
{ id: 4, name: 'Catfish Floating Pellets (4mm)', category: 'Fish', unit: 'bags (15kg)' },
{ id: 5, name: 'Catfish Floating Pellets (6mm)', category: 'Fish', unit: 'bags (15kg)' },
{ id: 6, name: 'Tilapia Grower Feed', category: 'Fish', unit: 'bags (15kg)' },
{ id: 7, name: 'Cattle Feed Concentrate', category: 'Livestock', unit: 'bags (50kg)' },
{ id: 8, name: 'Pig Grower Pellets', category: 'Livestock', unit: 'bags (25kg)' },
{ id: 9, name: 'Soybean Meal (46%)', category: 'Raw Materials', unit: 'tonnes' },
{ id: 10, name: 'Fish Meal (65%)', category: 'Raw Materials', unit: 'tonnes' },
{ id: 11, name: 'Corn Gluten Meal', category: 'Raw Materials', unit: 'tonnes' },
{ id: 12, name: 'Vitamin Premix', category: 'Raw Materials', unit: 'bags (25kg)' }];


const categories = ['All', 'Poultry', 'Fish', 'Livestock', 'Raw Materials'];

interface CartItem {
  product: typeof products[0];
  quantity: number;
}

export default function OrderProducts() {
  const { profile } = useAuth();
  const [activeCategory, setActiveCategory] = useState('All');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const filteredProducts = products.filter((p) =>
  activeCategory === 'All' || p.category === activeCategory
  );

  const addToCart = (product: typeof products[0]) => {
    const existing = cart.find((item) => item.product.id === product.id);
    if (existing) {
      setCart(cart.map((item) =>
      item.product.id === product.id ?
      { ...item, quantity: item.quantity + 1 } :
      item
      ));
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId: number, delta: number) => {
    setCart(cart.map((item) => {
      if (item.product.id === productId) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }).filter((item) => item.quantity > 0));
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter((item) => item.product.id !== productId));
  };

  const submitOrder = async () => {
    if (!supabase || !profile || cart.length === 0) return;
    setSubmitting(true);

    // Create order for each item in cart
    const orders = cart.map((item) => ({
      distributor_id: profile.id,
      product_name: item.product.name,
      quantity: item.quantity,
      unit: item.product.unit,
      notes: notes || null
    }));

    const { error } = await supabase.
    from('product_orders').
    insert(orders);

    setSubmitting(false);

    if (!error) {
      setSubmitted(true);
      setCart([]);
      setNotes('');
    }
  };

  const getCartQuantity = (productId: number) => {
    const item = cart.find((i) => i.product.id === productId);
    return item?.quantity || 0;
  };

  if (submitted) {
    return (
      <DashboardLayout>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto mt-20 bg-white rounded-2xl p-8 text-center shadow-sm">

          <div data-ev-id="ev_a40011389b" className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
            <Check size={40} className="text-green-600" />
          </div>
          <h2 data-ev-id="ev_ee9455aef6" className="text-2xl font-display font-bold text-charcoal mb-2">
            Order Submitted!
          </h2>
          <p data-ev-id="ev_92c6302919" className="text-slate mb-6">
            Your order has been received. Our team will review and contact you shortly.
          </p>
          <button data-ev-id="ev_a9bef57e9a"
          onClick={() => setSubmitted(false)}
          className="px-6 py-3 bg-forest text-white font-semibold rounded-xl hover:bg-forest-light transition-colors">

            Place Another Order
          </button>
        </motion.div>
      </DashboardLayout>);

  }

  return (
    <DashboardLayout>
      <div data-ev-id="ev_7ac1ab921b" className="mb-6">
        <h1 data-ev-id="ev_2a728efccd" className="text-2xl font-display font-bold text-charcoal">Order Products</h1>
        <p data-ev-id="ev_c5683223fe" className="text-slate">Select products and quantities to place an order</p>
      </div>

      <div data-ev-id="ev_d322ccf576" className="grid lg:grid-cols-3 gap-6">
        {/* Products */}
        <div data-ev-id="ev_a32f12fc8a" className="lg:col-span-2">
          {/* Categories */}
          <div data-ev-id="ev_af8be1952e" className="flex flex-wrap gap-2 mb-6">
            {categories.map((cat) =>
            <button data-ev-id="ev_30151757cd"
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
            activeCategory === cat ?
            'bg-forest text-white' :
            'bg-white text-slate hover:bg-gray-100'}`
            }>

                {cat}
              </button>
            )}
          </div>

          {/* Product Grid */}
          <div data-ev-id="ev_5305213810" className="grid sm:grid-cols-2 gap-4">
            {filteredProducts.map((product) => {
              const inCart = getCartQuantity(product.id);
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`bg-white rounded-xl p-4 shadow-sm border-2 transition-all ${
                  inCart > 0 ? 'border-gold' : 'border-transparent'}`
                  }>

                  <div data-ev-id="ev_cf03ce19da" className="flex items-start justify-between mb-3">
                    <div data-ev-id="ev_3fe8f92d00">
                      <h3 data-ev-id="ev_bc7cd341c5" className="font-semibold text-charcoal">{product.name}</h3>
                      <p data-ev-id="ev_92e1bd7e95" className="text-sm text-slate">{product.category}</p>
                      <p data-ev-id="ev_e5ab7bf360" className="text-xs text-gold mt-1">Unit: {product.unit}</p>
                    </div>
                    <div data-ev-id="ev_8a0a7a0a51" className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center">
                      <Package size={20} className="text-forest" />
                    </div>
                  </div>

                  {inCart > 0 ?
                  <div data-ev-id="ev_9727d473a6" className="flex items-center justify-between">
                      <div data-ev-id="ev_dfc753224e" className="flex items-center gap-3">
                        <button data-ev-id="ev_6cd407de03"
                      onClick={() => updateQuantity(product.id, -1)}
                      className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">

                          <Minus size={16} />
                        </button>
                        <span data-ev-id="ev_7df1603de8" className="font-bold text-charcoal w-8 text-center">{inCart}</span>
                        <button data-ev-id="ev_836a246f87"
                      onClick={() => updateQuantity(product.id, 1)}
                      className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">

                          <Plus size={16} />
                        </button>
                      </div>
                      <button data-ev-id="ev_4e8367e145"
                    onClick={() => removeFromCart(product.id)}
                    className="text-sm text-red-500 hover:text-red-600">

                        Remove
                      </button>
                    </div> :

                  <button data-ev-id="ev_13907937f4"
                  onClick={() => addToCart(product)}
                  className="w-full py-2 bg-forest text-white font-medium rounded-lg hover:bg-forest-light transition-colors flex items-center justify-center gap-2">

                      <Plus size={18} />
                      Add to Order
                    </button>
                  }
                </motion.div>);

            })}
          </div>
        </div>

        {/* Cart */}
        <div data-ev-id="ev_58c5747bb2" className="bg-white rounded-2xl shadow-sm p-6 h-fit sticky top-24">
          <div data-ev-id="ev_dafd91563b" className="flex items-center gap-3 mb-6">
            <div data-ev-id="ev_6e50fed60f" className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
              <ShoppingCart size={20} className="text-gold" />
            </div>
            <div data-ev-id="ev_91eb79bba4">
              <h2 data-ev-id="ev_2d8964002b" className="font-display font-bold text-charcoal">Your Order</h2>
              <p data-ev-id="ev_656dfc8a39" className="text-sm text-slate">{cart.length} items</p>
            </div>
          </div>

          {cart.length === 0 ?
          <p data-ev-id="ev_e6ff657cfb" className="text-slate text-center py-8">No items added yet</p> :

          <>
              <div data-ev-id="ev_1514fcfda4" className="flex flex-col gap-3 mb-6 max-h-64 overflow-y-auto">
                {cart.map((item) =>
              <div data-ev-id="ev_45b7291dcd" key={item.product.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div data-ev-id="ev_e8e8c8ec03">
                      <p data-ev-id="ev_f5b22ad3af" className="font-medium text-charcoal text-sm">{item.product.name}</p>
                      <p data-ev-id="ev_13709c59a6" className="text-xs text-slate">{item.quantity} {item.product.unit}</p>
                    </div>
                    <button data-ev-id="ev_6bc2cdc0a7"
                onClick={() => removeFromCart(item.product.id)}
                className="text-red-500 hover:text-red-600">

                      <Minus size={16} />
                    </button>
                  </div>
              )}
              </div>

              <div data-ev-id="ev_65f5a62d22" className="mb-4">
                <label data-ev-id="ev_80b56b7cca" className="block text-sm font-medium text-charcoal mb-2">Order Notes (Optional)</label>
                <textarea data-ev-id="ev_99fba06a20"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none text-sm"
              placeholder="Any special requirements..." />

              </div>

              <button data-ev-id="ev_ffb429c5b2"
            onClick={submitOrder}
            disabled={submitting}
            className="w-full py-3 bg-gradient-to-r from-gold to-gold-light text-forest font-semibold rounded-xl hover:shadow-gold transition-all disabled:opacity-50">

                {submitting ? 'Submitting...' : 'Submit Order'}
              </button>
            </>
          }
        </div>
      </div>
    </DashboardLayout>);

}
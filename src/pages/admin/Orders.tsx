import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Clock, CheckCircle, Truck, XCircle, User, Calendar } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

interface Order {
  id: string;
  distributor_id: string;
  product_name: string;
  quantity: number;
  unit: string;
  unit_price: number | null;
  total_price: number | null;
  status: 'pending' | 'approved' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  notes: string | null;
  created_at: string;
  distributor?: {
    full_name: string | null;
    email: string;
  };
}

const statusColors = {
  pending: 'bg-amber-100 text-amber-700',
  approved: 'bg-blue-100 text-blue-700',
  processing: 'bg-purple-100 text-purple-700',
  shipped: 'bg-cyan-100 text-cyan-700',
  delivered: 'bg-green-100 text-green-700',
  cancelled: 'bg-red-100 text-red-700'
};

const statusIcons = {
  pending: Clock,
  approved: CheckCircle,
  processing: Package,
  shipped: Truck,
  delivered: CheckCircle,
  cancelled: XCircle
};

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>('all');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    if (!supabase) return;

    const { data: ordersData, error } = await supabase.
    from('product_orders').
    select('*').
    order('created_at', { ascending: false });

    if (error || !ordersData) {
      setLoading(false);
      return;
    }

    // Fetch distributor info for each order
    const ordersWithDistributors = await Promise.all(
      ordersData.map(async (order) => {
        const { data: profile } = await supabase.
        from('profiles').
        select('full_name, email').
        eq('id', order.distributor_id).
        single();

        return {
          ...order,
          distributor: profile || { full_name: null, email: '' }
        };
      })
    );

    setOrders(ordersWithDistributors as Order[]);
    setLoading(false);
  };

  const updateStatus = async (id: string, status: Order['status'], unitPrice?: number) => {
    if (!supabase) return;

    const order = orders.find((o) => o.id === id);
    if (!order) return;

    const totalPrice = unitPrice ? unitPrice * order.quantity : order.total_price;

    await supabase.
    from('product_orders').
    update({
      status,
      unit_price: unitPrice || order.unit_price,
      total_price: totalPrice,
      updated_at: new Date().toISOString()
    }).
    eq('id', id);

    setOrders(orders.map((o) =>
    o.id === id ? { ...o, status, unit_price: unitPrice || o.unit_price, total_price: totalPrice } : o
    ));
    if (selectedOrder?.id === id) {
      setSelectedOrder({ ...selectedOrder, status, unit_price: unitPrice || selectedOrder.unit_price, total_price: totalPrice });
    }
  };

  const filteredOrders = orders.filter((o) => {
    if (statusFilter === 'all') return true;
    return o.status === statusFilter;
  });

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-NG', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const formatCurrency = (amount: number | null) => {
    if (!amount) return 'TBD';
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <DashboardLayout>
      <div data-ev-id="ev_e9bd6deea7" className="mb-6">
        <h1 data-ev-id="ev_e08e07f173" className="text-2xl font-display font-bold text-charcoal">Product Orders</h1>
        <p data-ev-id="ev_688cb500b4" className="text-slate">Manage orders from distributors</p>
      </div>

      {/* Filters */}
      <div data-ev-id="ev_350b99e186" className="flex flex-wrap gap-2 mb-6">
        {['all', 'pending', 'approved', 'processing', 'shipped', 'delivered', 'cancelled'].map((status) =>
        <button data-ev-id="ev_9179225364"
        key={status}
        onClick={() => setStatusFilter(status)}
        className={`px-4 py-2 rounded-lg font-medium capitalize transition-all ${
        statusFilter === status ? 'bg-forest text-white' : 'bg-white text-slate hover:bg-gray-100'}`
        }>

            {status}
          </button>
        )}
      </div>

      <div data-ev-id="ev_72893687df" className="grid lg:grid-cols-3 gap-6">
        {/* Orders List */}
        <div data-ev-id="ev_01f9414a3d" className="lg:col-span-2 bg-white rounded-2xl shadow-sm overflow-hidden">
          <div data-ev-id="ev_9e41d67a78" className="overflow-x-auto">
            <table data-ev-id="ev_8bd5f215b5" className="w-full">
              <thead data-ev-id="ev_50c68c3903" className="bg-gray-50 border-b border-gray-100">
                <tr data-ev-id="ev_e599c6a5d8">
                  <th data-ev-id="ev_4687a6e49b" className="text-left p-4 font-semibold text-charcoal">Product</th>
                  <th data-ev-id="ev_4f2e22ef74" className="text-left p-4 font-semibold text-charcoal">Distributor</th>
                  <th data-ev-id="ev_7b2a300ebb" className="text-left p-4 font-semibold text-charcoal">Qty</th>
                  <th data-ev-id="ev_3a22b1ad71" className="text-left p-4 font-semibold text-charcoal">Status</th>
                  <th data-ev-id="ev_61eba5103f" className="text-left p-4 font-semibold text-charcoal">Date</th>
                </tr>
              </thead>
              <tbody data-ev-id="ev_04689cff62">
                {loading ?
                <tr data-ev-id="ev_59a11a5998">
                    <td data-ev-id="ev_483aba46b9" colSpan={5} className="p-8 text-center text-slate">Loading...</td>
                  </tr> :
                filteredOrders.length === 0 ?
                <tr data-ev-id="ev_2d77357af5">
                    <td data-ev-id="ev_b5213e01d1" colSpan={5} className="p-8 text-center text-slate">No orders found</td>
                  </tr> :

                filteredOrders.map((order) => {
                  const StatusIcon = statusIcons[order.status];
                  return (
                    <tr data-ev-id="ev_175966961f"
                    key={order.id}
                    onClick={() => setSelectedOrder(order)}
                    className={`border-b border-gray-50 cursor-pointer hover:bg-gray-50 transition-colors ${
                    selectedOrder?.id === order.id ? 'bg-forest/5' : ''}`
                    }>

                        <td data-ev-id="ev_4112c101cc" className="p-4">
                          <p data-ev-id="ev_f02d5f9dc7" className="font-medium text-charcoal">{order.product_name}</p>
                        </td>
                        <td data-ev-id="ev_e705797e91" className="p-4">
                          <p data-ev-id="ev_43a6a6098d" className="text-charcoal">{order.distributor?.full_name || 'N/A'}</p>
                          <p data-ev-id="ev_878448c2b9" className="text-sm text-slate">{order.distributor?.email}</p>
                        </td>
                        <td data-ev-id="ev_8bd55488ae" className="p-4">
                          <p data-ev-id="ev_679a3c84a6" className="text-charcoal">{order.quantity} {order.unit}</p>
                        </td>
                        <td data-ev-id="ev_8b47b2c49f" className="p-4">
                          <span data-ev-id="ev_70fa153e19" className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium capitalize ${statusColors[order.status]}`}>
                            <StatusIcon size={12} />
                            {order.status}
                          </span>
                        </td>
                        <td data-ev-id="ev_15d4caea60" className="p-4 text-slate text-sm">{formatDate(order.created_at)}</td>
                      </tr>);

                })
                }
              </tbody>
            </table>
          </div>
        </div>

        {/* Order Detail */}
        <div data-ev-id="ev_e2b7244ebb" className="bg-white rounded-2xl shadow-sm p-6">
          {selectedOrder ?
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}>

              <h2 data-ev-id="ev_c88e8b7627" className="text-xl font-display font-bold text-charcoal mb-1">
                {selectedOrder.product_name}
              </h2>
              <span data-ev-id="ev_e304484463" className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium capitalize mb-4 ${statusColors[selectedOrder.status]}`}>
                {selectedOrder.status}
              </span>

              <div data-ev-id="ev_6e05953495" className="flex flex-col gap-3 mb-6 p-4 bg-gray-50 rounded-xl">
                <div data-ev-id="ev_87cf494c93" className="flex items-center gap-3 text-sm">
                  <User size={16} className="text-slate" />
                  <span data-ev-id="ev_e252b53e22" className="text-charcoal">
                    {selectedOrder.distributor?.full_name || 'N/A'}
                  </span>
                </div>
                <div data-ev-id="ev_44b5cc0fb3" className="flex items-center gap-3 text-sm">
                  <Package size={16} className="text-slate" />
                  <span data-ev-id="ev_45d279e345" className="text-charcoal">
                    {selectedOrder.quantity} {selectedOrder.unit}
                  </span>
                </div>
                <div data-ev-id="ev_bc2fe9d224" className="flex items-center gap-3 text-sm">
                  <Calendar size={16} className="text-slate" />
                  <span data-ev-id="ev_f6bf57fa51" className="text-slate">{formatDate(selectedOrder.created_at)}</span>
                </div>
              </div>

              <div data-ev-id="ev_34fca9b7bf" className="grid grid-cols-2 gap-4 mb-6">
                <div data-ev-id="ev_67e5079e58" className="p-3 bg-forest/5 rounded-lg">
                  <p data-ev-id="ev_9265a8e9c6" className="text-xs text-slate mb-1">Unit Price</p>
                  <p data-ev-id="ev_cfe0aa7bc7" className="font-bold text-charcoal">{formatCurrency(selectedOrder.unit_price)}</p>
                </div>
                <div data-ev-id="ev_06f13ba85b" className="p-3 bg-gold/10 rounded-lg">
                  <p data-ev-id="ev_838d29f73e" className="text-xs text-slate mb-1">Total</p>
                  <p data-ev-id="ev_19c11d79b3" className="font-bold text-charcoal">{formatCurrency(selectedOrder.total_price)}</p>
                </div>
              </div>

              {selectedOrder.notes &&
            <div data-ev-id="ev_8a9eb711ab" className="mb-6">
                  <h3 data-ev-id="ev_0a2619ed90" className="font-semibold text-charcoal mb-2">Notes</h3>
                  <p data-ev-id="ev_52756bb90b" className="text-slate text-sm">{selectedOrder.notes}</p>
                </div>
            }

              <div data-ev-id="ev_97bf7a1038" className="border-t border-gray-100 pt-4">
                <h3 data-ev-id="ev_4e890d7358" className="font-semibold text-charcoal mb-3">Update Status</h3>
                <div data-ev-id="ev_76dee93e85" className="grid grid-cols-2 gap-2">
                  {(['pending', 'approved', 'processing', 'shipped', 'delivered', 'cancelled'] as const).map((status) =>
                <button data-ev-id="ev_aee9ed120e"
                key={status}
                onClick={() => updateStatus(selectedOrder.id, status)}
                className={`px-3 py-2 rounded-lg text-xs font-medium capitalize transition-all ${
                selectedOrder.status === status ?
                'bg-forest text-white' :
                'bg-gray-100 text-slate hover:bg-gray-200'}`
                }>

                      {status}
                    </button>
                )}
                </div>
              </div>
            </motion.div> :

          <div data-ev-id="ev_304c3ba273" className="h-full flex items-center justify-center text-slate">
              <div data-ev-id="ev_05a16d73fc" className="text-center">
                <Package size={48} className="mx-auto mb-4 opacity-30" />
                <p data-ev-id="ev_e25f7ee114">Select an order to view details</p>
              </div>
            </div>
          }
        </div>
      </div>
    </DashboardLayout>);

}
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Clock, CheckCircle, Truck, XCircle, Calendar } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

interface Order {
  id: string;
  product_name: string;
  quantity: number;
  unit: string;
  unit_price: number | null;
  total_price: number | null;
  status: 'pending' | 'approved' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  notes: string | null;
  created_at: string;
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

export default function MyOrders() {
  const { profile } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>('all');

  useEffect(() => {
    fetchOrders();
  }, [profile]);

  const fetchOrders = async () => {
    if (!supabase || !profile) return;

    const { data, error } = await supabase.
    from('product_orders').
    select('*').
    eq('distributor_id', profile.id).
    order('created_at', { ascending: false });

    if (!error && data) {
      setOrders(data as Order[]);
    }
    setLoading(false);
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
    if (!amount) return 'Pending';
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <DashboardLayout>
      <div data-ev-id="ev_0197cbde66" className="mb-6">
        <h1 data-ev-id="ev_63d28fdad5" className="text-2xl font-display font-bold text-charcoal">My Orders</h1>
        <p data-ev-id="ev_3a7d8ac08b" className="text-slate">View and track your product orders</p>
      </div>

      {/* Stats */}
      <div data-ev-id="ev_701dc63ef7" className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
        { label: 'Total', value: orders.length, color: 'bg-forest' },
        { label: 'Pending', value: orders.filter((o) => o.status === 'pending').length, color: 'bg-amber-500' },
        { label: 'Processing', value: orders.filter((o) => ['approved', 'processing', 'shipped'].includes(o.status)).length, color: 'bg-blue-500' },
        { label: 'Delivered', value: orders.filter((o) => o.status === 'delivered').length, color: 'bg-green-500' }].
        map((stat) =>
        <div data-ev-id="ev_287080d67b" key={stat.label} className="bg-white rounded-xl p-4 shadow-sm">
            <p data-ev-id="ev_dd1e454a76" className="text-slate text-sm">{stat.label}</p>
            <p data-ev-id="ev_9aea22af5a" className="text-2xl font-bold text-charcoal">{stat.value}</p>
          </div>
        )}
      </div>

      {/* Filters */}
      <div data-ev-id="ev_2dc7664faf" className="flex flex-wrap gap-2 mb-6">
        {['all', 'pending', 'approved', 'processing', 'shipped', 'delivered'].map((status) =>
        <button data-ev-id="ev_d87ab6b8a9"
        key={status}
        onClick={() => setStatusFilter(status)}
        className={`px-4 py-2 rounded-lg font-medium capitalize transition-all ${
        statusFilter === status ? 'bg-forest text-white' : 'bg-white text-slate hover:bg-gray-100'}`
        }>

            {status}
          </button>
        )}
      </div>

      {/* Orders */}
      <div data-ev-id="ev_e1b30ea65d" className="bg-white rounded-2xl shadow-sm overflow-hidden">
        {loading ?
        <div data-ev-id="ev_819b5537ff" className="p-8 text-center text-slate">Loading...</div> :
        filteredOrders.length === 0 ?
        <div data-ev-id="ev_49fe202327" className="p-8 text-center">
            <Package size={48} className="mx-auto mb-4 text-slate/30" />
            <p data-ev-id="ev_5c4c0939e7" className="text-slate">No orders found</p>
            <a data-ev-id="ev_e9a1f71d26"
          href="/dashboard/order"
          className="inline-block mt-4 px-6 py-2 bg-forest text-white font-medium rounded-lg hover:bg-forest-light transition-colors">

              Place an Order
            </a>
          </div> :

        <div data-ev-id="ev_3dad96dbdb" className="overflow-x-auto">
            <table data-ev-id="ev_8910430e12" className="w-full">
              <thead data-ev-id="ev_34baeca44d" className="bg-gray-50 border-b border-gray-100">
                <tr data-ev-id="ev_5405736df7">
                  <th data-ev-id="ev_e23e905593" className="text-left p-4 font-semibold text-charcoal">Product</th>
                  <th data-ev-id="ev_c3795e69cb" className="text-left p-4 font-semibold text-charcoal">Quantity</th>
                  <th data-ev-id="ev_e0d397fcf4" className="text-left p-4 font-semibold text-charcoal">Price</th>
                  <th data-ev-id="ev_e7ed4db3fa" className="text-left p-4 font-semibold text-charcoal">Status</th>
                  <th data-ev-id="ev_6f4bb91423" className="text-left p-4 font-semibold text-charcoal">Date</th>
                </tr>
              </thead>
              <tbody data-ev-id="ev_ac41acbb26">
                {filteredOrders.map((order) => {
                const StatusIcon = statusIcons[order.status];
                return (
                  <motion.tr
                    key={order.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="border-b border-gray-50 hover:bg-gray-50 transition-colors">

                      <td data-ev-id="ev_f55775a672" className="p-4">
                        <p data-ev-id="ev_7726eeafd8" className="font-medium text-charcoal">{order.product_name}</p>
                        {order.notes &&
                      <p data-ev-id="ev_142a411baa" className="text-xs text-slate mt-1">Note: {order.notes}</p>
                      }
                      </td>
                      <td data-ev-id="ev_6a943c7b69" className="p-4">
                        <p data-ev-id="ev_b0bb931d57" className="text-charcoal">{order.quantity} {order.unit}</p>
                      </td>
                      <td data-ev-id="ev_6aa371396e" className="p-4">
                        <p data-ev-id="ev_83a2121dc3" className="text-charcoal font-medium">{formatCurrency(order.total_price)}</p>
                        {order.unit_price &&
                      <p data-ev-id="ev_8eddc13840" className="text-xs text-slate">@ {formatCurrency(order.unit_price)}/unit</p>
                      }
                      </td>
                      <td data-ev-id="ev_548333986a" className="p-4">
                        <span data-ev-id="ev_c77bf40a02" className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium capitalize ${statusColors[order.status]}`}>
                          <StatusIcon size={12} />
                          {order.status}
                        </span>
                      </td>
                      <td data-ev-id="ev_0cf5beba59" className="p-4">
                        <div data-ev-id="ev_afaa44f61c" className="flex items-center gap-2 text-slate text-sm">
                          <Calendar size={14} />
                          {formatDate(order.created_at)}
                        </div>
                      </td>
                    </motion.tr>);

              })}
              </tbody>
            </table>
          </div>
        }
      </div>
    </DashboardLayout>);

}
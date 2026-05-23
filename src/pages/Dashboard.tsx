import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  FileText,
  Users,
  Package,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle } from
'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

interface Stats {
  totalMessages: number;
  unreadMessages: number;
  totalQuotes: number;
  pendingQuotes: number;
  totalDistributors: number;
  approvedDistributors: number;
  totalOrders: number;
  pendingOrders: number;
}

interface DistributorStats {
  totalOrders: number;
  pendingOrders: number;
  deliveredOrders: number;
  totalValue: number;
}

export default function Dashboard() {
  const { profile, loading, isAdmin, isDistributor } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState<Stats | null>(null);
  const [distributorStats, setDistributorStats] = useState<DistributorStats | null>(null);
  const [loadingStats, setLoadingStats] = useState(true);

  useEffect(() => {
    console.log('[DASHBOARD] Auth state:', { loading, profile: profile?.id, isAdmin, isDistributor });
    if (!loading && !profile) {
      console.log('[DASHBOARD] No profile, redirecting to login');
      navigate('/login', { replace: true });
    }
  }, [loading, profile, navigate]);

  useEffect(() => {
    const fetchStats = async () => {
      if (!supabase || !profile) return;

      if (isAdmin) {
        // Fetch admin stats
        const [messages, quotes, distributors, orders] = await Promise.all([
        supabase.from('contact_messages').select('id, is_read'),
        supabase.from('quote_requests').select('id, status'),
        supabase.from('distributor_details').select('id, is_approved'),
        supabase.from('product_orders').select('id, status')]
        );

        setStats({
          totalMessages: messages.data?.length || 0,
          unreadMessages: messages.data?.filter((m) => !m.is_read).length || 0,
          totalQuotes: quotes.data?.length || 0,
          pendingQuotes: quotes.data?.filter((q) => q.status === 'pending').length || 0,
          totalDistributors: distributors.data?.length || 0,
          approvedDistributors: distributors.data?.filter((d) => d.is_approved).length || 0,
          totalOrders: orders.data?.length || 0,
          pendingOrders: orders.data?.filter((o) => o.status === 'pending').length || 0
        });
      } else if (isDistributor) {
        // Fetch distributor stats
        const { data: orders } = await supabase.
        from('product_orders').
        select('*').
        eq('distributor_id', profile.id);

        const { data: details } = await supabase.
        from('distributor_details').
        select('total_value').
        eq('user_id', profile.id).
        single();

        setDistributorStats({
          totalOrders: orders?.length || 0,
          pendingOrders: orders?.filter((o) => o.status === 'pending').length || 0,
          deliveredOrders: orders?.filter((o) => o.status === 'delivered').length || 0,
          totalValue: details?.total_value || 0
        });
      }

      setLoadingStats(false);
    };

    if (profile) {
      fetchStats();
    }
  }, [profile, isAdmin, isDistributor]);

  if (loading) {
    return (
      <div data-ev-id="ev_1ff40c4081" className="min-h-screen flex items-center justify-center bg-cream">
        <div data-ev-id="ev_024387e7e8" className="animate-spin w-8 h-8 border-4 border-gold border-t-transparent rounded-full" />
      </div>);

  }

  return (
    <DashboardLayout>
      <div data-ev-id="ev_2a76acfda5" className="mb-8">
        <h1 data-ev-id="ev_75fa521535" className="text-2xl lg:text-3xl font-display font-bold text-charcoal">
          Welcome back, {profile?.full_name || 'User'}!
        </h1>
        <p data-ev-id="ev_f722abe6bd" className="text-slate mt-1">
          {isAdmin ? 'Here\'s your admin overview' : 'Manage your orders and account'}
        </p>
      </div>

      {/* Admin Stats */}
      {isAdmin && stats &&
      <div data-ev-id="ev_f284f1f180" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
        {
          title: 'Messages',
          value: stats.totalMessages,
          sub: `${stats.unreadMessages} unread`,
          icon: MessageSquare,
          color: 'bg-blue-500'
        },
        {
          title: 'Quote Requests',
          value: stats.totalQuotes,
          sub: `${stats.pendingQuotes} pending`,
          icon: FileText,
          color: 'bg-amber-500'
        },
        {
          title: 'Distributors',
          value: stats.totalDistributors,
          sub: `${stats.approvedDistributors} approved`,
          icon: Users,
          color: 'bg-green-500'
        },
        {
          title: 'Orders',
          value: stats.totalOrders,
          sub: `${stats.pendingOrders} pending`,
          icon: Package,
          color: 'bg-purple-500'
        }].
        map((stat, index) =>
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">

              <div data-ev-id="ev_e1fc243263" className="flex items-start justify-between mb-4">
                <div data-ev-id="ev_d53c377c30" className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                  <stat.icon size={24} className="text-white" />
                </div>
                <span data-ev-id="ev_fd17cc6b15" className="text-3xl font-display font-bold text-charcoal">{stat.value}</span>
              </div>
              <h3 data-ev-id="ev_55b5c8dc71" className="font-semibold text-charcoal">{stat.title}</h3>
              <p data-ev-id="ev_1e8b6a4b7e" className="text-slate text-sm">{stat.sub}</p>
            </motion.div>
        )}
        </div>
      }

      {/* Distributor Stats */}
      {isDistributor && distributorStats &&
      <div data-ev-id="ev_d44cca0f5d" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
        {
          title: 'Total Orders',
          value: distributorStats.totalOrders,
          icon: Package,
          color: 'bg-blue-500'
        },
        {
          title: 'Pending',
          value: distributorStats.pendingOrders,
          icon: Clock,
          color: 'bg-amber-500'
        },
        {
          title: 'Delivered',
          value: distributorStats.deliveredOrders,
          icon: CheckCircle,
          color: 'bg-green-500'
        },
        {
          title: 'Total Value',
          value: `₦${distributorStats.totalValue.toLocaleString()}`,
          icon: TrendingUp,
          color: 'bg-purple-500'
        }].
        map((stat, index) =>
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">

              <div data-ev-id="ev_9b63bbead3" className="flex items-start justify-between mb-4">
                <div data-ev-id="ev_acf5164666" className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                  <stat.icon size={24} className="text-white" />
                </div>
                <span data-ev-id="ev_5c2a4bf97a" className="text-2xl font-display font-bold text-charcoal">{stat.value}</span>
              </div>
              <h3 data-ev-id="ev_f7ee812733" className="font-semibold text-charcoal">{stat.title}</h3>
            </motion.div>
        )}
        </div>
      }

      {/* Quick Actions */}
      <div data-ev-id="ev_aed56a8e21" className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 data-ev-id="ev_595ebc7742" className="text-lg font-display font-bold text-charcoal mb-4">Quick Actions</h2>
        <div data-ev-id="ev_113bc30e45" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {isAdmin ?
          <>
              <a data-ev-id="ev_69e310fa18"
            href="/dashboard/messages"
            className="flex items-center gap-3 p-4 rounded-xl bg-forest/5 hover:bg-forest/10 transition-colors">

                <MessageSquare size={20} className="text-forest" />
                <span data-ev-id="ev_ab076b7143" className="font-medium text-charcoal">View Messages</span>
              </a>
              <a data-ev-id="ev_3ed686d573"
            href="/dashboard/quotes"
            className="flex items-center gap-3 p-4 rounded-xl bg-gold/10 hover:bg-gold/20 transition-colors">

                <FileText size={20} className="text-gold" />
                <span data-ev-id="ev_4c05020597" className="font-medium text-charcoal">Manage Quotes</span>
              </a>
              <a data-ev-id="ev_7f4b22504b"
            href="/dashboard/distributors"
            className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 hover:bg-green-500/20 transition-colors">

                <Users size={20} className="text-green-600" />
                <span data-ev-id="ev_6fb286e65c" className="font-medium text-charcoal">View Distributors</span>
              </a>
            </> :

          <>
              <a data-ev-id="ev_f14bae64e6"
            href="/dashboard/order"
            className="flex items-center gap-3 p-4 rounded-xl bg-forest/5 hover:bg-forest/10 transition-colors">

                <Package size={20} className="text-forest" />
                <span data-ev-id="ev_2ae77c6097" className="font-medium text-charcoal">Place New Order</span>
              </a>
              <a data-ev-id="ev_bb4f1ee70b"
            href="/dashboard/my-orders"
            className="flex items-center gap-3 p-4 rounded-xl bg-gold/10 hover:bg-gold/20 transition-colors">

                <FileText size={20} className="text-gold" />
                <span data-ev-id="ev_e846a50a9a" className="font-medium text-charcoal">View My Orders</span>
              </a>
              <a data-ev-id="ev_fedbf4e9d3"
            href="/dashboard/settings"
            className="flex items-center gap-3 p-4 rounded-xl bg-slate/10 hover:bg-slate/20 transition-colors">

                <Users size={20} className="text-slate" />
                <span data-ev-id="ev_ff0d0ab066" className="font-medium text-charcoal">Account Settings</span>
              </a>
            </>
          }
        </div>
      </div>
    </DashboardLayout>);

}
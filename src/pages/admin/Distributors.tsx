import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, Phone, Mail, Building, CheckCircle, XCircle, Package, TrendingUp } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

interface Distributor {
  id: string;
  user_id: string;
  business_name: string;
  address: string;
  city: string;
  state: string;
  registration_number: string | null;
  is_approved: boolean;
  total_orders: number;
  total_value: number;
  created_at: string;
  profile: {
    full_name: string | null;
    email: string;
    phone: string | null;
  };
}

export default function Distributors() {
  const [distributors, setDistributors] = useState<Distributor[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDistributor, setSelectedDistributor] = useState<Distributor | null>(null);
  const [filter, setFilter] = useState<'all' | 'approved' | 'pending'>('all');

  useEffect(() => {
    fetchDistributors();
  }, []);

  const fetchDistributors = async () => {
    if (!supabase) return;

    const { data: details, error } = await supabase.
    from('distributor_details').
    select('*').
    order('created_at', { ascending: false });

    if (error || !details) {
      setLoading(false);
      return;
    }

    // Fetch profiles for each distributor
    const distributorsWithProfiles = await Promise.all(
      details.map(async (d) => {
        const { data: profile } = await supabase.
        from('profiles').
        select('full_name, email, phone').
        eq('id', d.user_id).
        single();

        return {
          ...d,
          profile: profile || { full_name: null, email: '', phone: null }
        };
      })
    );

    setDistributors(distributorsWithProfiles);
    setLoading(false);
  };

  const toggleApproval = async (id: string, currentStatus: boolean) => {
    if (!supabase) return;
    await supabase.
    from('distributor_details').
    update({ is_approved: !currentStatus }).
    eq('id', id);

    setDistributors(distributors.map((d) =>
    d.id === id ? { ...d, is_approved: !currentStatus } : d
    ));
    if (selectedDistributor?.id === id) {
      setSelectedDistributor({ ...selectedDistributor, is_approved: !currentStatus });
    }
  };

  const filteredDistributors = distributors.filter((d) => {
    if (filter === 'approved') return d.is_approved;
    if (filter === 'pending') return !d.is_approved;
    return true;
  });

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-NG', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <DashboardLayout>
      <div data-ev-id="ev_0ffd502264" className="mb-6">
        <h1 data-ev-id="ev_266c84d256" className="text-2xl font-display font-bold text-charcoal">Distributors</h1>
        <p data-ev-id="ev_05cf631464" className="text-slate">Manage registered distributors and their accounts</p>
      </div>

      {/* Stats */}
      <div data-ev-id="ev_d5e69b24d9" className="grid sm:grid-cols-3 gap-4 mb-6">
        <div data-ev-id="ev_3ed2322058" className="bg-white rounded-xl p-4 shadow-sm">
          <div data-ev-id="ev_29092dbd64" className="flex items-center justify-between">
            <span data-ev-id="ev_4e125b5b28" className="text-slate">Total Distributors</span>
            <Users size={20} className="text-forest" />
          </div>
          <p data-ev-id="ev_4aa3e5082c" className="text-2xl font-bold text-charcoal mt-1">{distributors.length}</p>
        </div>
        <div data-ev-id="ev_bfb3d52e5e" className="bg-white rounded-xl p-4 shadow-sm">
          <div data-ev-id="ev_28232ac975" className="flex items-center justify-between">
            <span data-ev-id="ev_f0deb29239" className="text-slate">Approved</span>
            <CheckCircle size={20} className="text-green-500" />
          </div>
          <p data-ev-id="ev_3fa8542d00" className="text-2xl font-bold text-charcoal mt-1">
            {distributors.filter((d) => d.is_approved).length}
          </p>
        </div>
        <div data-ev-id="ev_740e992fbc" className="bg-white rounded-xl p-4 shadow-sm">
          <div data-ev-id="ev_13411174e3" className="flex items-center justify-between">
            <span data-ev-id="ev_586d3143bb" className="text-slate">Pending Approval</span>
            <XCircle size={20} className="text-amber-500" />
          </div>
          <p data-ev-id="ev_7d4524bf58" className="text-2xl font-bold text-charcoal mt-1">
            {distributors.filter((d) => !d.is_approved).length}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div data-ev-id="ev_aa4d7e9328" className="flex gap-2 mb-6">
        {(['all', 'approved', 'pending'] as const).map((f) =>
        <button data-ev-id="ev_c9f5c141f0"
        key={f}
        onClick={() => setFilter(f)}
        className={`px-4 py-2 rounded-lg font-medium capitalize transition-all ${
        filter === f ? 'bg-forest text-white' : 'bg-white text-slate hover:bg-gray-100'}`
        }>

            {f}
          </button>
        )}
      </div>

      <div data-ev-id="ev_baea147d15" className="grid lg:grid-cols-3 gap-6">
        {/* Distributors List */}
        <div data-ev-id="ev_4dbeac809b" className="lg:col-span-2 bg-white rounded-2xl shadow-sm overflow-hidden">
          <div data-ev-id="ev_80c04a718a" className="overflow-x-auto">
            <table data-ev-id="ev_c1c736f9d6" className="w-full">
              <thead data-ev-id="ev_15b8bb34a5" className="bg-gray-50 border-b border-gray-100">
                <tr data-ev-id="ev_f439ac2503">
                  <th data-ev-id="ev_8dcbb3089f" className="text-left p-4 font-semibold text-charcoal">Business</th>
                  <th data-ev-id="ev_967868dc66" className="text-left p-4 font-semibold text-charcoal">Location</th>
                  <th data-ev-id="ev_c19c3665e3" className="text-left p-4 font-semibold text-charcoal">Status</th>
                  <th data-ev-id="ev_7ffc430323" className="text-left p-4 font-semibold text-charcoal">Orders</th>
                </tr>
              </thead>
              <tbody data-ev-id="ev_6e3b5d5838">
                {loading ?
                <tr data-ev-id="ev_97a5aa343f">
                    <td data-ev-id="ev_4934968560" colSpan={4} className="p-8 text-center text-slate">Loading...</td>
                  </tr> :
                filteredDistributors.length === 0 ?
                <tr data-ev-id="ev_5102b454ee">
                    <td data-ev-id="ev_9c397288eb" colSpan={4} className="p-8 text-center text-slate">No distributors found</td>
                  </tr> :

                filteredDistributors.map((distributor) =>
                <tr data-ev-id="ev_5fcd1a94e6"
                key={distributor.id}
                onClick={() => setSelectedDistributor(distributor)}
                className={`border-b border-gray-50 cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedDistributor?.id === distributor.id ? 'bg-forest/5' : ''}`
                }>

                      <td data-ev-id="ev_8ca8839963" className="p-4">
                        <div data-ev-id="ev_528a8db905">
                          <p data-ev-id="ev_3c9e211562" className="font-medium text-charcoal">{distributor.business_name}</p>
                          <p data-ev-id="ev_c596d345d3" className="text-sm text-slate">{distributor.profile.full_name}</p>
                        </div>
                      </td>
                      <td data-ev-id="ev_12f8ccec26" className="p-4">
                        <p data-ev-id="ev_f8c842db5d" className="text-charcoal">{distributor.city}</p>
                        <p data-ev-id="ev_13911c5a3f" className="text-sm text-slate">{distributor.state}</p>
                      </td>
                      <td data-ev-id="ev_1961f42950" className="p-4">
                        <span data-ev-id="ev_b3a964705d" className={`px-3 py-1 rounded-full text-xs font-medium ${
                    distributor.is_approved ?
                    'bg-green-100 text-green-700' :
                    'bg-amber-100 text-amber-700'}`
                    }>
                          {distributor.is_approved ? 'Approved' : 'Pending'}
                        </span>
                      </td>
                      <td data-ev-id="ev_16714a49f3" className="p-4">
                        <p data-ev-id="ev_972092fffe" className="text-charcoal font-medium">{distributor.total_orders}</p>
                      </td>
                    </tr>
                )
                }
              </tbody>
            </table>
          </div>
        </div>

        {/* Distributor Detail */}
        <div data-ev-id="ev_14c6bdc373" className="bg-white rounded-2xl shadow-sm p-6">
          {selectedDistributor ?
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}>

              <div data-ev-id="ev_6aea195126" className="flex items-start justify-between mb-4">
                <div data-ev-id="ev_02cb5b0fcb">
                  <h2 data-ev-id="ev_2004870a2d" className="text-xl font-display font-bold text-charcoal">
                    {selectedDistributor.business_name}
                  </h2>
                  <p data-ev-id="ev_4cc8fe02f4" className="text-slate">{selectedDistributor.profile.full_name}</p>
                </div>
                <button data-ev-id="ev_3dec829c53"
              onClick={() => toggleApproval(selectedDistributor.id, selectedDistributor.is_approved)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedDistributor.is_approved ?
              'bg-red-100 text-red-700 hover:bg-red-200' :
              'bg-green-100 text-green-700 hover:bg-green-200'}`
              }>

                  {selectedDistributor.is_approved ? 'Revoke' : 'Approve'}
                </button>
              </div>

              <div data-ev-id="ev_4a71fc6458" className="flex flex-col gap-3 mb-6">
                <div data-ev-id="ev_23f5a4cdcc" className="flex items-center gap-3 text-sm">
                  <Mail size={16} className="text-slate" />
                  <a data-ev-id="ev_70325afaef" href={`mailto:${selectedDistributor.profile.email}`} className="text-forest hover:underline">
                    {selectedDistributor.profile.email}
                  </a>
                </div>
                {selectedDistributor.profile.phone &&
              <div data-ev-id="ev_ad76ca3b0c" className="flex items-center gap-3 text-sm">
                    <Phone size={16} className="text-slate" />
                    <a data-ev-id="ev_7b687e56e5" href={`tel:${selectedDistributor.profile.phone}`} className="text-forest hover:underline">
                      {selectedDistributor.profile.phone}
                    </a>
                  </div>
              }
                <div data-ev-id="ev_f5ce039edb" className="flex items-start gap-3 text-sm">
                  <MapPin size={16} className="text-slate shrink-0 mt-0.5" />
                  <span data-ev-id="ev_39a48e88f3" className="text-charcoal">
                    {selectedDistributor.address}, {selectedDistributor.city}, {selectedDistributor.state}
                  </span>
                </div>
              </div>

              <div data-ev-id="ev_188fa1826f" className="grid grid-cols-2 gap-4 mb-6">
                <div data-ev-id="ev_b7a9e45ceb" className="p-4 bg-forest/5 rounded-xl">
                  <div data-ev-id="ev_5a4e3cb07c" className="flex items-center gap-2 text-forest mb-1">
                    <Package size={16} />
                    <span data-ev-id="ev_85cae02a90" className="text-sm font-medium">Total Orders</span>
                  </div>
                  <p data-ev-id="ev_1cb18240ce" className="text-2xl font-bold text-charcoal">{selectedDistributor.total_orders}</p>
                </div>
                <div data-ev-id="ev_af7ea073ef" className="p-4 bg-gold/10 rounded-xl">
                  <div data-ev-id="ev_f116e51b42" className="flex items-center gap-2 text-gold mb-1">
                    <TrendingUp size={16} />
                    <span data-ev-id="ev_f4736f62fa" className="text-sm font-medium">Total Value</span>
                  </div>
                  <p data-ev-id="ev_9775e8ba5a" className="text-xl font-bold text-charcoal">{formatCurrency(selectedDistributor.total_value)}</p>
                </div>
              </div>

              <div data-ev-id="ev_153e5b8569" className="text-sm text-slate">
                Registered: {formatDate(selectedDistributor.created_at)}
              </div>
            </motion.div> :

          <div data-ev-id="ev_2b6691a775" className="h-full flex items-center justify-center text-slate">
              <div data-ev-id="ev_211fc8d104" className="text-center">
                <Users size={48} className="mx-auto mb-4 opacity-30" />
                <p data-ev-id="ev_77377a6c6d">Select a distributor to view details</p>
              </div>
            </div>
          }
        </div>
      </div>
    </DashboardLayout>);

}
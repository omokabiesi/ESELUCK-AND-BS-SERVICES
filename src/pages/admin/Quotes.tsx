import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Clock, CheckCircle, Phone, Mail, Building, Package } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

interface Quote {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string | null;
  product_interest: string;
  quantity: string | null;
  message: string | null;
  status: 'pending' | 'contacted' | 'quoted' | 'closed';
  is_read: boolean;
  created_at: string;
}

const statusColors = {
  pending: 'bg-amber-100 text-amber-700',
  contacted: 'bg-blue-100 text-blue-700',
  quoted: 'bg-purple-100 text-purple-700',
  closed: 'bg-green-100 text-green-700'
};

export default function Quotes() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>('all');

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    if (!supabase) return;
    const { data, error } = await supabase.
    from('quote_requests').
    select('*').
    order('created_at', { ascending: false });

    if (!error && data) {
      setQuotes(data as Quote[]);
    }
    setLoading(false);
  };

  const updateStatus = async (id: string, status: Quote['status']) => {
    if (!supabase) return;
    await supabase.
    from('quote_requests').
    update({ status, is_read: true }).
    eq('id', id);

    setQuotes(quotes.map((q) => q.id === id ? { ...q, status, is_read: true } : q));
    if (selectedQuote?.id === id) {
      setSelectedQuote({ ...selectedQuote, status, is_read: true });
    }
  };

  const filteredQuotes = quotes.filter((q) => {
    if (statusFilter === 'all') return true;
    return q.status === statusFilter;
  });

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-NG', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <DashboardLayout>
      <div data-ev-id="ev_2a16450bfc" className="mb-6">
        <h1 data-ev-id="ev_c26a0b68c2" className="text-2xl font-display font-bold text-charcoal">Quote Requests</h1>
        <p data-ev-id="ev_6da3ac0116" className="text-slate">Manage product quote requests from potential customers</p>
      </div>

      {/* Filters */}
      <div data-ev-id="ev_3d8f3234b9" className="flex flex-wrap gap-2 mb-6">
        {['all', 'pending', 'contacted', 'quoted', 'closed'].map((status) =>
        <button data-ev-id="ev_6e3b38b34d"
        key={status}
        onClick={() => setStatusFilter(status)}
        className={`px-4 py-2 rounded-lg font-medium capitalize transition-all ${
        statusFilter === status ? 'bg-forest text-white' : 'bg-white text-slate hover:bg-gray-100'}`
        }>

            {status}
          </button>
        )}
      </div>

      <div data-ev-id="ev_aa925cc7d0" className="grid lg:grid-cols-3 gap-6">
        {/* Quotes List */}
        <div data-ev-id="ev_59fc5bd6c4" className="lg:col-span-2 bg-white rounded-2xl shadow-sm overflow-hidden">
          <div data-ev-id="ev_dbd83f4381" className="overflow-x-auto">
            <table data-ev-id="ev_e581186b63" className="w-full">
              <thead data-ev-id="ev_fd16d48926" className="bg-gray-50 border-b border-gray-100">
                <tr data-ev-id="ev_074a8a6eef">
                  <th data-ev-id="ev_1e36244d20" className="text-left p-4 font-semibold text-charcoal">Customer</th>
                  <th data-ev-id="ev_60792f2cc9" className="text-left p-4 font-semibold text-charcoal">Product</th>
                  <th data-ev-id="ev_46a9d07cb7" className="text-left p-4 font-semibold text-charcoal">Status</th>
                  <th data-ev-id="ev_00fda52950" className="text-left p-4 font-semibold text-charcoal">Date</th>
                </tr>
              </thead>
              <tbody data-ev-id="ev_698e83d0df">
                {loading ?
                <tr data-ev-id="ev_ca23973288">
                    <td data-ev-id="ev_e2f32a3f4c" colSpan={4} className="p-8 text-center text-slate">Loading...</td>
                  </tr> :
                filteredQuotes.length === 0 ?
                <tr data-ev-id="ev_c704a640e3">
                    <td data-ev-id="ev_1feabff6b1" colSpan={4} className="p-8 text-center text-slate">No quote requests found</td>
                  </tr> :

                filteredQuotes.map((quote) =>
                <tr data-ev-id="ev_23ded57cfe"
                key={quote.id}
                onClick={() => setSelectedQuote(quote)}
                className={`border-b border-gray-50 cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedQuote?.id === quote.id ? 'bg-forest/5' : ''} ${
                !quote.is_read ? 'bg-gold/5' : ''}`}>

                      <td data-ev-id="ev_c93d920828" className="p-4">
                        <div data-ev-id="ev_6cfe0cd772">
                          <p data-ev-id="ev_650ede1ed8" className="font-medium text-charcoal">{quote.name}</p>
                          <p data-ev-id="ev_974c10dfb5" className="text-sm text-slate">{quote.email}</p>
                        </div>
                      </td>
                      <td data-ev-id="ev_e7dda910fc" className="p-4">
                        <p data-ev-id="ev_9cf928237d" className="text-charcoal">{quote.product_interest}</p>
                        {quote.quantity &&
                    <p data-ev-id="ev_91f800740e" className="text-sm text-slate">Qty: {quote.quantity}</p>
                    }
                      </td>
                      <td data-ev-id="ev_d2256887f2" className="p-4">
                        <span data-ev-id="ev_250f4e8986" className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${statusColors[quote.status]}`}>
                          {quote.status}
                        </span>
                      </td>
                      <td data-ev-id="ev_02477cfbea" className="p-4 text-slate text-sm">{formatDate(quote.created_at)}</td>
                    </tr>
                )
                }
              </tbody>
            </table>
          </div>
        </div>

        {/* Quote Detail */}
        <div data-ev-id="ev_7da777b676" className="bg-white rounded-2xl shadow-sm p-6">
          {selectedQuote ?
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}>

              <h2 data-ev-id="ev_b5008ff22c" className="text-xl font-display font-bold text-charcoal mb-1">
                {selectedQuote.name}
              </h2>
              <span data-ev-id="ev_eb558780d4" className={`inline-block px-3 py-1 rounded-full text-xs font-medium capitalize mb-4 ${statusColors[selectedQuote.status]}`}>
                {selectedQuote.status}
              </span>

              <div data-ev-id="ev_490f5461e0" className="flex flex-col gap-3 mb-6">
                <div data-ev-id="ev_c6b0a4c4e0" className="flex items-center gap-3 text-sm">
                  <Mail size={16} className="text-slate" />
                  <a data-ev-id="ev_21429d9caf" href={`mailto:${selectedQuote.email}`} className="text-forest hover:underline">
                    {selectedQuote.email}
                  </a>
                </div>
                <div data-ev-id="ev_a9084d0a47" className="flex items-center gap-3 text-sm">
                  <Phone size={16} className="text-slate" />
                  <a data-ev-id="ev_80ee92eddd" href={`tel:${selectedQuote.phone}`} className="text-forest hover:underline">
                    {selectedQuote.phone}
                  </a>
                </div>
                {selectedQuote.company &&
              <div data-ev-id="ev_642e77d77a" className="flex items-center gap-3 text-sm">
                    <Building size={16} className="text-slate" />
                    <span data-ev-id="ev_d312ea41fe" className="text-charcoal">{selectedQuote.company}</span>
                  </div>
              }
                <div data-ev-id="ev_d74aaaf336" className="flex items-center gap-3 text-sm">
                  <Package size={16} className="text-slate" />
                  <span data-ev-id="ev_66df94b680" className="text-charcoal">{selectedQuote.product_interest}</span>
                </div>
              </div>

              {selectedQuote.quantity &&
            <div data-ev-id="ev_2d0eb84e11" className="mb-4 p-3 bg-gold/10 rounded-lg">
                  <p data-ev-id="ev_d6959ca63a" className="text-sm text-charcoal">
                    <strong data-ev-id="ev_1793ae72ff">Quantity:</strong> {selectedQuote.quantity}
                  </p>
                </div>
            }

              {selectedQuote.message &&
            <div data-ev-id="ev_f6d3154f80" className="mb-6">
                  <h3 data-ev-id="ev_cb990d8c02" className="font-semibold text-charcoal mb-2">Message</h3>
                  <p data-ev-id="ev_4283b8c662" className="text-slate text-sm">{selectedQuote.message}</p>
                </div>
            }

              <div data-ev-id="ev_c6dace933f" className="border-t border-gray-100 pt-4">
                <h3 data-ev-id="ev_49f9306fff" className="font-semibold text-charcoal mb-3">Update Status</h3>
                <div data-ev-id="ev_5b752e0564" className="grid grid-cols-2 gap-2">
                  {(['pending', 'contacted', 'quoted', 'closed'] as const).map((status) =>
                <button data-ev-id="ev_d919d68cb4"
                key={status}
                onClick={() => updateStatus(selectedQuote.id, status)}
                className={`px-3 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
                selectedQuote.status === status ?
                'bg-forest text-white' :
                'bg-gray-100 text-slate hover:bg-gray-200'}`
                }>

                      {status}
                    </button>
                )}
                </div>
              </div>
            </motion.div> :

          <div data-ev-id="ev_6da2178cdf" className="h-full flex items-center justify-center text-slate">
              <div data-ev-id="ev_481e44f05b" className="text-center">
                <FileText size={48} className="mx-auto mb-4 opacity-30" />
                <p data-ev-id="ev_eb643cdf19">Select a quote to view details</p>
              </div>
            </div>
          }
        </div>
      </div>
    </DashboardLayout>);

}
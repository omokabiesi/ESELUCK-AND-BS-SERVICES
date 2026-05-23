import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MailOpen, Clock, User, Phone, Building, Trash2, Eye } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

interface Message {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  inquiry_type: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

export default function Messages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    if (!supabase) return;
    const { data, error } = await supabase.
    from('contact_messages').
    select('*').
    order('created_at', { ascending: false });

    if (!error && data) {
      setMessages(data);
    }
    setLoading(false);
  };

  const markAsRead = async (id: string) => {
    if (!supabase) return;
    await supabase.
    from('contact_messages').
    update({ is_read: true }).
    eq('id', id);

    setMessages(messages.map((m) => m.id === id ? { ...m, is_read: true } : m));
  };

  const deleteMessage = async (id: string) => {
    if (!supabase) return;
    await supabase.from('contact_messages').delete().eq('id', id);
    setMessages(messages.filter((m) => m.id !== id));
    if (selectedMessage?.id === id) setSelectedMessage(null);
  };

  const filteredMessages = messages.filter((m) => {
    if (filter === 'unread') return !m.is_read;
    if (filter === 'read') return m.is_read;
    return true;
  });

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-NG', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <DashboardLayout>
      <div data-ev-id="ev_8c1d853b8b" className="mb-6">
        <h1 data-ev-id="ev_6359b97b5d" className="text-2xl font-display font-bold text-charcoal">Contact Messages</h1>
        <p data-ev-id="ev_fd4d014bc5" className="text-slate">Messages from the website contact form</p>
      </div>

      {/* Filters */}
      <div data-ev-id="ev_a35db2a18b" className="flex gap-2 mb-6">
        {(['all', 'unread', 'read'] as const).map((f) =>
        <button data-ev-id="ev_9648f09598"
        key={f}
        onClick={() => setFilter(f)}
        className={`px-4 py-2 rounded-lg font-medium capitalize transition-all ${
        filter === f ? 'bg-forest text-white' : 'bg-white text-slate hover:bg-gray-100'}`
        }>

            {f} {f === 'unread' && `(${messages.filter((m) => !m.is_read).length})`}
          </button>
        )}
      </div>

      <div data-ev-id="ev_5e4eaa2d9a" className="grid lg:grid-cols-2 gap-6">
        {/* Messages List */}
        <div data-ev-id="ev_9bd88f02ec" className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div data-ev-id="ev_1a015efd19" className="max-h-[600px] overflow-y-auto">
            {loading ?
            <div data-ev-id="ev_0b3ce641ad" className="p-8 text-center text-slate">Loading...</div> :
            filteredMessages.length === 0 ?
            <div data-ev-id="ev_0dba3e8e5d" className="p-8 text-center text-slate">No messages found</div> :

            filteredMessages.map((message) =>
            <motion.div
              key={message.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => {
                setSelectedMessage(message);
                if (!message.is_read) markAsRead(message.id);
              }}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
              selectedMessage?.id === message.id ? 'bg-forest/5' : ''} ${
              !message.is_read ? 'bg-gold/5' : ''}`}>

                  <div data-ev-id="ev_1331b9b106" className="flex items-start gap-3">
                    <div data-ev-id="ev_fe09e5a47d" className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                message.is_read ? 'bg-gray-100' : 'bg-gold/20'}`
                }>
                      {message.is_read ?
                  <MailOpen size={18} className="text-slate" /> :

                  <Mail size={18} className="text-gold" />
                  }
                    </div>
                    <div data-ev-id="ev_b9e1251f05" className="flex-1 min-w-0">
                      <div data-ev-id="ev_52029dee2a" className="flex items-center justify-between gap-2">
                        <h3 data-ev-id="ev_6f14a0b335" className={`font-medium truncate ${!message.is_read ? 'text-charcoal' : 'text-slate'}`}>
                          {message.name}
                        </h3>
                        <span data-ev-id="ev_6c9a381f3a" className="text-xs text-slate shrink-0">
                          {formatDate(message.created_at)}
                        </span>
                      </div>
                      <p data-ev-id="ev_1549673172" className="text-sm text-gold font-medium">{message.inquiry_type}</p>
                      <p data-ev-id="ev_0509ef2544" className="text-sm text-slate truncate mt-1">{message.message}</p>
                    </div>
                  </div>
                </motion.div>
            )
            }
          </div>
        </div>

        {/* Message Detail */}
        <div data-ev-id="ev_c45b452b42" className="bg-white rounded-2xl shadow-sm p-6">
          {selectedMessage ?
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}>

              <div data-ev-id="ev_52a4b9beb4" className="flex items-start justify-between mb-6">
                <div data-ev-id="ev_638c1220b2">
                  <h2 data-ev-id="ev_5ba5f4a91d" className="text-xl font-display font-bold text-charcoal">
                    {selectedMessage.name}
                  </h2>
                  <p data-ev-id="ev_55d9858ed8" className="text-gold font-medium">{selectedMessage.inquiry_type}</p>
                </div>
                <button data-ev-id="ev_f535dcc053"
              onClick={() => deleteMessage(selectedMessage.id)}
              className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">

                  <Trash2 size={20} />
                </button>
              </div>

              <div data-ev-id="ev_6baa89c3f3" className="flex flex-col gap-3 mb-6 p-4 bg-gray-50 rounded-xl">
                <div data-ev-id="ev_1314e01485" className="flex items-center gap-3 text-sm">
                  <Mail size={16} className="text-slate" />
                  <a data-ev-id="ev_c8db22adc0" href={`mailto:${selectedMessage.email}`} className="text-forest hover:underline">
                    {selectedMessage.email}
                  </a>
                </div>
                {selectedMessage.phone &&
              <div data-ev-id="ev_0d49e15ccf" className="flex items-center gap-3 text-sm">
                    <Phone size={16} className="text-slate" />
                    <a data-ev-id="ev_b66c1586a7" href={`tel:${selectedMessage.phone}`} className="text-forest hover:underline">
                      {selectedMessage.phone}
                    </a>
                  </div>
              }
                {selectedMessage.company &&
              <div data-ev-id="ev_a25e10db99" className="flex items-center gap-3 text-sm">
                    <Building size={16} className="text-slate" />
                    <span data-ev-id="ev_7a88b5f343" className="text-charcoal">{selectedMessage.company}</span>
                  </div>
              }
                <div data-ev-id="ev_6aabdc220a" className="flex items-center gap-3 text-sm">
                  <Clock size={16} className="text-slate" />
                  <span data-ev-id="ev_75755ba9cc" className="text-slate">{formatDate(selectedMessage.created_at)}</span>
                </div>
              </div>

              <div data-ev-id="ev_58576c0e33">
                <h3 data-ev-id="ev_0ca9926d1d" className="font-semibold text-charcoal mb-2">Message</h3>
                <p data-ev-id="ev_b043100c8b" className="text-slate whitespace-pre-wrap">{selectedMessage.message}</p>
              </div>

              <div data-ev-id="ev_53fa851158" className="mt-6 flex gap-3">
                <a data-ev-id="ev_fd503547bf"
              href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.inquiry_type}`}
              className="flex-1 py-3 bg-forest text-white font-semibold text-center rounded-xl hover:bg-forest-light transition-colors">

                  Reply via Email
                </a>
              </div>
            </motion.div> :

          <div data-ev-id="ev_5dbde1c684" className="h-full flex items-center justify-center text-slate">
              <div data-ev-id="ev_49621169df" className="text-center">
                <Eye size={48} className="mx-auto mb-4 opacity-30" />
                <p data-ev-id="ev_2e1f28d993">Select a message to view details</p>
              </div>
            </div>
          }
        </div>
      </div>
    </DashboardLayout>);

}
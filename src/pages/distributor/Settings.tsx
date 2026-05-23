import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { User, Building, MapPin, Phone, Mail, Save, Check } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const nigerianStates = [
'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe',
'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara',
'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau',
'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'];


export default function Settings() {
  const { profile } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    businessName: '',
    address: '',
    city: '',
    state: ''
  });

  useEffect(() => {
    fetchData();
  }, [profile]);

  const fetchData = async () => {
    if (!supabase || !profile) return;

    // Get profile data
    const { data: profileData } = await supabase.
    from('profiles').
    select('full_name, phone').
    eq('id', profile.id).
    single();

    // Get distributor details
    const { data: detailsData } = await supabase.
    from('distributor_details').
    select('business_name, address, city, state').
    eq('user_id', profile.id).
    single();

    if (profileData || detailsData) {
      setFormData({
        fullName: profileData?.full_name || '',
        phone: profileData?.phone || '',
        businessName: detailsData?.business_name || '',
        address: detailsData?.address || '',
        city: detailsData?.city || '',
        state: detailsData?.state || ''
      });
    }
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSaved(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase || !profile) return;

    setSaving(true);

    // Update profile
    await supabase.
    from('profiles').
    update({
      full_name: formData.fullName,
      phone: formData.phone,
      updated_at: new Date().toISOString()
    }).
    eq('id', profile.id);

    // Update distributor details
    await supabase.
    from('distributor_details').
    update({
      business_name: formData.businessName,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      updated_at: new Date().toISOString()
    }).
    eq('user_id', profile.id);

    setSaving(false);
    setSaved(true);
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div data-ev-id="ev_1132bd99f1" className="flex items-center justify-center py-20">
          <div data-ev-id="ev_8a09a06596" className="animate-spin w-8 h-8 border-4 border-gold border-t-transparent rounded-full" />
        </div>
      </DashboardLayout>);

  }

  return (
    <DashboardLayout>
      <div data-ev-id="ev_2f05d60a4a" className="mb-6">
        <h1 data-ev-id="ev_9aae7148bf" className="text-2xl font-display font-bold text-charcoal">Account Settings</h1>
        <p data-ev-id="ev_a004b097dc" className="text-slate">Update your profile and business information</p>
      </div>

      <div data-ev-id="ev_1d6cc0f710" className="max-w-2xl">
        <form data-ev-id="ev_b37a28ec5b" onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-6 lg:p-8">
          {/* Personal Info */}
          <div data-ev-id="ev_bdb43e5e63" className="mb-8">
            <h2 data-ev-id="ev_959aec9dd6" className="text-lg font-display font-bold text-charcoal mb-4 flex items-center gap-2">
              <User size={20} className="text-gold" />
              Personal Information
            </h2>
            <div data-ev-id="ev_d270851b16" className="grid sm:grid-cols-2 gap-4">
              <div data-ev-id="ev_9626693f3d">
                <label data-ev-id="ev_89588aea9d" className="block text-sm font-medium text-charcoal mb-2">Full Name</label>
                <input data-ev-id="ev_f837c7cb77"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold" />

              </div>
              <div data-ev-id="ev_fdb6bcd8bf">
                <label data-ev-id="ev_3c06b3387f" className="block text-sm font-medium text-charcoal mb-2">Phone</label>
                <input data-ev-id="ev_9134c7d54e"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold" />

              </div>
            </div>
            <div data-ev-id="ev_56a4990198" className="mt-4">
              <label data-ev-id="ev_d28c37bbf2" className="block text-sm font-medium text-charcoal mb-2">Email</label>
              <input data-ev-id="ev_ffc427feea"
              type="email"
              value={profile?.email || ''}
              disabled
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-slate" />

              <p data-ev-id="ev_19c9532892" className="text-xs text-slate mt-1">Email cannot be changed</p>
            </div>
          </div>

          {/* Business Info */}
          <div data-ev-id="ev_d458853fd1" className="mb-8">
            <h2 data-ev-id="ev_8ebbea99f1" className="text-lg font-display font-bold text-charcoal mb-4 flex items-center gap-2">
              <Building size={20} className="text-gold" />
              Business Information
            </h2>
            <div data-ev-id="ev_dabd759539" className="mb-4">
              <label data-ev-id="ev_4278c201e3" className="block text-sm font-medium text-charcoal mb-2">Business Name</label>
              <input data-ev-id="ev_c38d6887fe"
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold" />

            </div>
            <div data-ev-id="ev_508abf57aa" className="mb-4">
              <label data-ev-id="ev_f1520f3c73" className="block text-sm font-medium text-charcoal mb-2">Address</label>
              <input data-ev-id="ev_a1e845d607"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold" />

            </div>
            <div data-ev-id="ev_84cd62174b" className="grid sm:grid-cols-2 gap-4">
              <div data-ev-id="ev_f79481c232">
                <label data-ev-id="ev_cef1dc598c" className="block text-sm font-medium text-charcoal mb-2">City</label>
                <input data-ev-id="ev_5bf33c9434"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold" />

              </div>
              <div data-ev-id="ev_e47527ee5d">
                <label data-ev-id="ev_fc75eb56fb" className="block text-sm font-medium text-charcoal mb-2">State</label>
                <select data-ev-id="ev_c2e0bb7ee0"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold">

                  <option data-ev-id="ev_ec4d110728" value="">Select state</option>
                  {nigerianStates.map((state) =>
                  <option data-ev-id="ev_b24225f2b4" key={state} value={state}>{state}</option>
                  )}
                </select>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div data-ev-id="ev_2a66974122" className="flex items-center gap-4">
            <button data-ev-id="ev_ab3b1d4cba"
            type="submit"
            disabled={saving}
            className="px-6 py-3 bg-gradient-to-r from-gold to-gold-light text-forest font-semibold rounded-xl hover:shadow-gold transition-all disabled:opacity-50 flex items-center gap-2">

              {saving ?
              'Saving...' :
              saved ?
              <><Check size={18} /> Saved!</> :

              <><Save size={18} /> Save Changes</>
              }
            </button>
            {saved &&
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-green-600 text-sm">

                Changes saved successfully
              </motion.span>
            }
          </div>
        </form>
      </div>
    </DashboardLayout>);

}
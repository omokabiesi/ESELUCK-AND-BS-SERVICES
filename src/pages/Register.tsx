import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, User, Phone, Building, MapPin, UserPlus } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import Layout from '@/components/layout/Layout';

const nigerianStates = [
'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe',
'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara',
'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau',
'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'];


export default function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phone: '',
    businessName: '',
    address: '',
    city: '',
    state: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const { signUp, profile, loading: authLoading, isDistributor } = useAuth();
  const navigate = useNavigate();

  // Auto-redirect when profile loads after successful registration
  useEffect(() => {
    if (loading || authLoading) return;
    
    if (registrationComplete && profile && isDistributor) {
      console.log('[REGISTER] Profile loaded after registration, redirecting to dashboard');
      navigate('/dashboard', { replace: true });
    }
  }, [profile, authLoading, loading, isDistributor, registrationComplete, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    console.log('[REGISTER] Signing up:', formData.email);

    // Sign up the user
    const { error: signUpError } = await signUp(
      formData.email,
      formData.password,
      { full_name: formData.fullName, role: 'distributor' }
    );

    if (signUpError) {
      console.log('[REGISTER] Sign up failed:', signUpError.message);
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    console.log('[REGISTER] Sign up successful, updating profile...');

    // Wait for profile to be created by trigger, then add distributor details
    setTimeout(async () => {
      if (!supabase) {
        console.log('[REGISTER] Supabase not initialized');
        setLoading(false);
        return;
      }

      // Get the current user
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        console.log('[REGISTER] Updating profile for user:', user.id);
        // Update profile with phone
        await supabase.
        from('profiles').
        update({ phone: formData.phone }).
        eq('id', user.id);

        // Insert distributor details
        await supabase.
        from('distributor_details').
        insert({
          user_id: user.id,
          business_name: formData.businessName,
          address: formData.address,
          city: formData.city,
          state: formData.state
        });

        console.log('[REGISTER] Profile updated, marking registration complete');
        setRegistrationComplete(true);
        // Redirect will happen in useEffect
      } else {
        console.log('[REGISTER] No user found after sign up');
        setError('Registration failed. Please try again.');
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <Layout>
      <section data-ev-id="ev_665ea04af1" className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-forest via-forest-dark to-charcoal flex items-center">
        <div data-ev-id="ev_5b21c877c0" className="max-w-lg mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 lg:p-10">

            <div data-ev-id="ev_137132ab5f" className="text-center mb-8">
              <h1 data-ev-id="ev_c937ec2be3" className="font-display text-3xl font-bold text-white mb-2">Register as Distributor</h1>
              <p data-ev-id="ev_ca50d7015a" className="text-white/60">Join our distribution network</p>
              
              {/* Progress Steps */}
              <div data-ev-id="ev_05388fa55c" className="flex items-center justify-center gap-2 mt-6">
                <div data-ev-id="ev_615b765922" className={`w-3 h-3 rounded-full ${step >= 1 ? 'bg-gold' : 'bg-white/20'}`} />
                <div data-ev-id="ev_13f933fb42" className={`w-12 h-1 ${step >= 2 ? 'bg-gold' : 'bg-white/20'}`} />
                <div data-ev-id="ev_8293930af0" className={`w-3 h-3 rounded-full ${step >= 2 ? 'bg-gold' : 'bg-white/20'}`} />
              </div>
            </div>

            {error &&
            <div data-ev-id="ev_00d6c502ad" className="mb-6 p-4 rounded-xl bg-red-500/20 border border-red-500/30 text-red-200 text-sm">
                {error}
              </div>
            }

            <form data-ev-id="ev_f67fe86ecd" onSubmit={handleSubmit} className="flex flex-col gap-5">
              {step === 1 &&
              <>
                  <div data-ev-id="ev_ae9ec3de80">
                    <label data-ev-id="ev_a4bf2cf5ab" className="block text-white/80 text-sm font-medium mb-2">Full Name *</label>
                    <div data-ev-id="ev_ec8da28c13" className="relative">
                      <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                      <input data-ev-id="ev_05c3ec76c3"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    placeholder="Your full name" />

                    </div>
                  </div>

                  <div data-ev-id="ev_9af691e56d">
                    <label data-ev-id="ev_a71d70a623" className="block text-white/80 text-sm font-medium mb-2">Email *</label>
                    <div data-ev-id="ev_8641a8bee8" className="relative">
                      <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                      <input data-ev-id="ev_2fe03d356d"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    placeholder="your@email.com" />

                    </div>
                  </div>

                  <div data-ev-id="ev_dc961bf36d">
                    <label data-ev-id="ev_59132bad26" className="block text-white/80 text-sm font-medium mb-2">Phone *</label>
                    <div data-ev-id="ev_81d0bf2e47" className="relative">
                      <Phone size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                      <input data-ev-id="ev_3f5f1cf9e4"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    placeholder="+234 ..." />

                    </div>
                  </div>

                  <div data-ev-id="ev_b0a22e8b43" className="grid grid-cols-2 gap-4">
                    <div data-ev-id="ev_8fc90c08d6">
                      <label data-ev-id="ev_d10dd82d9f" className="block text-white/80 text-sm font-medium mb-2">Password *</label>
                      <div data-ev-id="ev_8457dc3bbd" className="relative">
                        <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                        <input data-ev-id="ev_1636a08f4b"
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      placeholder="••••••" />

                      </div>
                    </div>
                    <div data-ev-id="ev_259f85bbdf">
                      <label data-ev-id="ev_2918d0ecb1" className="block text-white/80 text-sm font-medium mb-2">Confirm *</label>
                      <div data-ev-id="ev_927f662eee" className="relative">
                        <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                        <input data-ev-id="ev_1ad073fa75"
                      type={showPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      placeholder="••••••" />

                      </div>
                    </div>
                  </div>

                  <button data-ev-id="ev_76765f2b70"
                type="button"
                onClick={() => {
                  if (formData.fullName && formData.email && formData.phone && formData.password && formData.confirmPassword) {
                    if (formData.password !== formData.confirmPassword) {
                      setError('Passwords do not match');
                      return;
                    }
                    setError('');
                    setStep(2);
                  } else {
                    setError('Please fill in all fields');
                  }
                }}
                className="w-full py-3 bg-gradient-to-r from-gold to-gold-light text-forest font-semibold rounded-xl hover:shadow-gold transition-all">

                    Continue
                  </button>
                </>
              }

              {step === 2 &&
              <>
                  <div data-ev-id="ev_f7a16db3a0">
                    <label data-ev-id="ev_28457e4c01" className="block text-white/80 text-sm font-medium mb-2">Business Name *</label>
                    <div data-ev-id="ev_f8f1554d74" className="relative">
                      <Building size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                      <input data-ev-id="ev_8b3886bd1b"
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    placeholder="Your business name" />

                    </div>
                  </div>

                  <div data-ev-id="ev_2063f617a5">
                    <label data-ev-id="ev_f6d55cf879" className="block text-white/80 text-sm font-medium mb-2">Address *</label>
                    <div data-ev-id="ev_0bedc068f4" className="relative">
                      <MapPin size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                      <input data-ev-id="ev_056f56ce98"
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    placeholder="Street address" />

                    </div>
                  </div>

                  <div data-ev-id="ev_ebe7fe9f67" className="grid grid-cols-2 gap-4">
                    <div data-ev-id="ev_26e1890c7a">
                      <label data-ev-id="ev_6db2d5dcce" className="block text-white/80 text-sm font-medium mb-2">City *</label>
                      <input data-ev-id="ev_8a0a3c702f"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    placeholder="City" />

                    </div>
                    <div data-ev-id="ev_1ab4d54ecb">
                      <label data-ev-id="ev_7dc9913507" className="block text-white/80 text-sm font-medium mb-2">State *</label>
                      <select data-ev-id="ev_5fb5462fcd"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold">

                        <option data-ev-id="ev_4455beefa6" value="" className="text-charcoal">Select</option>
                        {nigerianStates.map((state) =>
                      <option data-ev-id="ev_488a7c9901" key={state} value={state} className="text-charcoal">{state}</option>
                      )}
                      </select>
                    </div>
                  </div>

                  <div data-ev-id="ev_08ecc5fe71" className="flex gap-4">
                    <button data-ev-id="ev_193c84ce0e"
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all">

                      Back
                    </button>
                    <button data-ev-id="ev_e6ad79e62f"
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3 bg-gradient-to-r from-gold to-gold-light text-forest font-semibold rounded-xl hover:shadow-gold transition-all disabled:opacity-50 flex items-center justify-center gap-2">

                      {loading ? 'Creating...' : <><UserPlus size={20} /> Register</>}
                    </button>
                  </div>
                </>
              }
            </form>

            <div data-ev-id="ev_ac8fe4afdb" className="mt-6 text-center">
              <p data-ev-id="ev_8236a3c360" className="text-white/60 text-sm">
                Already have an account?{' '}
                <Link to="/login" className="text-gold hover:text-gold-light font-medium">
                  Sign In
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>);

}
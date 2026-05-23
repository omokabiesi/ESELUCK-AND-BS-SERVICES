import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/Button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error } = await signIn(email, password);

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      // Redirect will happen based on role in useEffect
      navigate('/dashboard');
    }
  };

  return (
    <Layout>
      <section data-ev-id="ev_476ac9d1b3" className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-forest via-forest-dark to-charcoal flex items-center">
        <div data-ev-id="ev_2d699dea99" className="max-w-md mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 lg:p-10">

            <div data-ev-id="ev_29fe209002" className="text-center mb-8">
              <h1 data-ev-id="ev_22bd3f100e" className="font-display text-3xl font-bold text-white mb-2">Welcome Back</h1>
              <p data-ev-id="ev_27ef323897" className="text-white/60">Sign in to your account</p>
            </div>

            {error &&
            <div data-ev-id="ev_c673f03717" className="mb-6 p-4 rounded-xl bg-red-500/20 border border-red-500/30 text-red-200 text-sm">
                {error}
              </div>
            }

            <form data-ev-id="ev_be1bb2e611" onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div data-ev-id="ev_7fe05fac9a">
                <label data-ev-id="ev_fa69d95741" className="block text-white/80 text-sm font-medium mb-2">Email</label>
                <div data-ev-id="ev_38f482324f" className="relative">
                  <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                  <input data-ev-id="ev_b44af67e8b"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  placeholder="your@email.com" />

                </div>
              </div>

              <div data-ev-id="ev_11544058e9">
                <label data-ev-id="ev_3b93c3a37f" className="block text-white/80 text-sm font-medium mb-2">Password</label>
                <div data-ev-id="ev_677643a8ce" className="relative">
                  <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                  <input data-ev-id="ev_0ab19c99a0"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-12 pr-12 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  placeholder="••••••••" />

                  <button data-ev-id="ev_ddd3213bcc"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60">

                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <button data-ev-id="ev_6ba83e6087"
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-gold to-gold-light text-forest font-semibold rounded-xl hover:shadow-gold transition-all disabled:opacity-50 flex items-center justify-center gap-2">

                {loading ? 'Signing in...' : <><LogIn size={20} /> Sign In</>}
              </button>
            </form>

            <div data-ev-id="ev_40c96bbb7c" className="mt-6 text-center">
              <p data-ev-id="ev_394c5613a2" className="text-white/60 text-sm">
                Don't have an account?{' '}
                <Link to="/register" className="text-gold hover:text-gold-light font-medium">
                  Register as Distributor
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>);

}
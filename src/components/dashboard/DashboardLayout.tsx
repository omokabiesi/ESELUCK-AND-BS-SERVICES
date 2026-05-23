import { ReactNode, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  Users,
  Package,
  ShoppingCart,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  ChevronRight } from
'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import Logo from '@/components/ui/Logo';

interface DashboardLayoutProps {
  children: ReactNode;
}

const adminLinks = [
{ name: 'Overview', path: '/dashboard', icon: LayoutDashboard },
{ name: 'Messages', path: '/dashboard/messages', icon: MessageSquare },
{ name: 'Quote Requests', path: '/dashboard/quotes', icon: FileText },
{ name: 'Distributors', path: '/dashboard/distributors', icon: Users },
{ name: 'Orders', path: '/dashboard/orders', icon: Package }];


const distributorLinks = [
{ name: 'Overview', path: '/dashboard', icon: LayoutDashboard },
{ name: 'Order Products', path: '/dashboard/order', icon: ShoppingCart },
{ name: 'My Orders', path: '/dashboard/my-orders', icon: Package },
{ name: 'Settings', path: '/dashboard/settings', icon: Settings }];


export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { profile, signOut, isAdmin, isDistributor, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const links = isAdmin ? adminLinks : distributorLinks;

  const adminRoutes = ['/dashboard/messages', '/dashboard/quotes', '/dashboard/distributors', '/dashboard/orders'];
  const distributorRoutes = ['/dashboard/order', '/dashboard/my-orders', '/dashboard/settings'];

  useEffect(() => {
    console.log('[DASHBOARD_LAYOUT] Route guard check:', { 
      loading, 
      profile: profile?.id, 
      isAdmin, 
      isDistributor, 
      currentPath: location.pathname 
    });

    if (loading) {
      console.log('[DASHBOARD_LAYOUT] Still loading auth...');
      return;
    }

    if (!profile) {
      console.log('[DASHBOARD_LAYOUT] No profile, redirecting to login');
      navigate('/login', { replace: true });
      return;
    }

    // Check if admin is trying to access distributor routes
    if (isAdmin && distributorRoutes.includes(location.pathname)) {
      console.log('[DASHBOARD_LAYOUT] Admin trying to access distributor route, redirecting to /dashboard');
      navigate('/dashboard', { replace: true });
      return;
    }

    // Check if distributor is trying to access admin routes
    if (isDistributor && adminRoutes.includes(location.pathname)) {
      console.log('[DASHBOARD_LAYOUT] Distributor trying to access admin route, redirecting to /dashboard');
      navigate('/dashboard', { replace: true });
      return;
    }
  }, [loading, profile, isAdmin, isDistributor, location.pathname, navigate]);

  const handleSignOut = async () => {
    console.log('[DASHBOARD_LAYOUT] Signing out');
    await signOut();
    navigate('/', { replace: true });
  };

  return (
    <div data-ev-id="ev_2dbf663ffb" className="min-h-screen bg-cream flex">
      {/* Sidebar */}
      <aside data-ev-id="ev_70e349d3a3"
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-forest transform transition-transform duration-300 lg:translate-x-0 ${
      sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`
      }>

        <div data-ev-id="ev_66648e246a" className="flex flex-col h-full">
          {/* Logo */}
          <div data-ev-id="ev_636f3f25d4" className="p-6 border-b border-white/10">
            <Link to="/" className="flex items-center gap-3">
              <Logo className="w-10 h-10" />
              <div data-ev-id="ev_2b54fe7b9a">
                <p data-ev-id="ev_06dd3513d7" className="font-display text-lg font-bold text-white leading-tight">ESELUCK & BS</p>
                <p data-ev-id="ev_a985a30469" className="text-[10px] text-gold tracking-widest uppercase">
                  {isAdmin ? 'Admin Panel' : 'Distributor'}
                </p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav data-ev-id="ev_991247d9cd" className="flex-1 p-4 overflow-y-auto">
            <ul data-ev-id="ev_e9a5a5d2ce" className="flex flex-col gap-1">
              {links.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li data-ev-id="ev_d5a8e0ce09" key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      isActive ?
                      'bg-gold text-forest font-semibold' :
                      'text-white/70 hover:text-white hover:bg-white/10'}`
                      }>

                      <link.icon size={20} />
                      <span data-ev-id="ev_b0a0698f04">{link.name}</span>
                      {isActive && <ChevronRight size={16} className="ml-auto" />}
                    </Link>
                  </li>);

              })}
            </ul>
          </nav>

          {/* User Info & Logout */}
          <div data-ev-id="ev_2c021b5e85" className="p-4 border-t border-white/10">
            <div data-ev-id="ev_ab8c17e811" className="flex items-center gap-3 mb-4 px-2">
              <div data-ev-id="ev_2c047dccd6" className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <span data-ev-id="ev_d068eb4404" className="text-gold font-bold">
                  {profile?.full_name?.charAt(0) || profile?.email?.charAt(0) || 'U'}
                </span>
              </div>
              <div data-ev-id="ev_f03e2189d2" className="flex-1 min-w-0">
                <p data-ev-id="ev_531511c434" className="text-white font-medium text-sm truncate">
                  {profile?.full_name || 'User'}
                </p>
                <p data-ev-id="ev_ca9c352631" className="text-white/50 text-xs truncate">{profile?.email}</p>
              </div>
            </div>
            <button data-ev-id="ev_ae623ba43b"
            onClick={handleSignOut}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all">

              <LogOut size={20} />
              <span data-ev-id="ev_a72fccde23">Sign Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen &&
      <div data-ev-id="ev_98f68e84c7"
      className="fixed inset-0 bg-black/50 z-40 lg:hidden"
      onClick={() => setSidebarOpen(false)} />

      }

      {/* Main Content */}
      <div data-ev-id="ev_2cf5e60fa9" className="flex-1 lg:ml-64">
        {/* Top Bar */}
        <header data-ev-id="ev_46c9970c91" className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-200">
          <div data-ev-id="ev_dc0db1d7f4" className="flex items-center justify-between px-4 lg:px-8 h-16">
            <button data-ev-id="ev_c1bd42c637"
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 text-charcoal hover:text-forest">

              <Menu size={24} />
            </button>

            <div data-ev-id="ev_7f4fd980e1" className="flex-1 lg:flex-none">
              <h1 data-ev-id="ev_a256f3cd99" className="text-lg font-semibold text-charcoal hidden lg:block">
                {isAdmin ? 'Admin Dashboard' : 'Distributor Dashboard'}
              </h1>
            </div>

            <div data-ev-id="ev_e86fff2567" className="flex items-center gap-4">
              <button data-ev-id="ev_038a1fb948" className="relative p-2 text-slate hover:text-forest">
                <Bell size={22} />
                <span data-ev-id="ev_81310fca2a" className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <Link
                to="/"
                className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-forest hover:text-gold transition-colors">

                View Website
              </Link>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main data-ev-id="ev_7f5331db68" className="p-4 lg:p-8">{children}</main>
      </div>
    </div>);

}
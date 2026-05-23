/**
 * ⚠️ ROUTING RULES:
 * - BrowserRouter is in main.tsx. NEVER add another router here.
 * - Use <Routes> and <Route> only. NEVER use useRoutes().
 * - Static imports only. NEVER use React.lazy() or dynamic import().
 */
import { Routes, Route } from 'react-router';

// Public pages
import Index from '@/pages/Index';
import About from '@/pages/About';
import Products from '@/pages/Products';
import Industries from '@/pages/Industries';
import Logistics from '@/pages/Logistics';
import Partnership from '@/pages/Partnership';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';

// Auth pages
import Login from '@/pages/Login';
import Register from '@/pages/Register';

// Dashboard
import Dashboard from '@/pages/Dashboard';

// Admin pages
import Messages from '@/pages/admin/Messages';
import Quotes from '@/pages/admin/Quotes';
import Distributors from '@/pages/admin/Distributors';
import AdminOrders from '@/pages/admin/Orders';

// Distributor pages
import OrderProducts from '@/pages/distributor/OrderProducts';
import MyOrders from '@/pages/distributor/MyOrders';
import Settings from '@/pages/distributor/Settings';

export default function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/logistics" element={<Logistics />} />
      <Route path="/partnership" element={<Partnership />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />

      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Dashboard Routes */}
      <Route path="/dashboard" element={<Dashboard />} />
      
      {/* Admin Routes */}
      <Route path="/dashboard/messages" element={<Messages />} />
      <Route path="/dashboard/quotes" element={<Quotes />} />
      <Route path="/dashboard/distributors" element={<Distributors />} />
      <Route path="/dashboard/orders" element={<AdminOrders />} />

      {/* Distributor Routes */}
      <Route path="/dashboard/order" element={<OrderProducts />} />
      <Route path="/dashboard/my-orders" element={<MyOrders />} />
      <Route path="/dashboard/settings" element={<Settings />} />
    </Routes>
  );
}

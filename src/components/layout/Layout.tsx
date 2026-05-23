import { ReactNode } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div data-ev-id="ev_4a3a9d277c" className="min-h-screen bg-forest flex flex-col">
      <Navbar />
      <main data-ev-id="ev_bc3d172ee5" className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>);

}
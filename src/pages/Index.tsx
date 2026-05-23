import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import PartnersSection from '@/components/home/PartnersSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import CounterSection from '@/components/home/CounterSection';
import ProductsPreview from '@/components/home/ProductsPreview';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
      <CounterSection />
      <ProductsPreview />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
}

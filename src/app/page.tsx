import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/landing/hero-section';
import { AboutSection } from '@/components/landing/about-section';
import { ToolkitListSection } from '@/components/landing/toolkit-list-section';
import { WhyChooseSection } from '@/components/landing/why-choose-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ToolkitListSection />
        <WhyChooseSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/landing/hero-section';
import { AboutSection } from '@/components/landing/about-section';
import { HowItWorksSection } from '@/components/landing/how-it-works-section';
import { KeyFeaturesSection } from '@/components/landing/key-features-section';
import { DashboardsSection } from '@/components/landing/dashboards-section';
import { VoiceEngagementSection } from '@/components/landing/voice-engagement-section';
import { RcaCapaSection } from '@/components/landing/rca-capa-section';
import { SecuritySection } from '@/components/landing/security-section';
import { TeamSection } from '@/components/landing/team-section';
import { CtaSection } from '@/components/landing/cta-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <KeyFeaturesSection />
        <DashboardsSection />
        <VoiceEngagementSection />
        <RcaCapaSection />
        <SecuritySection />
        <TeamSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

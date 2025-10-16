import type { Metadata } from 'next';
import { Poppins, Inter, Orbitron } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';

const fontPoppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const fontOrbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
});

export const metadata: Metadata = {
  title: 'VEDA-MOTRIX AI – The Vedic Intelligence of Mobility',
  description: 'Autonomous Predictive Maintenance and Proactive Service Scheduling with a Self-Learning Manufacturing Feedback Loop.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          'min-h-screen font-body antialiased',
          fontPoppins.variable,
          fontInter.variable,
          fontOrbitron.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

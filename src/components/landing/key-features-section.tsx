import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Activity,
  AlertTriangle,
  Mic,
  CalendarDays,
  Factory,
  ShieldCheck,
} from 'lucide-react';

const features = [
  {
    icon: <Activity className="h-8 w-8 text-accent" />,
    title: 'Continuous Vehicle Health Monitoring',
    description: 'Real-time telematics analysis for proactive vehicle care.',
  },
  {
    icon: <AlertTriangle className="h-8 w-8 text-accent" />,
    title: 'Predictive Failure Detection',
    description: 'AI models forecast potential issues before they become critical.',
  },
  {
    icon: <Mic className="h-8 w-8 text-accent" />,
    title: 'Autonomous Voice Engagement',
    description: 'Proactive, persuasive voice agents communicate with drivers.',
  },
  {
    icon: <CalendarDays className="h-8 w-8 text-accent" />,
    title: 'Smart Scheduling & Load Balancing',
    description: 'Optimizes service center capacity and driver convenience.',
  },
  {
    icon: <Factory className="h-8 w-8 text-accent" />,
    title: 'Manufacturing Quality Insights',
    description: 'RCA/CAPA loop provides data to improve production quality.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-accent" />,
    title: 'UEBA Security Monitoring',
    description: 'Ensures ethical and secure AI agent operations at all times.',
  },
];

export function KeyFeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
            Key Features
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A comprehensive suite of tools for intelligent automotive management.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="gradient-glow-border transform-gpu bg-card/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader className="flex-row items-center gap-4">
                {feature.icon}
                <h3 className="text-lg font-bold font-headline">{feature.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

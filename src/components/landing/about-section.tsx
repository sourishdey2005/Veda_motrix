import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu, CalendarCheck, Factory, Zap } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-8 w-8 text-accent" />,
    title: 'Predictive Diagnostics',
    description: 'Anticipate failures before they happen with real-time data analysis.',
  },
  {
    icon: <CalendarCheck className="h-8 w-8 text-accent" />,
    title: 'Autonomous Scheduling',
    description: 'AI agents proactively book service appointments for vehicle owners.',
  },
  {
    icon: <Factory className="h-8 w-8 text-accent" />,
    title: 'Manufacturing Intelligence',
    description: 'Feed insights back to production to improve future vehicle quality.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
            What is VEDA-MOTRIX AI?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            VEDA-MOTRIX AI brings together real-time vehicle intelligence, predictive maintenance, and autonomous scheduling — powered by a network of Master and Worker AI Agents.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center bg-card/50 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {feature.icon}
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold font-headline">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

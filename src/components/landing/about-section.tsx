import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu, Package, GraduationCap, BrainCircuit } from 'lucide-react';

const features = [
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: 'No GPU Required',
    description: 'Run powerful AI models and data workflows on standard CPUs.',
  },
  {
    icon: <Package className="h-8 w-8 text-primary" />,
    title: 'All-in-One',
    description: '15+ pre-configured tools bundled for a seamless experience.',
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    title: 'Free for Students',
    description: '100% free for learners, educators, and researchers.',
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: 'Ready to Learn',
    description: 'Start learning immediately without complex setup.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
            All You Need for AI, ML, and Data Science
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our toolkit bundles over 15 professional tools like Anaconda, VS
            Code, Tableau, and PostgreSQL, all optimized for CPU performance.
            Get started in minutes, not weeks.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center">
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

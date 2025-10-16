import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { SystemCheckModal } from '../system-check-modal';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      <div className="absolute inset-0 -z-10 animate-gradient-bg bg-gradient-to-r from-background via-primary/20 to-background bg-[length:200%_200%]" />
      <div className="container relative text-center">
        <h1 className="text-4xl font-extrabold tracking-tight font-headline sm:text-5xl md:text-6xl lg:text-7xl">
          Empower Your AI Journey
          <span className="block text-primary">No GPU Needed.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Download the complete Data Science & Machine Learning Toolkit for
          Windows — 100% free, CPU-ready, and built for learners.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild className="rounded-2xl glow-on-hover">
            <Link href="#">Download Toolkit (.exe)</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="rounded-2xl"
          >
            <Link href="#">
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </Link>
          </Button>
        </div>
        <div className="mt-8">
          <SystemCheckModal />
        </div>
        <div className="mt-12 text-center">
            <div className="inline-block rounded-full bg-secondary/50 px-4 py-1.5 text-sm text-secondary-foreground">
                <span className="font-semibold text-accent">Over 5,000+</span> Students Installed!
            </div>
        </div>
      </div>
    </section>
  );
}

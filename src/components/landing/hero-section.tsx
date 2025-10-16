import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      <div className="absolute inset-0 -z-10 animate-gradient-bg bg-gradient-to-r from-background via-primary/10 to-background bg-[length:400%_400%]" />
      <div className="absolute inset-0 -z-20 bg-[url('/grid.svg')] bg-center opacity-5" />
      
      <div className="container relative text-center">
        <h1 className="text-4xl font-extrabold tracking-tight font-tech sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-primary">VEDA-MOTRIX AI</span>
          <span className="block text-foreground text-3xl sm:text-4xl md:text-5xl mt-2">The Vedic Intelligence of Mobility</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
          Autonomous Predictive Maintenance and Proactive Service Scheduling with a Self-Learning Manufacturing Feedback Loop.
        </p>

        <div className="relative mt-12 flex justify-center items-center">
             <Image 
                src="https://picsum.photos/seed/car-hologram/800/400" 
                alt="Holographic Car Engine" 
                width={800}
                height={400}
                className="opacity-40"
                data-ai-hint="holographic car engine"
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-xl md:text-2xl font-medium text-amber-400 font-tech tracking-wider bg-black/50 p-4 rounded-lg">
                    From Telematics to Transformation — Intelligent Automotive Orchestration.
                </p>
             </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild className="rounded-full glow-on-hover font-bold px-8">
            <Link href="#">Try Prototype</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="rounded-full bg-background/50 backdrop-blur-sm"
          >
            <Link href="#">
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Demo
            </Link>
          </Button>
        </div>
        
      </div>
    </section>
  );
}

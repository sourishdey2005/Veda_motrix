import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Mail, Presentation } from 'lucide-react';

export function CtaSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
        <div className="container text-center">
             <h2 className="text-4xl font-extrabold tracking-tight font-headline sm:text-5xl">
               Experience the Next Era of Automotive Intelligence.
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" asChild className="rounded-full glow-on-hover font-bold px-8">
                    <Link href="https://vedamotrix.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <Presentation className="mr-2"/>
                        Open Live Demo
                    </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-full bg-background/50 backdrop-blur-sm">
                    <Link href="#">
                        <Download className="mr-2"/>
                        Download Deck
                    </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-full bg-background/50 backdrop-blur-sm">
                    <Link href="mailto:contact@veda-motrix.ai">
                        <Mail className="mr-2"/>
                        Contact Us
                    </Link>
                </Button>
            </div>
        </div>
    </section>
  );
}

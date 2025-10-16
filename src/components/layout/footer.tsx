import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-2xl font-bold font-headline text-primary">
              Start Building Smarter — Today.
            </h3>
            <div className="mt-6 flex gap-4">
              <Button asChild size="lg" className="rounded-2xl glow-on-hover">
                <Link href="#">Download Toolkit</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-2xl"
              >
                <Link href="#" target="_blank">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col items-center justify-end lg:items-end">
            <div className="flex space-x-4">
              <Link href="#" target="_blank" aria-label="GitHub">
                <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
              <Link href="#" target="_blank" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
              <Link href="#" target="_blank" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Made with 💡 by Aarav and Team | © 2025 AI Data Science Toolkit
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

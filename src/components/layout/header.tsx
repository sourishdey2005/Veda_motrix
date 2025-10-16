import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BrainCircuit } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-14 items-center">
        <Link href="#" className="mr-6 flex items-center space-x-2">
          <BrainCircuit className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block font-headline">
            AI & Data Science Toolkit
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild className="rounded-2xl glow-on-hover">
            <Link href="#">Download Toolkit</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

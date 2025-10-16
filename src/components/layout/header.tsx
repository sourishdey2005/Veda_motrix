import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Car, Bot } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <Link href="#" className="mr-6 flex items-center space-x-2">
          <Bot className="h-8 w-8 text-primary" />
          <span className="hidden font-bold sm:inline-block font-tech text-lg">
            VEDA-MOTRIX AI
          </span>
        </Link>
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-6 text-sm font-medium text-muted-foreground">
            <Link href="#about" className="hover:text-primary">About</Link>
            <Link href="#features" className="hover:text-primary">Features</Link>
            <Link href="#dashboards" className="hover:text-primary">Dashboards</Link>
            <Link href="#contact" className="hover:text-primary">Contact</Link>
        </nav>
        <div className="flex items-center justify-end space-x-4 md:flex-initial">
          <Button asChild className="rounded-full glow-on-hover">
            <Link href="#">Try Prototype</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

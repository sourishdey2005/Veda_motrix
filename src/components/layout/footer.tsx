import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, FileText, Bot } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
             <Link href="#" className="mb-4 flex items-center space-x-2">
                <Bot className="h-8 w-8 text-primary" />
                <span className="font-bold font-tech text-lg">
                    VEDA-MOTRIX AI
                </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              © 2025 VEDA-MOTRIX AI. Made By Team Code & Karma.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
              <h4 className="font-semibold mb-2">Quick Links</h4>
              <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                <Link href="#about" className="hover:text-primary">About</Link>
                <Link href="#features" className="hover:text-primary">Features</Link>
                <Link href="#dashboards" className="hover:text-primary">Dashboards</Link>
                <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
              </div>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <h4 className="font-semibold mb-2">Connect with us</h4>
            <div className="flex space-x-4">
              <Link href="#" target="_blank" aria-label="GitHub">
                <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
              <Link href="#" target="_blank" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
              <Link href="mailto:demo@example.com" aria-label="Email">
                <Mail className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
               <Link href="#" target="_blank" aria-label="Hackathon">
                <FileText className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Fingerprint, LucideShieldAlert } from 'lucide-react';

export function SecuritySection() {
  return (
    <section id="security" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <Card className="bg-background/70 border-border shadow-2xl shadow-destructive/10 relative overflow-hidden">
            <div className="absolute -inset-4 animate-ping bg-destructive/20 rounded-full blur-3xl opacity-30"></div>
            <CardContent className="p-8 md:p-12 text-center relative">
                <LucideShieldAlert className="h-16 w-16 mx-auto text-destructive" />
                <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl mt-4">
                    Security & Compliance in Action
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    UEBA ensures autonomous AI agents act ethically and securely — detecting unauthorized actions in real-time.
                </p>
                <div className="mt-8 flex justify-center gap-8">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="h-6 w-6 text-accent" />
                        <span>Ethical Guardrails</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <Fingerprint className="h-6 w-6 text-accent" />
                        <span>Anomaly Detection</span>
                    </div>
                </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

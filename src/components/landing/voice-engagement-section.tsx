import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export function VoiceEngagementSection() {
  return (
    <section id="voice-ai" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
              Voice + AI Engagement
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our Persuasive Voice Agent reaches customers proactively to prevent breakdowns, schedule services, and deliver peace of mind.
            </p>
            <Card className="mt-8 bg-card/50 border-l-4 border-accent">
                <CardContent className="p-6">
                    <p className="text-lg italic text-foreground">
                        “Hello Rajesh, we detected a potential brake issue in your car. Shall we book a service for Saturday morning?”
                    </p>
                </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Image 
                src="https://picsum.photos/seed/voice-wave/500/300" 
                alt="AI voice waveform" 
                width={500}
                height={300}
                className="rounded-lg"
                data-ai-hint="voice waveform"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

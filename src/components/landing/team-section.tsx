import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Linkedin, Github } from 'lucide-react';
import Link from 'next/link';

const team = [
  {
    name: 'Aarav',
    role: 'AI & Cloud Architect',
    tagline: 'Orchestrating the digital symphony.',
    avatar: 'A',
  },
  {
    name: 'Isha',
    role: 'Lead Full-Stack Developer',
    tagline: 'Building bridges between ideas and reality.',
    avatar: 'I',
  },
  {
    name: 'Rohan',
    role: 'Data Scientist & ML Engineer',
    tagline: 'Uncovering the secrets hidden in data.',
    avatar: 'R',
  },
  {
    name: 'Priya',
    role: 'UI/UX & Product Visionary',
    tagline: 'Designing experiences, not just interfaces.',
    avatar: 'P',
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
            Built by Visionaries for the Future of Mobility
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Meet the team behind the VEDA-MOTRIX AI hackathon project.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <Card key={member.name} className="text-center group">
              <CardHeader className="items-center">
                <Avatar className="h-24 w-24 border-2 border-primary/50 group-hover:border-accent transition-colors">
                  
                  <AvatarFallback>{member.avatar}</AvatarFallback>
                </Avatar>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription className="text-primary">{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="italic text-muted-foreground">"{member.tagline}"</p>
                <div className="mt-4 flex justify-center gap-4">
                  <Link href="#"><Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary"/></Link>
                  <Link href="#"><Github className="h-5 w-5 text-muted-foreground hover:text-primary"/></Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

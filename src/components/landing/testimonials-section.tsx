import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Alex Johnson',
    title: 'CS Student',
    quote: 'This toolkit saved me weeks of setup time for my final-year AI project. Everything just works out of the box!',
    avatar: 'AJ',
  },
  {
    name: 'Maria Garcia',
    title: 'Aspiring Data Scientist',
    quote: 'As a beginner, I was overwhelmed. This toolkit gave me all the professional tools in one place. It runs perfectly on my laptop!',
    avatar: 'MG',
  },
  {
    name: 'Dr. Chen',
    title: 'University Researcher',
    quote: 'An excellent resource for our students. It democratizes access to data science tools without needing expensive hardware.',
    avatar: 'DC',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-secondary/50 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
            Loved by Students and Professionals
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our users are saying.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col">
              <CardContent className="flex-grow p-6">
                <p className="italic">"{testimonial.quote}"</p>
              </CardContent>
              <div className="flex items-center gap-4 border-t p-6">
                <Avatar>
                  <AvatarImage src={`https://i.pravatar.cc/40?u=${testimonial.avatar}`} />
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const dashboards = [
  {
    title: 'Manager Dashboard',
    image: 'https://picsum.photos/seed/manager-dash/1200/800',
    hint: 'futuristic dashboard',
  },
  {
    title: 'Service Manager Dashboard',
    image: 'https://picsum.photos/seed/service-dash/1200/800',
    hint: 'data visualization',
  },
  {
    title: 'User Panel',
    image: 'https://picsum.photos/seed/user-panel/1200/800',
    hint: 'mobile ui',
  },
];

export function DashboardsSection() {
  return (
    <section id="dashboards" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
            Interactive Dashboards Preview
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Predictive Analytics • Service Optimization • Real-Time Insights
          </p>
        </div>
        <div className="mt-12">
          <Carousel
            opts={{
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {dashboards.map((dashboard, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden border-2 border-primary/20 bg-secondary/50">
                    <CardContent className="p-0">
                      <Image
                        src={dashboard.image}
                        alt={dashboard.title}
                        width={1200}
                        height={800}
                        className="w-full object-cover"
                        data-ai-hint={dashboard.hint}
                      />
                    </CardContent>
                  </Card>
                  <p className="mt-4 text-center font-semibold text-lg">{dashboard.title}</p>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-16" />
            <CarouselNext className="mr-16" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

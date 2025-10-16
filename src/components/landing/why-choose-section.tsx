import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { CheckCircle, XCircle } from 'lucide-react';

const comparisonData = [
  {
    feature: 'Installation Time',
    traditional: 'Days or Weeks',
    ourToolkit: 'Under 30 Minutes',
  },
  {
    feature: 'Configuration',
    traditional: 'Manual & Complex',
    ourToolkit: '1-Click Automated Setup',
  },
  {
    feature: 'Hardware Requirement',
    traditional: 'Expensive GPU Often Needed',
    ourToolkit: 'CPU-Optimized',
  },
  {
    feature: 'Total Size',
    traditional: 'Variable, Manual Downloads',
    ourToolkit: '90+ GB of Pro-Grade Tools',
  },
  {
    feature: 'Cost',
    traditional: 'Potentially High',
    ourToolkit: '100% Free & Open-Source',
  },
  {
    feature: 'Safety',
    traditional: 'Risk of Malware',
    ourToolkit: 'Verified & Safe',
  },
];

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
            Stop Configuring, Start Learning
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See how our toolkit simplifies your setup compared to the traditional,
            time-consuming process.
          </p>
        </div>
        <div className="mt-12 overflow-hidden rounded-xl border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px] lg:w-[300px]">Feature</TableHead>
                <TableHead>Traditional Setup</TableHead>
                <TableHead className="text-primary">Our Toolkit</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row) => (
                <TableRow key={row.feature}>
                  <TableCell className="font-medium">{row.feature}</TableCell>
                  <TableCell className="flex items-center">
                    <XCircle className="mr-2 h-5 w-5 text-destructive/50" /> {row.traditional}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center font-semibold text-primary">
                      <CheckCircle className="mr-2 h-5 w-5 text-accent" /> {row.ourToolkit}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}

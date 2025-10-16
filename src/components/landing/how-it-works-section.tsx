'use client';
import { motion } from 'framer-motion';
import {
  Car,
  Database,
  BrainCircuit,
  Users,
  MessageSquare,
  Wrench,
  Factory,
  ChevronRight,
} from 'lucide-react';

const flowSteps = [
  { name: 'Vehicle Data', icon: <Car /> },
  { name: 'Master Agent', icon: <BrainCircuit /> },
  { name: 'Worker Agents', icon: <Users /> },
  { name: 'Customer', icon: <MessageSquare /> },
  { name: 'Service Center', icon: <Wrench /> },
  { name: 'Manufacturing Loop', icon: <Factory /> },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            An elegant, autonomous flow from vehicle to factory, orchestrated by AI.
          </p>
        </div>
        <div className="mt-16 overflow-x-auto pb-8">
          <div className="flex items-center justify-start md:justify-center min-w-max">
            {flowSteps.map((step, index) => (
              <motion.div
                key={step.name}
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="group flex flex-col items-center text-center w-32 md:w-40">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/50 bg-secondary transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/50 float-animation">
                    <div className="text-primary group-hover:text-primary-foreground">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="mt-2 text-sm font-semibold">{step.name}</h3>
                </div>
                {index < flowSteps.length - 1 && (
                   <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="mx-2 md:mx-4 p-1 rounded-full connector-pulse"
                  >
                    <ChevronRight className="h-8 w-8 text-primary/70" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

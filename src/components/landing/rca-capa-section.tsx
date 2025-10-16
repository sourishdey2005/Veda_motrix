'use client';
import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';

const steps = ["Issue", "RCA", "CAPA", "Design Improvement", "Reduced Defects"];

export function RcaCapaSection() {
  return (
    <section id="rca-capa" className="py-16 md:py-24">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
          RCA/CAPA Feedback Loop
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Closing the loop from in-field performance back to manufacturing for continuous improvement.
        </p>
        <div className="mt-16 flex justify-center items-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <motion.div 
              className="absolute inset-0 border-4 border-dashed border-primary/50 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            />
            <div className="absolute inset-10 flex items-center justify-center bg-background rounded-full">
                <div className="text-center">
                    <BrainCircuit className="h-16 w-16 text-accent mx-auto"/>
                    <h3 className="font-tech text-2xl font-bold text-accent mt-2">VEDA Loop</h3>
                </div>
            </div>
            {steps.map((step, i) => {
              const angle = (i / steps.length) * 2 * Math.PI - Math.PI / 2;
              const x = Math.cos(angle) * 180;
              const y = Math.sin(angle) * 180;
              return (
                <motion.div
                  key={step}
                  className="absolute top-1/2 left-1/2 w-32"
                  style={{
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-secondary p-2 rounded-lg text-sm font-semibold">{step}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

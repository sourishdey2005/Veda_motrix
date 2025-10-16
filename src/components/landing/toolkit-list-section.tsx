import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  AnacondaIcon,
  VscodeIcon,
  KnimeIcon,
  TableauIcon,
  PostgresqlIcon,
  TensorflowIcon,
  PytorchIcon,
  MysqlIcon,
} from '@/components/icons';

const tools = [
  {
    name: 'Anaconda',
    description: 'Python, Jupyter, & ML libraries.',
    icon: <AnacondaIcon className="h-10 w-10" />,
  },
  {
    name: 'Visual Studio Code',
    description: 'A smart IDE for modern development.',
    icon: <VscodeIcon className="h-10 w-10" />,
  },
  {
    name: 'KNIME',
    description: 'Build no-code ML workflows.',
    icon: <KnimeIcon className="h-10 w-10" />,
  },
  {
    name: 'Tableau Public',
    description: 'Powerful data visualization.',
    icon: <TableauIcon className="h-10 w-10" />,
  },
  {
    name: 'PostgreSQL',
    description: 'The world\'s most advanced open source database.',
    icon: <PostgresqlIcon className="h-10 w-10" />,
  },
  {
    name: 'MySQL',
    description: 'A popular open-source relational database.',
    icon: <MysqlIcon className="h-10 w-10" />,
  },
  {
    name: 'TensorFlow CPU',
    description: 'End-to-end open source platform for ML.',
    icon: <TensorflowIcon className="h-10 w-10" />,
  },
  {
    name: 'PyTorch CPU',
    description: 'An open source machine learning framework.',
    icon: <PytorchIcon className="h-10 w-10" />,
  },
];

export function ToolkitListSection() {
  return (
    <section id="toolkit" className="bg-secondary/50 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
            A Curated Suite of Professional Tools
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We've handpicked and optimized the best open-source software so you can focus on learning.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
          {tools.map((tool) => (
            <Card
              key={tool.name}
              className="group transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
            >
              <CardHeader className="items-center">
                {tool.icon}
              </CardHeader>
              <CardContent className="text-center">
                <h3 className="font-semibold">{tool.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {tool.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

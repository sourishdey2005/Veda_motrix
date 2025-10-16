'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  systemCompatibilityCheck,
  type SystemCompatibilityCheckOutput,
} from '@/ai/flows/system-compatibility-check';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { CheckCircle, Loader2, XCircle } from 'lucide-react';

const formSchema = z.object({
  systemInfo: z
    .string()
    .min(10, 'Please provide detailed system information.')
    .max(500, 'System information is too long.'),
});

export function SystemCheckModal() {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState<SystemCompatibilityCheckOutput | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      systemInfo: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    try {
      const res = await systemCompatibilityCheck({
        systemInformation: values.systemInfo,
      });
      setResult(res);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: 'Failed to check system compatibility. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      form.reset();
      setResult(null);
      setIsLoading(false);
    }
    setOpen(isOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="link">Check System Requirements</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>System Compatibility Check</DialogTitle>
          <DialogDescription>
            Enter your system specs to see if they meet the minimum
            requirements. You can get this by running 'dxdiag' or 'msinfo32' on Windows.
          </DialogDescription>
        </DialogHeader>
        {!result && (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="systemInfo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>System Information</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., Windows 11, Intel Core i7-11800H, 16GB RAM, 250GB Free Space"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Checking...
                  </>
                ) : (
                  'Check Compatibility'
                )}
              </Button>
            </form>
          </Form>
        )}
        {result && (
          <div className="mt-4">
            <Alert
              variant={result.isCompatible ? 'default' : 'destructive'}
              className={result.isCompatible ? 'border-green-500' : ''}
            >
              {result.isCompatible ? (
                <CheckCircle className="h-4 w-4 text-green-500" />
              ) : (
                <XCircle className="h-4 w-4" />
              )}
              <AlertTitle>
                {result.isCompatible
                  ? 'System is Compatible!'
                  : 'Compatibility Check Failed'}
              </AlertTitle>
              <AlertDescription>{result.recommendations}</AlertDescription>
            </Alert>
            <Button
              variant="outline"
              onClick={() => {
                setResult(null);
                form.reset();
              }}
              className="mt-4 w-full"
            >
              Check Again
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

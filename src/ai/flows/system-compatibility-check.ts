'use server';

/**
 * @fileOverview System compatibility check flow.
 *
 * - systemCompatibilityCheck - A function that checks if the user's system meets the minimal requirements of the application.
 * - SystemCompatibilityCheckInput - The input type for the systemCompatibilityCheck function.
 * - SystemCompatibilityCheckOutput - The return type for the systemCompatibilityCheck function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SystemCompatibilityCheckInputSchema = z.object({
  systemInformation: z.string().describe('Detailed system information, including OS version, CPU model, RAM size, and available disk space.'),
});
export type SystemCompatibilityCheckInput = z.infer<typeof SystemCompatibilityCheckInputSchema>;

const SystemCompatibilityCheckOutputSchema = z.object({
  isCompatible: z.boolean().describe('Whether the system meets the minimum requirements.'),
  recommendations: z.string().describe('Recommendations for upgrading the system if it does not meet the requirements.'),
});
export type SystemCompatibilityCheckOutput = z.infer<typeof SystemCompatibilityCheckOutputSchema>;

export async function systemCompatibilityCheck(input: SystemCompatibilityCheckInput): Promise<SystemCompatibilityCheckOutput> {
  return systemCompatibilityCheckFlow(input);
}

const prompt = ai.definePrompt({
  name: 'systemCompatibilityCheckPrompt',
  input: {schema: SystemCompatibilityCheckInputSchema},
  output: {schema: SystemCompatibilityCheckOutputSchema},
  prompt: `You are an AI assistant specializing in determining system compatibility for the AI Data Science Toolkit.

  Based on the provided system information, assess whether the system meets the minimum requirements:

  Minimum Requirements:
  - Operating System: Windows 10 64-bit or later
  - CPU: Intel Core i5 or equivalent
  - RAM: 8 GB
  - Disk Space: 100 GB

  System Information: {{{systemInformation}}}

  Determine if the system is compatible and provide recommendations if it is not.
  The response must be in JSON format.
  `,
});

const systemCompatibilityCheckFlow = ai.defineFlow(
  {
    name: 'systemCompatibilityCheckFlow',
    inputSchema: SystemCompatibilityCheckInputSchema,
    outputSchema: SystemCompatibilityCheckOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

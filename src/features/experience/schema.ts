import { z } from "zod";

export const experienceSchema = z.object({
  company: z.string().min(1),
  role: z.string().min(1),
  period: z.string().min(1),
  current: z.boolean().default(false),
  highlights: z.array(z.string().min(1)).min(1),
  stack: z.array(z.string().min(1)),
});

export type Experience = z.infer<typeof experienceSchema>;

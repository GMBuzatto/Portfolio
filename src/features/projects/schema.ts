import { z } from "zod";

export const projectSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  language: z.string().min(1),
  repositoryUrl: z.string().url(),
  homepageUrl: z.string().url().optional(),
});

export type Project = z.infer<typeof projectSchema>;

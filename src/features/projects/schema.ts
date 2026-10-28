import { z } from "zod";

export const projectSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  language: z.string().min(1),
  repositoryUrl: z.string().url(),
  homepageUrl: z.string().url().optional(),
});

export type Project = z.infer<typeof projectSchema>;

export const featuredProjectSchema = projectSchema.extend({
  tagline: z.string().min(1),
  stack: z.array(z.string().min(1)).min(1),
  highlights: z
    .array(z.object({ title: z.string().min(1), description: z.string().min(1) }))
    .min(1),
});

export type FeaturedProject = z.infer<typeof featuredProjectSchema>;

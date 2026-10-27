import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  headline: z.string().min(1),
  about: z.array(z.string().min(1)).min(1),
  focusAreas: z
    .array(z.object({ title: z.string().min(1), description: z.string().min(1) }))
    .min(1),
  email: z.string().email(),
  linkedinUrl: z.string().url(),
  githubUrl: z.string().url(),
  avatarUrl: z.string().url(),
  resumePath: z.string().startsWith("/"),
});

export type Profile = z.infer<typeof profileSchema>;

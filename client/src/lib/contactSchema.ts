import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2, "Skriv ditt namn").max(80),
  email: z.string().email("Ange en giltig email").max(120),
  phone: z.string().max(40).optional(),
  subject: z.string().min(3, "Ämnet är för kort").max(120),
  message: z.string().min(10, "Meddelandet är för kort").max(2000),
  // honeypot
  website: z.string().optional(),
});

export type ContactForm = z.infer<typeof ContactSchema>;

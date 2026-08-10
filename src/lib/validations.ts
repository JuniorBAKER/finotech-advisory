import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Veuillez entrer votre nom complet."),
  email: z.string().email("Veuillez entrer une adresse courriel valide."),
  company: z.string().min(1, "Veuillez entrer le nom de votre organisation."),
  role: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(1, "Veuillez sélectionner un sujet."),
  message: z.string().min(20, "Veuillez décrire votre besoin en au moins 20 caractères."),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Veuillez accepter la politique de confidentialité pour continuer." }),
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const bookingFormSchema = z.object({
  fullName: z.string().min(2, "Veuillez entrer votre nom complet."),
  email: z.string().email("Veuillez entrer une adresse courriel valide."),
  company: z.string().min(1, "Veuillez entrer le nom de votre organisation."),
  phone: z.string().optional(),
  interest: z.string().min(1, "Veuillez sélectionner un sujet d'intérêt."),
  companySize: z.string().optional(),
  message: z.string().optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Veuillez accepter la politique de confidentialité pour continuer." }),
  }),
});

export type BookingFormValues = z.infer<typeof bookingFormSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Veuillez entrer une adresse courriel valide."),
});

import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { contactClientConfirmationEmail, contactInternalNotificationEmail } from "@/lib/email-templates";
import { COMPANY } from "@/lib/constants";

// Envoi d'e-mails transactionnels via Resend (https://resend.com).
// Si aucune clé API n'est configurée (RESEND_API_KEY), la requête est validée
// et journalisée, sans envoi réel — utile en développement.
async function sendEmail(to: string, subject: string, html: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log(`[contact] Simulation d'envoi à ${to} — sujet : ${subject}`);
    return;
  }
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `Finotech Advisory <no-reply@finotechadvisory.ca>`,
      to,
      subject,
      html,
    }),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Données invalides.", issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const values = parsed.data;
    const notificationTarget = process.env.CONTACT_NOTIFICATION_EMAIL || COMPANY.email;

    const clientEmail = contactClientConfirmationEmail(values);
    const internalEmail = contactInternalNotificationEmail(values);

    await Promise.all([
      sendEmail(values.email, clientEmail.subject, clientEmail.html),
      sendEmail(notificationTarget, internalEmail.subject, internalEmail.html),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[api/contact] Erreur:", error);
    return NextResponse.json(
      { success: false, error: "Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone." },
      { status: 500 }
    );
  }
}

import { COMPANY } from "./constants";
import type { ContactFormValues } from "./validations";
import type { BookingFormValues } from "./validations";

const wrapper = (title: string, body: string) => `
<!doctype html>
<html lang="fr-CA">
  <body style="margin:0;padding:0;background-color:#f7f7f7;font-family:Georgia,'Times New Roman',serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7f7f7;padding:32px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="background-color:#031a28;padding:28px 32px;">
                <span style="color:#ffffff;font-size:18px;font-weight:600;letter-spacing:-0.02em;">Finotech <span style="color:#e23226;">Advisory</span></span>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;color:#031a28;">
                <h1 style="font-size:20px;margin:0 0 16px;">${title}</h1>
                ${body}
              </td>
            </tr>
            <tr>
              <td style="background-color:#f7f7f7;padding:20px 32px;font-size:12px;color:#5e5f5f;font-family:Arial,sans-serif;">
                ${COMPANY.legalName} — ${COMPANY.addressLine}<br/>
                <a href="mailto:${COMPANY.email}" style="color:#5e5f5f;">${COMPANY.email}</a> · ${COMPANY.phone}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

const p = (text: string) => `<p style="font-family:Arial,sans-serif;font-size:15px;line-height:1.6;color:#3a4048;margin:0 0 14px;">${text}</p>`;

export function contactClientConfirmationEmail(values: ContactFormValues) {
  return {
    subject: "Nous avons bien reçu votre message — Finotech Advisory",
    html: wrapper(
      `Merci, ${values.fullName.split(" ")[0]}.`,
      p("Votre message a bien été reçu par notre équipe.") +
        p(`Sujet : <strong>${values.subject}</strong>`) +
        p("Un membre de notre équipe vous répondra personnellement dans un délai d'un jour ouvrable.") +
        p("Si votre besoin est urgent, vous pouvez également nous joindre directement par téléphone.")
    ),
  };
}

export function contactInternalNotificationEmail(values: ContactFormValues) {
  return {
    subject: `Nouveau message — ${values.subject} (${values.company})`,
    html: wrapper(
      "Nouveau message reçu via le formulaire de contact",
      p(`<strong>Nom :</strong> ${values.fullName}`) +
        p(`<strong>Courriel :</strong> ${values.email}`) +
        p(`<strong>Organisation :</strong> ${values.company}`) +
        (values.role ? p(`<strong>Fonction :</strong> ${values.role}`) : "") +
        (values.phone ? p(`<strong>Téléphone :</strong> ${values.phone}`) : "") +
        p(`<strong>Sujet :</strong> ${values.subject}`) +
        p(`<strong>Message :</strong><br/>${values.message.replace(/\n/g, "<br/>")}`)
    ),
  };
}

export function bookingClientConfirmationEmail(values: BookingFormValues) {
  return {
    subject: "Votre demande de rendez-vous est confirmée — Finotech Advisory",
    html: wrapper(
      `Merci, ${values.fullName.split(" ")[0]}.`,
      p("Votre demande de rendez-vous a bien été reçue.") +
        p(`Sujet d'intérêt : <strong>${values.interest}</strong>`) +
        p("Un conseiller senior vous contactera dans un délai d'un jour ouvrable afin de fixer l'heure de votre échange stratégique de 30 minutes.") +
        p("Cet échange est offert sans frais et sans engagement.")
    ),
  };
}

export function bookingInternalNotificationEmail(values: BookingFormValues) {
  return {
    subject: `Nouvelle demande de rendez-vous — ${values.company}`,
    html: wrapper(
      "Nouvelle demande de rendez-vous",
      p(`<strong>Nom :</strong> ${values.fullName}`) +
        p(`<strong>Courriel :</strong> ${values.email}`) +
        p(`<strong>Organisation :</strong> ${values.company}`) +
        (values.phone ? p(`<strong>Téléphone :</strong> ${values.phone}`) : "") +
        p(`<strong>Sujet d'intérêt :</strong> ${values.interest}`) +
        (values.companySize ? p(`<strong>Taille de l'organisation :</strong> ${values.companySize}`) : "") +
        (values.message ? p(`<strong>Contexte :</strong><br/>${values.message.replace(/\n/g, "<br/>")}`) : "")
    ),
  };
}

export function newsletterWelcomeEmail(email: string) {
  return {
    subject: "Bienvenue dans les Insights de Finotech Advisory",
    html: wrapper(
      "Bienvenue.",
      p("Vous recevrez désormais nos analyses en finance stratégique, business intelligence et gouvernance — une fois par mois, jamais davantage.") +
        p("Vous pouvez vous désabonner à tout moment en un clic depuis n'importe quelle infolettre.")
    ),
  };
}

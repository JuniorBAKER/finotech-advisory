"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { contactFormSchema } from "@/lib/validations";
import { Button } from "@/components/ui/Button";

const SUBJECTS = [
  "Demande générale",
  "CFO as a Service",
  "Financial Performance System",
  "Business Intelligence Process",
  "Financial Modeling Project",
  "Data Analytics & Research",
  "Restructuration d'entreprise",
  "Business Valuation",
  "Optimisation Organisationnelle",
  "Carrières",
  "Média / partenariat",
];

type Errors = Partial<Record<keyof ReturnType<typeof defaultValues>, string>>;

function defaultValues() {
  return {
    fullName: "",
    email: "",
    company: "",
    role: "",
    phone: "",
    subject: SUBJECTS[0]!,
    message: "",
    consent: false as boolean,
  };
}

export function ContactForm() {
  const [values, setValues] = useState(defaultValues());
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function update<K extends keyof ReturnType<typeof defaultValues>>(key: K, value: any) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = contactFormSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Errors = {};
      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof Errors;
        fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      setStatus("error");
      return;
    }
    setErrors({});
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("request-failed");
      setStatus("success");
      setValues(defaultValues());
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-scarlet-500/30 bg-scarlet-500/5 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-scarlet-500" />
        <h3 className="font-display text-xl font-medium text-navy-900 dark:text-white">
          Votre message a bien été envoyé.
        </h3>
        <p className="max-w-sm text-sm text-anthracite-600 dark:text-anthracite-300">
          Un membre de notre équipe vous répondra dans un délai d&apos;un jour ouvrable.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <Field label="Nom complet" error={errors.fullName}>
        <input
          className="input"
          value={values.fullName}
          onChange={(e) => update("fullName", e.target.value)}
          placeholder="Ex. Marie Tremblay"
        />
      </Field>
      <Field label="Adresse courriel" error={errors.email}>
        <input
          type="email"
          className="input"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="vous@entreprise.com"
        />
      </Field>
      <Field label="Organisation" error={errors.company}>
        <input
          className="input"
          value={values.company}
          onChange={(e) => update("company", e.target.value)}
          placeholder="Nom de votre entreprise"
        />
      </Field>
      <Field label="Fonction (optionnel)">
        <input
          className="input"
          value={values.role}
          onChange={(e) => update("role", e.target.value)}
          placeholder="Ex. Directrice générale"
        />
      </Field>
      <Field label="Téléphone (optionnel)">
        <input
          className="input"
          value={values.phone}
          onChange={(e) => update("phone", e.target.value)}
          placeholder="(514) 000-0000"
        />
      </Field>
      <Field label="Sujet" error={errors.subject}>
        <select className="input" value={values.subject} onChange={(e) => update("subject", e.target.value)}>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Votre message" error={errors.message} full>
        <textarea
          className="input min-h-[140px] resize-y"
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Décrivez votre contexte et vos objectifs..."
        />
      </Field>

      <div className="sm:col-span-2">
        <label className="flex items-start gap-3 text-sm text-anthracite-600 dark:text-anthracite-300">
          <input
            type="checkbox"
            checked={values.consent}
            onChange={(e) => update("consent", e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 rounded border-anthracite-300 text-scarlet-600 focus:ring-scarlet-400"
          />
          <span>
            J&apos;accepte que Finotech Advisory traite mes données conformément à sa{" "}
            <a href="/confidentialite" className="link-underline font-medium text-navy-900 dark:text-white">
              politique de confidentialité
            </a>
            .
          </span>
        </label>
        {errors.consent && <p className="mt-1.5 text-xs text-scarlet-500">{errors.consent}</p>}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg bg-scarlet-500/10 px-4 py-3 text-sm text-scarlet-600 sm:col-span-2">
          <AlertCircle className="h-4 w-4 shrink-0" />
          Veuillez corriger les champs indiqués ci-dessus avant d&apos;envoyer votre message.
        </div>
      )}

      <div className="sm:col-span-2">
        <Button type="submit" variant="primary" size="lg" disabled={status === "loading"} className="w-full sm:w-auto">
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Envoi en cours...
            </>
          ) : (
            "Envoyer le message"
          )}
        </Button>
      </div>

      <style jsx global>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(122, 132, 141, 0.3);
          background: transparent;
          padding: 0.75rem 1rem;
          font-size: 0.9375rem;
          transition: border-color 0.2s ease;
        }
        .input:focus {
          outline: none;
          border-color: #e23226;
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  error,
  full,
  children,
}: {
  label: string;
  error?: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={full ? "sm:col-span-2" : undefined}>
      <label className="mb-1.5 block text-sm font-medium text-navy-800 dark:text-anthracite-200">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-xs text-scarlet-500">{error}</p>}
    </div>
  );
}

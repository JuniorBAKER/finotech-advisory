"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, AlertCircle, CalendarClock } from "lucide-react";
import { bookingFormSchema } from "@/lib/validations";
import { Button } from "@/components/ui/Button";

const INTERESTS = [
  "CFO as a Service",
  "Financial Performance System",
  "Business Intelligence Process",
  "Financial Modeling Project",
  "Data Analytics & Research",
  "Restructuration d'entreprise",
  "Business Valuation",
  "Optimisation Organisationnelle",
  "Je ne sais pas encore — j'ai besoin de conseils",
];

const COMPANY_SIZES = ["1 à 10 employés", "11 à 50 employés", "51 à 200 employés", "200+ employés"];

type Values = {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  interest: string;
  companySize: string;
  message: string;
  consent: boolean;
};

const initial: Values = {
  fullName: "",
  email: "",
  company: "",
  phone: "",
  interest: INTERESTS[0]!,
  companySize: COMPANY_SIZES[0]!,
  message: "",
  consent: false,
};

export function BookingForm() {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function update<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = bookingFormSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof Values, string>> = {};
      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof Values;
        fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      setStatus("error");
      return;
    }
    setErrors({});
    setStatus("loading");
    try {
      const res = await fetch("/api/rendez-vous", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("request-failed");
      setStatus("success");
      setValues(initial);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-scarlet-500/30 bg-scarlet-500/5 p-10 text-center">
        <CalendarClock className="h-10 w-10 text-scarlet-500" />
        <h3 className="font-display text-xl font-medium text-navy-900 dark:text-white">
          Votre demande de rendez-vous est confirmée.
        </h3>
        <p className="max-w-sm text-sm text-anthracite-600 dark:text-anthracite-300">
          Un conseiller senior vous contactera dans un délai d&apos;un jour ouvrable pour fixer l&apos;heure
          de votre échange stratégique de 30 minutes.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <F label="Nom complet" error={errors.fullName}>
        <input className="input" value={values.fullName} onChange={(e) => update("fullName", e.target.value)} placeholder="Votre nom" />
      </F>
      <F label="Adresse courriel" error={errors.email}>
        <input type="email" className="input" value={values.email} onChange={(e) => update("email", e.target.value)} placeholder="vous@entreprise.com" />
      </F>
      <F label="Organisation" error={errors.company}>
        <input className="input" value={values.company} onChange={(e) => update("company", e.target.value)} placeholder="Nom de votre entreprise" />
      </F>
      <F label="Téléphone (optionnel)">
        <input className="input" value={values.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(514) 000-0000" />
      </F>
      <F label="Sujet d'intérêt" error={errors.interest}>
        <select className="input" value={values.interest} onChange={(e) => update("interest", e.target.value)}>
          {INTERESTS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </F>
      <F label="Taille de l'organisation">
        <select className="input" value={values.companySize} onChange={(e) => update("companySize", e.target.value)}>
          {COMPANY_SIZES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </F>
      <F label="Contexte (optionnel)" full>
        <textarea className="input min-h-[120px] resize-y" value={values.message} onChange={(e) => update("message", e.target.value)} placeholder="Un mot sur votre enjeu actuel..." />
      </F>

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
          Veuillez corriger les champs indiqués ci-dessus avant d&apos;envoyer votre demande.
        </div>
      )}

      <div className="sm:col-span-2">
        <Button type="submit" variant="scarlet" size="lg" disabled={status === "loading"} className="w-full sm:w-auto">
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Envoi en cours...
            </>
          ) : (
            "Confirmer ma demande de rendez-vous"
          )}
        </Button>
      </div>
    </form>
  );
}

function F({ label, error, full, children }: { label: string; error?: string; full?: boolean; children: React.ReactNode }) {
  return (
    <div className={full ? "sm:col-span-2" : undefined}>
      <label className="mb-1.5 block text-sm font-medium text-navy-800 dark:text-anthracite-200">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-xs text-scarlet-500">{error}</p>}
    </div>
  );
}

"use client";

import { useState, FormEvent } from "react";
import { newsletterSchema } from "@/lib/validations";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Mail } from "lucide-react";

type BulletinSubscribeFormProps = {
  heading?: string;
  description?: string;
  successMessage?: string;
};

export function BulletinSubscribeForm({
  heading = "Recevoir chaque bulletin",
  description = "Une publication chaque trimestre, directement dans votre boîte de réception. Aucune sollicitation commerciale.",
  successMessage = "Merci — vous recevrez le prochain Bulletin Finotech Analytics dès sa publication.",
}: BulletinSubscribeFormProps = {}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const result = newsletterSchema.safeParse({ email });
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Adresse courriel invalide.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setError("");
    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setError("Une erreur est survenue. Veuillez réessayer.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-scarlet-400/30 bg-white/5 px-6 py-5 text-white">
        <CheckCircle2 className="h-5 w-5 shrink-0 text-scarlet-400" />
        <p className="text-sm">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <div className="flex items-center gap-2 text-white">
        <Mail className="h-5 w-5 text-scarlet-400" />
        <p className="text-sm font-semibold uppercase tracking-wide">{heading}</p>
      </div>
      <p className="mt-2 text-sm text-anthracite-300">{description}</p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          placeholder="Votre adresse courriel professionnelle"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-anthracite-400 focus:border-scarlet-400 focus:outline-none"
          aria-label="Adresse courriel pour le Bulletin Finotech Analytics"
        />
        <Button type="submit" variant="scarlet" size="md" disabled={status === "loading"} className="shrink-0">
          {status === "loading" ? "Envoi..." : "S'abonner au bulletin"}
        </Button>
      </div>
      {status === "error" && <p className="mt-2 text-xs text-scarlet-400">{error}</p>}
    </form>
  );
}

"use client";

import { useState, FormEvent } from "react";
import { newsletterSchema } from "@/lib/validations";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

export function Newsletter() {
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
      <div className="flex items-center gap-2 text-sm text-scarlet-400">
        <CheckCircle2 className="h-4 w-4" />
        Merci — vous recevrez nos prochains Insights.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm">
      <div className="flex gap-2">
        <input
          type="email"
          required
          placeholder="Votre adresse courriel"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-anthracite-400 focus:border-scarlet-400 focus:outline-none"
          aria-label="Adresse courriel pour l'infolettre"
        />
        <Button type="submit" variant="scarlet" size="sm" disabled={status === "loading"}>
          {status === "loading" ? "..." : "S'abonner"}
        </Button>
      </div>
      {status === "error" && <p className="mt-2 text-xs text-scarlet-500">{error}</p>}
      <p className="mt-2 text-xs text-anthracite-400">
        Une analyse par mois. Aucune infolettre hebdomadaire. Désabonnement en un clic.
      </p>
    </form>
  );
}

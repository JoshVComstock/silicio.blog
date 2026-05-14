"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface NewsletterFormProps {
  variant?: "inline" | "card" | "hero";
  className?: string;
}

export const NewsletterForm = ({ variant = "inline", className }: NewsletterFormProps) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className={cn("flex items-center gap-3 text-green-600 dark:text-green-400", className)}>
        <CheckCircle className="h-5 w-5 shrink-0" />
        <span className="text-sm font-medium">
          ¡Suscripción confirmada! Revisa tu email.
        </span>
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div className={cn("rounded-xl bg-primary/5 border border-primary/20 p-6", className)}>
        <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Newsletter</p>
        <h3 className="font-bold text-base mb-1">Las mejores noticias tech de la semana</h3>
        <p className="text-sm text-muted-foreground mb-4">
          3 artículos esenciales en tu inbox cada viernes.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <Input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-background"
          />
          <Button type="submit" disabled={loading} className="w-full gap-2 bg-primary text-primary-foreground">
            <Send className="h-3.5 w-3.5" />
            {loading ? "Enviando..." : "Suscribirme gratis"}
          </Button>
        </form>
        <p className="text-xs text-muted-foreground mt-2 text-center">Sin spam. Cancela cuando quieras.</p>
      </div>
    );
  }

  // inline (default)
  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex gap-2 flex-col sm:flex-row", className)}
    >
      <Input
        type="email"
        placeholder="Introduce tu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1"
        aria-label="Tu dirección de email"
      />
      <Button type="submit" disabled={loading} className="gap-2 bg-primary text-primary-foreground font-semibold shrink-0">
        <Send className="h-3.5 w-3.5" />
        {loading ? "Enviando..." : "Suscribirme"}
      </Button>
    </form>
  );
}

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Instagram, Facebook, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      toast.error("Zaakceptuj Politykę Prywatności.");
      return;
    }
    setSubmitting(true);
    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || null,
      message: formData.message.trim(),
      consent,
    };
    const { error } = await supabase.from("contact_submissions").insert(payload);
    if (error) {
      setSubmitting(false);
      toast.error("Nie udało się wysłać wiadomości. Spróbuj ponownie.");
      return;
    }
    const { error: emailError } = await supabase.functions.invoke("send-contact-email", {
      body: { ...payload, created_at: new Date().toISOString() },
    });
    setSubmitting(false);
    if (emailError) {
      console.error("send-contact-email failed:", emailError);
    }
    toast.success("Wiadomość wysłana! Odezwiemy się wkrótce.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setConsent(false);
  };

  return (
    <section id="rezerwacja" className="bg-section-alt py-32 px-6">
      <div ref={ref} className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="mb-4 font-body text-xs uppercase tracking-[0.3em] text-primary">Kontakt</p>
          <h2 className="font-display text-4xl font-light md:text-5xl lg:text-6xl">
            Zarezerwuj swój <span className="text-gold-gradient italic">termin</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-2"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="font-body text-xs uppercase tracking-widest text-muted-foreground">Imię i nazwisko *</label>
              <input
                type="text"
                required
                maxLength={100}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-2 w-full border-b border-border bg-transparent py-3 font-body text-foreground outline-none transition-colors focus:border-primary"
                placeholder="Twoje imię i nazwisko"
              />
            </div>
            <div>
              <label className="font-body text-xs uppercase tracking-widest text-muted-foreground">Adres e-mail *</label>
              <input
                type="email"
                required
                maxLength={255}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-2 w-full border-b border-border bg-transparent py-3 font-body text-foreground outline-none transition-colors focus:border-primary"
                placeholder="twoj@email.pl"
              />
            </div>
            <div>
              <label className="font-body text-xs uppercase tracking-widest text-muted-foreground">Numer telefonu</label>
              <input
                type="tel"
                maxLength={20}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-2 w-full border-b border-border bg-transparent py-3 font-body text-foreground outline-none transition-colors focus:border-primary"
                placeholder="+48 ..."
              />
            </div>
            <div>
              <label className="font-body text-xs uppercase tracking-widest text-muted-foreground">Wiadomość *</label>
              <textarea
                required
                maxLength={1000}
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-2 w-full border-b border-border bg-transparent py-3 font-body text-foreground outline-none transition-colors focus:border-primary resize-none"
                placeholder="Opisz swój pomysł na tatuaż..."
              />
            </div>
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 accent-primary cursor-pointer"
              />
              <span className="font-body text-xs leading-relaxed text-muted-foreground">
                Zapoznałem(-am) się z{" "}
                <Link
                  to="/polityka-prywatnosci"
                  className="text-primary underline underline-offset-4 transition-colors hover:text-foreground"
                >
                  Polityką Prywatności
                </Link>{" "}
                i wyrażam zgodę na przetwarzanie moich danych osobowych w celu udzielenia odpowiedzi na przesłane zapytanie.
              </span>
            </label>
            <button
              type="submit"
              disabled={submitting}
              className="flex items-center gap-3 border border-primary px-8 py-4 font-body text-xs uppercase tracking-widest text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-4 w-4" />
              {submitting ? "Wysyłanie..." : "Wyślij wiadomość"}
            </button>
          </form>

          <div className="space-y-8">
            <div>
              <p className="font-body text-xs uppercase tracking-widest text-muted-foreground">Adres</p>
              <p className="mt-2 font-display text-lg">ul. Krzywa 15</p>
              <p className="font-display text-lg">97-532 Mała Wieś</p>
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-widest text-muted-foreground">Godziny otwarcia</p>
              <p className="mt-2 font-body text-sm text-muted-foreground">Pon–Pt: 10:00 – 20:00</p>
              <p className="font-body text-sm text-muted-foreground">Sob: 11:00 – 18:00</p>
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-widest text-muted-foreground">Kontakt</p>
              <p className="mt-2 font-body text-sm text-muted-foreground">+48 123 456 789</p>
              <p className="font-body text-sm text-muted-foreground">kontakt@inkalchemy.pl</p>
            </div>
            <div className="flex gap-5">
              <a href="#" className="text-primary transition-all duration-300 hover:text-foreground hover:scale-110 hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary transition-all duration-300 hover:text-foreground hover:scale-110 hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary transition-all duration-300 hover:text-foreground hover:scale-110 hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]">
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

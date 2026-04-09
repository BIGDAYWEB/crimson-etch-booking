import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Wiadomość wysłana! Odezwiemy się wkrótce.");
    setFormData({ name: "", message: "" });
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
              <label className="font-body text-xs uppercase tracking-widest text-muted-foreground">Imię</label>
              <input
                type="text"
                required
                maxLength={100}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-2 w-full border-b border-border bg-transparent py-3 font-body text-foreground outline-none transition-colors focus:border-primary"
                placeholder="Twoje imię"
              />
            </div>
            <div>
              <label className="font-body text-xs uppercase tracking-widest text-muted-foreground">Wiadomość</label>
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
            <button
              type="submit"
              className="flex items-center gap-3 border border-primary px-8 py-4 font-body text-xs uppercase tracking-widest text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              <Send className="h-4 w-4" />
              Wyślij wiadomość
            </button>
          </form>

          <div className="space-y-8">
            <div>
              <p className="font-body text-xs uppercase tracking-widest text-muted-foreground">Adres</p>
              <p className="mt-2 font-display text-lg">ul. Artystyczna 42</p>
              <p className="font-display text-lg">00-001 Warszawa</p>
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
            <div className="flex gap-4">
              <a href="#" className="font-body text-xs uppercase tracking-widest text-primary transition-all hover:tracking-[0.25em]">Instagram</a>
              <a href="#" className="font-body text-xs uppercase tracking-widest text-primary transition-all hover:tracking-[0.25em]">Facebook</a>
              <a href="#" className="font-body text-xs uppercase tracking-widest text-primary transition-all hover:tracking-[0.25em]">WhatsApp</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

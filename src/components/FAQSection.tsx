import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Czy tatuaż boli?",
    a: "Ból jest subiektywny i zależy od miejsca na ciele. Większość klientów opisuje go jako drapanie lub lekkie pieczenie. Zapewniamy komfortowe warunki i wsparcie na każdym etapie sesji.",
  },
  {
    q: "Jak przygotować się do sesji?",
    a: "Dzień przed sesją unikaj alkoholu i aspiryny. Dobrze się wyśpij i zjedz solidny posiłek. Przyjdź w wygodnym ubraniu. Nawilż skórę w tygodniach przed wizytą.",
  },
  {
    q: "Jak dbać o świeży tatuaż?",
    a: "Po sesji otrzymasz szczegółową instrukcję pielęgnacji. Główne zasady: myj delikatnie, nakładaj krem gojący, unikaj słońca, basenu i sauny przez min. 2 tygodnie.",
  },
  {
    q: "Ile trwa sesja tatuażu?",
    a: "Od 1 do 8 godzin, w zależności od rozmiaru i skomplikowania projektu. Duże projekty realizujemy w kilku sesjach z przerwami na gojenie.",
  },
  {
    q: "Czy mogę przyjść ze swoim projektem?",
    a: "Oczywiście! Zachęcamy do przynoszenia inspiracji. Nasi artyści dostosują projekt do Twoich oczekiwań i anatomii ciała, tworząc unikalne dzieło.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-32 px-6">
      <div ref={ref} className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="mb-4 font-body text-xs uppercase tracking-[0.3em] text-primary">FAQ</p>
          <h2 className="font-display text-4xl font-light md:text-5xl">
            Najczęstsze <span className="text-gold-gradient italic">pytania</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="font-display text-lg hover:text-primary transition-colors text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-40 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div ref={ref} className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="font-display text-4xl font-light md:text-6xl lg:text-7xl">
            Twoja historia zasługuje na{" "}
            <span className="text-gold-gradient italic">wieczność</span>
          </h2>
          <p className="mt-6 font-display text-sm text-muted-foreground md:text-base italic">
            Nie czekaj. Najlepsze dzieła sztuki rodzą się z odwagi.
          </p>
          <motion.a
            href="#rezerwacja"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 inline-block bg-gold-gradient px-12 py-5 font-body text-xs uppercase tracking-[0.2em] text-primary-foreground transition-all duration-500 hover:shadow-gold"
          >
            Zarezerwuj swój termin
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

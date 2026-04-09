import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const sizes = [
  { label: "Mały (do 5cm)", price: 300 },
  { label: "Średni (5-15cm)", price: 700 },
  { label: "Duży (15-30cm)", price: 1500 },
  { label: "XL (powyżej 30cm)", price: 3000 },
];

const bodyParts = [
  { label: "Przedramię", mod: 1.0 },
  { label: "Ramię", mod: 1.0 },
  { label: "Plecy", mod: 1.2 },
  { label: "Klatka piersiowa", mod: 1.2 },
  { label: "Żebra", mod: 1.4 },
  { label: "Szyja", mod: 1.5 },
  { label: "Dłoń", mod: 1.3 },
];

const tattooStyles = [
  { label: "Fineline", mod: 1.0 },
  { label: "Realizm", mod: 1.4 },
  { label: "Blackwork", mod: 1.1 },
  { label: "Japanese", mod: 1.3 },
  { label: "Neo-Traditional", mod: 1.2 },
];

const PriceCalculator = () => {
  const [size, setSize] = useState(0);
  const [body, setBody] = useState(0);
  const [style, setStyle] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const price = Math.round(sizes[size].price * bodyParts[body].mod * tattooStyles[style].mod);

  return (
    <section className="bg-section-alt py-32 px-6">
      <div ref={ref} className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="mb-4 font-body text-xs uppercase tracking-[0.3em] text-primary">Wycena</p>
          <h2 className="font-display text-4xl font-light md:text-5xl">
            Kalkulator <span className="text-gold-gradient italic">ceny</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Orientacyjna wycena. Dokładna cena ustalana jest na konsultacji.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 space-y-8"
        >
          <div>
            <label className="font-body text-xs uppercase tracking-widest text-muted-foreground">Rozmiar</label>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {sizes.map((s, i) => (
                <button
                  key={s.label}
                  onClick={() => setSize(i)}
                  className={`border px-4 py-3 text-sm transition-all duration-300 ${
                    i === size ? "border-primary text-primary" : "border-border text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="font-body text-xs uppercase tracking-widest text-muted-foreground">Miejsce na ciele</label>
            <div className="mt-3 flex flex-wrap gap-2">
              {bodyParts.map((b, i) => (
                <button
                  key={b.label}
                  onClick={() => setBody(i)}
                  className={`border px-4 py-2 text-sm transition-all duration-300 ${
                    i === body ? "border-primary text-primary" : "border-border text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="font-body text-xs uppercase tracking-widest text-muted-foreground">Styl</label>
            <div className="mt-3 flex flex-wrap gap-2">
              {tattooStyles.map((s, i) => (
                <button
                  key={s.label}
                  onClick={() => setStyle(i)}
                  className={`border px-4 py-2 text-sm transition-all duration-300 ${
                    i === style ? "border-primary text-primary" : "border-border text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="font-body text-xs uppercase tracking-widest text-muted-foreground">Szacunkowa cena od</p>
            <p className="mt-2 font-display text-5xl text-gold-gradient">{price} PLN</p>
            <a
              href="#rezerwacja"
              className="mt-6 inline-block border border-primary px-8 py-3 font-body text-xs uppercase tracking-widest text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              Umów konsultację
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PriceCalculator;

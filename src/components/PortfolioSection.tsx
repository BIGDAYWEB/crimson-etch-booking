import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import portfolioRealism from "@/assets/portfolio-realism.jpg";
import portfolioRealism2 from "@/assets/portfolio-realism-2.jpg";
import portfolioRealism3 from "@/assets/portfolio-realism-3.jpg";
import portfolioRealism4 from "@/assets/portfolio-realism-4.jpg";
import portfolioRealism5 from "@/assets/portfolio-realism-5.jpg";
import portfolioFineline from "@/assets/portfolio-fineline.jpg";
import portfolioFineline2 from "@/assets/portfolio-fineline-2.jpg";
import portfolioFineline3 from "@/assets/portfolio-fineline-3.jpg";
import portfolioFineline4 from "@/assets/portfolio-fineline-4.jpg";
import portfolioFineline5 from "@/assets/portfolio-fineline-5.jpg";
import portfolioBlackwork from "@/assets/portfolio-blackwork.jpg";
import portfolioBlackwork2 from "@/assets/portfolio-blackwork-2.jpg";
import portfolioBlackwork3 from "@/assets/portfolio-blackwork-3.jpg";
import portfolioBlackwork4 from "@/assets/portfolio-blackwork-4.jpg";
import portfolioBlackwork5 from "@/assets/portfolio-blackwork-5.jpg";
import portfolioJapanese from "@/assets/portfolio-japanese.jpg";
import portfolioJapanese2 from "@/assets/portfolio-japanese-2.jpg";
import portfolioJapanese3 from "@/assets/portfolio-japanese-3.jpg";
import portfolioJapanese4 from "@/assets/portfolio-japanese-4.jpg";
import portfolioJapanese5 from "@/assets/portfolio-japanese-5.jpg";
import portfolioNeo from "@/assets/portfolio-neo.jpg";
import portfolioNeo2 from "@/assets/portfolio-neo-2.jpg";
import portfolioNeo3 from "@/assets/portfolio-neo-3.jpg";
import portfolioNeo4 from "@/assets/portfolio-neo-4.jpg";
import portfolioNeo5 from "@/assets/portfolio-neo-5.jpg";

const styles = ["Wszystkie", "Realizm", "Fineline", "Blackwork", "Japanese", "Neo-Traditional"] as const;

const works = [
  { src: portfolioRealism, style: "Realizm", title: "Portret realistyczny" },
  { src: portfolioRealism2, style: "Realizm", title: "Portret czarno-szary" },
  { src: portfolioRealism3, style: "Realizm", title: "Lew – realizm" },
  { src: portfolioRealism4, style: "Realizm", title: "Oko – hiperrealizm" },
  { src: portfolioRealism5, style: "Realizm", title: "Wilk i księżyc" },
  { src: portfolioFineline, style: "Fineline", title: "Botanika fineline" },
  { src: portfolioFineline2, style: "Fineline", title: "Polne kwiaty" },
  { src: portfolioFineline3, style: "Fineline", title: "Motyl fineline" },
  { src: portfolioFineline4, style: "Fineline", title: "Księżyc i gwiazdy" },
  { src: portfolioFineline5, style: "Fineline", title: "Koliber fineline" },
  { src: portfolioBlackwork, style: "Blackwork", title: "Geometria blackwork" },
  { src: portfolioBlackwork2, style: "Blackwork", title: "Mandala blackwork" },
  { src: portfolioBlackwork3, style: "Blackwork", title: "Tribal sleeve" },
  { src: portfolioBlackwork4, style: "Blackwork", title: "Dotwork ornament" },
  { src: portfolioBlackwork5, style: "Blackwork", title: "Kruk blackwork" },
  { src: portfolioJapanese, style: "Japanese", title: "Koi Japanese" },
  { src: portfolioJapanese2, style: "Japanese", title: "Smok irezumi" },
  { src: portfolioJapanese3, style: "Japanese", title: "Sakura i fale" },
  { src: portfolioJapanese4, style: "Japanese", title: "Maska Hannya" },
  { src: portfolioJapanese5, style: "Japanese", title: "Feniks ognisty" },
  { src: portfolioNeo, style: "Neo-Traditional", title: "Neo-traditional roses" },
  { src: portfolioNeo2, style: "Neo-Traditional", title: "Kompas neo-trad" },
  { src: portfolioNeo3, style: "Neo-Traditional", title: "Orzeł neo-trad" },
  { src: portfolioNeo4, style: "Neo-Traditional", title: "Czaszka i piwonie" },
  { src: portfolioNeo5, style: "Neo-Traditional", title: "Wąż i sztylet" },
];

const PortfolioSection = () => {
  const [activeStyle, setActiveStyle] = useState<string>("Wszystkie");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = activeStyle === "Wszystkie" ? works : works.filter((w) => w.style === activeStyle);

  return (
    <section id="portfolio" className="py-32 px-6">
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="mb-4 font-body text-xs uppercase tracking-[0.3em] text-primary">Portfolio</p>
          <h2 className="font-display text-4xl font-light md:text-5xl lg:text-6xl">
            Nasze <span className="text-gold-gradient italic">dzieła</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {styles.map((s) => (
            <button
              key={s}
              onClick={() => setActiveStyle(s)}
              className={`font-body text-xs uppercase tracking-widest px-5 py-2 border transition-all duration-300 ${
                activeStyle === s
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {s}
            </button>
          ))}
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((work, i) => (
            <motion.div
              key={work.title + i}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative aspect-square overflow-hidden"
            >
              <img
                src={work.src}
                alt={work.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-body text-xs uppercase tracking-widest text-primary">{work.style}</p>
                <p className="mt-1 font-display text-xl">{work.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import portfolioRealism from "@/assets/portfolio-realism.jpg";
import portfolioRealism2 from "@/assets/portfolio-realism-2.jpg";
import portfolioFineline from "@/assets/portfolio-fineline.jpg";
import portfolioBlackwork from "@/assets/portfolio-blackwork.jpg";
import portfolioJapanese from "@/assets/portfolio-japanese.jpg";
import portfolioNeo from "@/assets/portfolio-neo.jpg";

const styles = ["Wszystkie", "Realizm", "Fineline", "Blackwork", "Japanese", "Neo-Traditional"] as const;

const works = [
  { src: portfolioRealism, style: "Realizm", title: "Portret realistyczny" },
  { src: portfolioFineline, style: "Fineline", title: "Botanika fineline" },
  { src: portfolioBlackwork, style: "Blackwork", title: "Geometria blackwork" },
  { src: portfolioJapanese, style: "Japanese", title: "Koi Japanese" },
  { src: portfolioNeo, style: "Neo-Traditional", title: "Neo-traditional roses" },
  { src: portfolioRealism2, style: "Realizm", title: "Portret czarno-szary" },
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

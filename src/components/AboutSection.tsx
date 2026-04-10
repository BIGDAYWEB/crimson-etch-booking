import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="o-nas" className="bg-section-alt py-32 px-6">
      <div ref={ref} className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 font-body text-xs uppercase tracking-[0.3em] text-primary">
            O Studiu
          </p>
          <h2 className="font-display text-4xl font-light md:text-5xl lg:text-6xl">
            Gdzie pasja spotyka{" "}
            <span className="text-gold-gradient italic">precyzję</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 space-y-6 text-muted-foreground"
        >
          <p className="font-body text-base leading-relaxed md:text-lg">
            Nie jesteśmy zwykłym studiem tatuażu. Jesteśmy kolektywem artystów,
            którzy traktują skórę jak płótno, a tusz jak medium artystyczne.
            Każdy projekt to indywidualna podróż — od pierwszej konsultacji po
            ostatni detal.
          </p>
          <p className="font-body text-base leading-relaxed md:text-lg">
            Ponad 15 lat doświadczenia. Tysiące zadowolonych klientów.
            Jedno niezmienne kredo: <span className="text-foreground font-medium">perfekcja w każdym detalu</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-8"
        >
          {[
            { num: "12+", label: "Lat doświadczenia" },
            { num: "3500+", label: "Wykonanych tatuaży" },
            { num: "100%", label: "Zadowolonych klientów" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl text-primary md:text-4xl">{stat.num}</p>
              <p className="mt-2 font-body text-xs uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

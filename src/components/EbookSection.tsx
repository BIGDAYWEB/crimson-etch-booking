import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download } from "lucide-react";
import ebookCover from "@/assets/ebook-cover.png";

const EBOOK_URL = "/ebook-pierwszy-tatuaz.pdf";

const EbookSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ebook" className="bg-section-alt py-32 px-6 overflow-hidden">
      <div ref={ref} className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* 3D Ebook Cover */}
          <motion.div
            initial={{ opacity: 0, x: -60, rotateY: 15 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex-shrink-0"
          >
            <div className="relative group cursor-pointer" style={{ perspective: "800px" }}>
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src={ebookCover}
                  alt="E-book: Najczęstsze błędy przy pierwszym tatuażu"
                  loading="lazy"
                  width={320}
                  height={400}
                  className="w-64 md:w-72 lg:w-80 drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
                {/* Golden glow underneath */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-8 bg-primary/20 blur-2xl rounded-full transition-all duration-500 group-hover:w-56 group-hover:bg-primary/30" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center lg:text-left"
          >
            <p className="mb-4 font-body text-xs uppercase tracking-[0.3em] text-primary">
              Darmowy E-book
            </p>
            <h2 className="font-display text-3xl font-light md:text-4xl lg:text-5xl leading-tight">
              Najczęstsze błędy przy pierwszym tatuażu
              <br />
              <span className="text-gold-gradient italic">(i jak ich uniknąć)</span>
            </h2>
            <p className="mt-6 font-body text-base text-muted-foreground leading-relaxed max-w-lg">
              Poznaj sekrety, które pomogą Ci uniknąć najczęstszych pułapek.
              Dowiedz się, jak wybrać idealnego tatuatora, przygotować się do sesji
              i zadbać o tatuaż, by wyglądał perfekcyjnie przez lata.
            </p>

            <motion.a
              href={EBOOK_URL}
              download="Najczestsze-bledy-przy-pierwszym-tatuazu.pdf"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 inline-flex items-center gap-3 bg-primary px-8 py-4 font-body text-xs uppercase tracking-[0.2em] text-primary-foreground transition-all duration-500 hover:scale-105 shadow-[0_0_25px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.7)]"
            >
              <Download size={18} />
              Pobierz za darmo
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EbookSection;

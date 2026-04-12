import { motion } from "framer-motion";
import heroImg from "@/assets/hero-tattoo.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Tatuaż wykonywany w studiu"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 font-body text-base md:text-lg uppercase tracking-[0.3em] text-primary"
        >
          Luksusowe Studio Tatuażu
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-5xl font-light leading-tight tracking-wide md:text-7xl lg:text-8xl"
        >
          Sztuka, która zostaje
          <br />
          <span className="text-gold-gradient font-medium italic">na zawsze</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 max-w-2xl font-display text-lg md:text-2xl lg:text-3xl text-foreground/70 italic"
        >
          Każdy tatuaż to unikalna historia wyryta w skórze.
          <br />
          Tworzymy dzieła, które definiują Twoją tożsamość.
        </motion.p>

        <motion.a
          href="#rezerwacja"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 border-2 border-primary px-10 py-4 font-body text-sm uppercase tracking-[0.2em] text-primary transition-all duration-500 hover:bg-primary hover:text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)]"
        >
          Umów się na sesję
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;

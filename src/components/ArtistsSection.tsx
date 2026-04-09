import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import artist1 from "@/assets/artist-1.jpg";
import artist2 from "@/assets/artist-2.jpg";
import artist3 from "@/assets/artist-3.jpg";

const artists = [
  {
    name: "Damian Kruk",
    specialty: "Realizm & Portrety",
    bio: "Mistrz światłocienia. 12 lat doświadczenia w hiperrealizmie. Każdy portret to żywa fotografia w tuszu.",
    img: artist1,
  },
  {
    name: "Maya Noir",
    specialty: "Neo-Traditional & Color",
    bio: "Łączy klasykę z nowoczesnością. Jej prace pulsują kolorem i energią. Artystka znana na międzynarodowych konwentach.",
    img: artist2,
  },
  {
    name: "Viktor Shade",
    specialty: "Blackwork & Geometria",
    bio: "Precyzja chirurgiczna. Projektuje skomplikowane wzory geometryczne i ornamentalne, które hipnotyzują szczegółami.",
    img: artist3,
  },
];

const ArtistsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="artyści" className="bg-section-alt py-32 px-6">
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="mb-4 font-body text-xs uppercase tracking-[0.3em] text-primary">Nasz Zespół</p>
          <h2 className="font-display text-4xl font-light md:text-5xl lg:text-6xl">
            Poznaj <span className="text-gold-gradient italic">artystów</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {artists.map((artist, i) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={artist.img}
                  alt={artist.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              <div className="mt-6">
                <h3 className="font-display text-2xl">{artist.name}</h3>
                <p className="mt-1 font-body text-xs uppercase tracking-widest text-primary">
                  {artist.specialty}
                </p>
                <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                  {artist.bio}
                </p>
                <a
                  href="#rezerwacja"
                  className="mt-4 inline-block font-body text-xs uppercase tracking-widest text-primary transition-all duration-300 hover:tracking-[0.25em]"
                >
                  Umów wizytę →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistsSection;

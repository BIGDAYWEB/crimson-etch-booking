import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Anna K.",
    text: "Absolutnie magiczne doświadczenie. Od konsultacji po finalny efekt — wszystko na najwyższym poziomie. Damian stworzył tatuaż, który jest dziełem sztuki.",
    rating: 5,
  },
  {
    name: "Marcin W.",
    text: "Profesjonalizm, którego nie spotkałem nigdzie indziej. Atmosfera studia jest niezwykła — czujesz się jak VIP od pierwszej chwili. Polecam Maya Noir!",
    rating: 5,
  },
  {
    name: "Katarzyna D.",
    text: "Trzeci tatuaż w tym studiu i nigdy nie byłam zawiedziona. Higiena, podejście do klienta, efekt końcowy — perfekcja. Viktor to geniusz geometrii.",
    rating: 5,
  },
  {
    name: "Tomasz P.",
    text: "Szukałem studia, które potraktuje mój pomysł poważnie. Tutaj nie tylko go zrealizowali — przenieśli na wyższy poziom. Efekt WOW gwarantowany.",
    rating: 5,
  },
];

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));

  return (
    <section className="py-32 px-6">
      <div ref={ref} className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 font-body text-xs uppercase tracking-[0.3em] text-primary">Opinie</p>
          <h2 className="font-display text-4xl font-light md:text-5xl">
            Co mówią nasi <span className="text-gold-gradient italic">klienci</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <div className="min-h-[200px]">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: reviews[current].rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="font-display text-xl italic leading-relaxed text-foreground md:text-2xl">
              &ldquo;{reviews[current].text}&rdquo;
            </p>
            <p className="mt-6 font-body text-sm uppercase tracking-widest text-muted-foreground">
              — {reviews[current].name}
            </p>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button onClick={prev} className="text-muted-foreground transition-colors hover:text-primary">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-primary" : "w-4 bg-muted"
                  }`}
                />
              ))}
            </div>
            <button onClick={next} className="text-muted-foreground transition-colors hover:text-primary">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;

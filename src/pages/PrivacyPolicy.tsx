import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-background py-32 px-6">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Powrót
        </Link>

        <h1 className="mt-10 font-display text-4xl font-light md:text-5xl lg:text-6xl">
          Polityka <span className="text-gold-gradient italic">Prywatności</span>
        </h1>
        <p className="mt-4 font-body text-sm text-muted-foreground">Data aktualizacji: 6 lipca 2026 r.</p>

        <div className="mt-12 space-y-10 font-body text-foreground/90 leading-relaxed">
          <section>
            <h2 className="font-display text-2xl text-primary">1. Informacje ogólne</h2>
            <p className="mt-3">
              Niniejsza Polityka Prywatności określa zasady przetwarzania danych osobowych przekazywanych za pośrednictwem formularza kontaktowego dostępnego na stronie internetowej Ink Alchemy.
            </p>
            <p className="mt-2">Strona została przygotowana wyłącznie w celach edukacyjnych i testowych.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-primary">2. Administrator danych</h2>
            <p className="mt-3">Administratorem danych jest właściciel strony Ink Alchemy.</p>
            <p className="mt-2">W przypadku pytań dotyczących przetwarzania danych można skontaktować się za pośrednictwem formularza kontaktowego.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-primary">3. Jakie dane są zbierane</h2>
            <p className="mt-3">Za pomocą formularza kontaktowego mogą być zbierane następujące dane:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-muted-foreground">
              <li>imię i nazwisko,</li>
              <li>adres e-mail,</li>
              <li>numer telefonu (opcjonalnie),</li>
              <li>treść wiadomości.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-primary">4. Cel przetwarzania danych</h2>
            <p className="mt-3">Dane są wykorzystywane wyłącznie w celu udzielenia odpowiedzi na przesłaną wiadomość oraz kontaktu z osobą wysyłającą formularz.</p>
            <p className="mt-2">Dane nie są wykorzystywane do celów marketingowych.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-primary">5. Przechowywanie danych</h2>
            <p className="mt-3">Dane przesłane za pomocą formularza są zapisywane w bazie danych Supabase wyłącznie na potrzeby działania formularza kontaktowego.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-primary">6. Udostępnianie danych</h2>
            <p className="mt-3">Dane nie są sprzedawane ani przekazywane osobom trzecim, z wyjątkiem podmiotów świadczących usługi niezbędne do działania strony.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-primary">7. Prawa użytkownika</h2>
            <p className="mt-3">Każda osoba ma prawo do dostępu do swoich danych, ich poprawienia, usunięcia, ograniczenia przetwarzania oraz wniesienia sprzeciwu wobec przetwarzania.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-primary">8. Pliki cookies</h2>
            <p className="mt-3">Strona może wykorzystywać pliki cookies niezbędne do jej prawidłowego działania.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-primary">9. Zmiany Polityki Prywatności</h2>
            <p className="mt-3">Polityka Prywatności może być aktualizowana w przypadku zmian funkcjonalności strony.</p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
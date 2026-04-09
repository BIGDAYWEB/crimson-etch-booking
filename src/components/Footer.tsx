const Footer = () => (
  <footer className="border-t border-border py-12 px-6">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
      <a href="#" className="font-display text-xl tracking-wider text-gold-gradient">
        INK ALCHEMY
      </a>
      <p className="font-body text-xs text-muted-foreground">
        © 2026 Ink Alchemy Studio. Wszelkie prawa zastrzeżone.
      </p>
      <div className="flex gap-6">
        <a href="#" className="font-body text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Instagram</a>
        <a href="#" className="font-body text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Facebook</a>
      </div>
    </div>
  </footer>
);

export default Footer;

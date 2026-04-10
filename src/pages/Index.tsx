import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ArtistsSection from "@/components/ArtistsSection";
import ReviewsSection from "@/components/ReviewsSection";
import PriceCalculator from "@/components/PriceCalculator";
import FAQSection from "@/components/FAQSection";
import EbookSection from "@/components/EbookSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="bg-background min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <PortfolioSection />
    <ArtistsSection />
    <ReviewsSection />
    <PriceCalculator />
    <FAQSection />
    <EbookSection />
    <ContactSection />
    <CTASection />
    <Footer />
  </main>
);

export default Index;

import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ProductSection />
      <AboutSection />
      <FooterSection />
    </div>
  )
}
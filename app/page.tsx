import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandCarousel from "@/components/BrandCarousel";
import Services from "@/components/Services";
import NeedRepair from "@/components/NeedRepair";
import HowItWorks from "@/components/HowItWorks";
import StatsBanner from "@/components/StatsBanner";
import Testimonials from "@/components/Testimonials";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <BrandCarousel />
      <Services />
      <NeedRepair />
      <HowItWorks />
      <StatsBanner />
      <Testimonials />
      <BookingCTA />
      <Footer />
    </main>
  );
}

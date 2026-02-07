import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import AboutUs from "@/components/AboutUs";
import ProductSpecs from "@/components/ProductSpecs";
import Markets from "@/components/Markets";
import ProcessSection from "@/components/ProcessSection";
import Certifications from "@/components/Certifications";
import TestimonialSection from "@/components/TestimonialSection";
import InstagramSection from "@/components/InstagramSection";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutUs />
      <ProductSpecs />
      <Markets />
      <ProcessSection />
      <Certifications />
      <TestimonialSection />
      <InstagramSection />
      <FAQSection />
      <CTASection />
      <ContactForm />
    </>
  );
}

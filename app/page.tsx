import IntroSplash from "@/components/IntroSplash";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import ProductSpecs from "@/components/ProductSpecs";
import Markets from "@/components/Markets";
import Certifications from "@/components/Certifications";
import TestimonialSection from "@/components/TestimonialSection";
import InstagramSection from "@/components/InstagramSection";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <IntroSplash />
      <Hero />
      <AboutUs />
      <Certifications />
      <ProductSpecs />
      <Markets />
      <TestimonialSection />
      <InstagramSection />
      <FAQSection />
      <CTASection />
      <ContactForm />
    </>
  );
}

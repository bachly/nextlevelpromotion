import Contact from "@/components/cards/contact";
import FeaturesCards from "@/components/cards/FeaturesCards";
import ProductPreview from "@/components/cards/ProductPreview";
import FAQSection from "@/components/faq";
import Features from "@/components/features";
import Grids from "@/components/grids";
import Header from "@/components/header";
import { Hero } from "@/components/hero";
import GetQuotes from "@/components/get-quotes";
import { Container } from "@/components/container";

export default function Home() {
  return (
    <div>
      <Hero />

      <Features />
      <FeaturesCards />

      <div className="py-12"></div>

      <Header
        badge="Products"
        title="Features that will make your life easier"
        subtitle="Streamline your hiring process with powerful tools for sourcing,
          evaluating, and onboarding top talent - all in one platform."
      />

      <Grids />

      <FAQSection />

    </div>
  );
}

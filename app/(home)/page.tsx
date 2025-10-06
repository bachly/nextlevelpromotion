import FeatureGrid from "@/components/cards/FeatureGrid";
import FAQSection from "@/components/faq";
import Grids from "@/components/grids";
import Header from "@/components/header";
import { Hero } from "@/components/hero";
import CTASection from "@/components/cta-section";

export default function Home() {
  return (
    <div>
      <Hero />

      <div id="about" className="scroll-mt-24">
        <Header
          eyebrow="Who are we?"
          title="Premium, Personalised & Stress-Free"
          titleSecondary="Promotional Solutions"
          subtitle="Next Level Promotion is a boutique print studio based in Sydney, specialising in high-quality, custom-branded materials for small businesses, events, and growing brands. Since 2017, our passionate team has been helping Aussie companies make memorable first impressions with professionally printed products that stand out and tell their story."
        />
      </div>

      <FeatureGrid />

      <div className="py-12"></div>

      <div id="products" className="px-2 scroll-mt-24">
        <Header
          eyebrow="Explore our full range"
          title="Premium Printing Products"
          titleSecondary="Tailored for Your Business"
          subtitle="From everyday essentials to standout custom pieces, we print everything you need to promote, showcase, and grow your brand."
        />

        <Grids />
      </div>

      <div className="py-12"></div>

      <Header
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        subtitle="Find everything you need to know about our printing services. Not sure, ask us anything!"
      />

      <FAQSection />

      <div className="py-12"></div>

      <CTASection />

    </div>
  );
}

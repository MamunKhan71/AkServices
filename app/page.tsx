import HeroSlider from "@/app/(homepage)/Slider";
import Testimonials from "./(homepage)/ClientReview";
import ContactSection from "./(homepage)/ContactUs";
import Features from "./(homepage)/Features";
import OurFeatures from "./(homepage)/OurFeatures";
import PortfolioSection from "./(homepage)/OurPortfolio";
import OurServices from "./(homepage)/OurServices";

export default function Home() {
  return (
    <div >
      <div className='w-full h-screen'>
        <HeroSlider />
      </div>
      <OurServices />
      <OurFeatures />
      <Features />
      <PortfolioSection />
      <Testimonials />
      <ContactSection />
    </div>
  );
}

import HeroSlider from "@/app/(homepage)/Slider";
import OurServices from "./(homepage)/OurServices";
import Features from "./(homepage)/Features";
import OurFeatures from "./(homepage)/OurFeatures";
import PortfolioSection from "./(homepage)/OurPortfolio";
import ContactSection from "./(homepage)/ContactUs";

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
      <ContactSection />
    </div>
  );
}

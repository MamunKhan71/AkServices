import HeroSlider from "@/app/(homepage)/Slider";
import OurServices from "./(homepage)/OurServices";
import Features from "./(homepage)/Features";
import OurFeatures from "./(homepage)/OurFeatures";

export default function Home() {
  return (
    <div >
      <div className='w-full h-screen'>
        <HeroSlider />
      </div>
      <OurServices />
      <OurFeatures />
      <Features />
    </div>
  );
}

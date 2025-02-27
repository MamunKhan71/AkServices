import HeroSlider from "@/app/(homepage)/Slider";
import OurServices from "./(homepage)/OurServices";
import Features from "./(homepage)/Features";

export default function Home() {
  return (
    <div >
      <div className='w-full h-screen'>
        <HeroSlider />
      </div>
      <OurServices />
      <Features />
    </div>
  );
}

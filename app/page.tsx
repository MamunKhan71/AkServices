import HeroSlider from "@/components/ui/Slider";
import OurServices from "./(homepage)/OurServices";

export default function Home() {
  return (
    <div >
      <div className='w-full h-screen'>
        <HeroSlider />
      </div>
      <OurServices />
    </div>
  );
}

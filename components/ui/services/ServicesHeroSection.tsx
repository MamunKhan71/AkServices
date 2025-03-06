import { Button } from "@/components/ui/button";
import Image from "next/image";

type HeroSectionProps = {
    title: string;
    description: string;
    backgroundImage: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    description,
    backgroundImage,
    primaryButtonText,
    primaryButtonLink,
    secondaryButtonText,
    secondaryButtonLink
}) => {
    return (
        <section className="relative h-[500px] overflow-hidden mt-12">
            <Image
                src={backgroundImage}
                alt={title}
                width={2000}
                height={1000}
                className="absolute inset-0 h-full w-full object-cover"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
            <div className="container mx-auto relative flex h-full flex-col items-start justify-center px-4 md:px-16">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-wide text-white md:text-5xl lg:text-6xl">
                        {title}
                    </h1>
                    <p className="mt-4 max-w-md text-lg text-zinc-200">
                        {description}
                    </p>
                    <div className="mt-8 flex gap-4">
                        <a href={primaryButtonLink}>
                            <Button className="bg-blue-600 hover:bg-blue-700">
                                {primaryButtonText}
                            </Button>
                        </a>
                        <a href={secondaryButtonLink}>
                            <Button variant="outline" className="border-white text-black hover:bg-white/10">
                                {secondaryButtonText}
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
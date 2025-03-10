import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface ContactHeaderProps {
  title: string;
  description: string;
  imageUrl: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

const ContactHeader: React.FC<ContactHeaderProps> = ({
  title,
  description,
  imageUrl,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}) => {
  return (
    <section className="relative pt-16 h-[40vh] md:h-[30vh] overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12 z-50">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-white text-lg mb-8">{description}</p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-green-600 hover:bg-green-700">
              <Link href={primaryButtonLink}>{primaryButtonText}</Link>
            </Button>
            <Button variant="outline" className="bg-white text-black hover:bg-gray-100">
              <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;

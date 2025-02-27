import ComponentHeader from "@/components/ComponentHeader";
import { ArrowRight, Droplet, Layers, Shield } from "lucide-react";
import Image from "next/image";
import React from "react";

const services = [
    {
        image: "/glass-interior.jpg",
        title: "Glass Studio Services",
        description:
            "Premium glass solutions for modern spaces, including custom installations, partitions, and architectural glass features. Our expert craftsmen deliver precision and elegance for both residential and commercial projects.",
        icon: <Layers className="text-white w-5 h-5" />,
        company: "Ak Contractor Service Glass Studio",
    },
    {
        image: "/canopy-roofing.jpg",
        title: "Canopy Roofing Service",
        description:
            "Stylish, durable glass roofing solutions for outdoor spaces. Enhance your property with custom, weather-resistant canopies that offer both functionality and elegance, designed to withstand the elements while elevating aesthetics.",
        icon: <Shield className="text-white w-5 h-5" />,
        company: "Ak Contractor Service Canopy Glass",
    },
    {
        image: "/plumbing.jpg",
        title: "Plumbing Service",
        description:
            "Reliable, expert plumbing solutions for residential and commercial needs. From installations to repairs, our skilled team ensures efficient and effective service with attention to detail and quality craftsmanship.",
        icon: <Droplet className="text-white w-5 h-5" />,
        company: "Ak Contractor Service Plumbing",
    },
];

interface ServiceCardProps {
    image: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    company: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description, icon, company }) => (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-100">
        <div className="relative h-64 overflow-hidden">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4">
                <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center">
                        {icon}
                    </div>
                    <h4 className="text-white font-bold text-xl ml-3">{title}</h4>
                </div>
            </div>
        </div>
        <div className="p-6">
            <p className="text-neutral-600 mb-6 text-justify line-clamp-4">{description}</p>
            <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-neutral-500">{company}</span>
                <button className="flex items-center gap-2 text-red-600 font-medium group-hover:gap-3 transition-all">
                    Explore Service <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    </div>
);

const OurFeatures = () => {
    return (
        <div className="container mx-auto">
            <ComponentHeader title="What we do" subtitle="Comprehensive interior design and renovation solutions for every space" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </div>
    );
};

export default OurFeatures;

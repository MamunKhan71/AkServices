export interface ServiceSection {
    title: string;
    description: string;
    image?: string;
}

export interface ServiceListData {
    title: string;
    services: string[];
}

export interface ServiceData {
    heroTitle: string;
    heroDescription: string;
    heroImage: string;
    serviceLists: ServiceListData[];
    sections: ServiceSection[];
    mainImage?: string;
}

export interface ServicePageProps {
    serviceData: ServiceData;
}
export const glassServicesData: ServiceData = {
    heroTitle: "Glass Studio Service",
    heroDescription: "Innovative glass solutions with meticulous craftsmanship for residential and commercial spaces.",
    heroImage: "/custom-glass.jpg",
    serviceLists: [
        {
            title: "Glass Services",
            services: ["Custom Glass Design", "Glass Partitions", "Shower Enclosures"]
        },
        {
            title: "Canopy Glass Services",
            services: ["Glass Roofing", "Skylight Installation"]
        }
    ],
    sections: [
        {
            title: "Custom Glass Design",
            description: "Our Glass Studio provides bespoke design services, crafting unique glass features...",
            image: "/custom-glass.jpg"
        },
        {
            title: "Flawless Glass Installations",
            description: "Each project is executed with meticulous attention to detail and high-quality materials."
        }
    ],
    mainImage: "/custom-glass.jpg"
};

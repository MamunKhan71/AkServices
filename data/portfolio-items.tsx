import { Building, Code, Compass, Layers, PenTool } from "lucide-react"

export type ProjectCategory = "web" | "design" | "architecture" | "interior" | "branding" | "plumbing" | "electrical" | "handyman" | "renovation" | "glass-work" | "painting" | "flooring" | "contracting"

export interface Project {
    id: string
    title: string
    description: string
    category: ProjectCategory
    image: string
    link?: string
    year: string
    client: string
}

// Sample project data
export const projects: Project[] = [
    {
        id: "p1",
        title: "Modern Glass Partition",
        description:
            "A sleek corporate headquarters with floor-to-ceiling glass walls that maximize natural light and create an open, collaborative environment.",
        category: "glass-work",
        image: "/portfolio/modern-glass.jpeg",
        link: "/projects/modern-glass-office",
        year: "2023",
        client: "TechVision Corp",
    },
    {
        id: "p2",
        title: "Minimalist Staircase",
        description:
            "Floating glass staircase design that creates a stunning visual centerpiece while maintaining an airy, open feel throughout the space.",
        category: "renovation",
        image: "/portfolio/staircase.jpg",
        link: "/projects/minimalist-staircase",
        year: "2022",
        client: "Luxury Homes Inc.",
    },
    {
        id: "p3",
        title: "Frosted Glass Door with Fix panel",
        description:
            "Custom frosted glass partitions that provide privacy while allowing light to flow through office spaces.",
        category: "glass-work",
        image: "/portfolio/frosted-glass.avif",
        link: "/projects/frosted-glass-partition",
        year: "2023",
        client: "Creative Studios",
    },
    {
        id: "p4",
        title: "Canopy Entrance",
        description:
            "Weather-resistant glass canopy that creates a striking entrance while providing protection from the elements.",
        category: "architecture",
        image: "/portfolio/canopy-entrance.jpg",
        link: "/projects/canopy-entrance",
        year: "2022",
        client: "Metro Hotel Group",
    },
    {
        id: "p5",
        title: "Bathroom Renovation",
        description: "Luxury bathroom redesign featuring frameless glass shower enclosures and modern fixtures.",
        category: "renovation",
        image: "/portfolio/bathroom-renovation.jpeg",
        link: "/projects/bathroom-renovation",
        year: "2023",
        client: "Residential Client",
    },
    {
        id: "p6",
        title: "Kitchen Back Glass",
        description: "Sleek kitchen back glass for a modern, easy-to-clean, and stylish finish.",
        category: "glass-work",
        image: "/portfolio/kitchen-glass-splashback.jpg",
        link: "/projects/corporate-identity",
        year: "2022",
        client: "Fusion Enterprises",
    },
    {
        id: "p7",
        title: "Kitchen Back Color Glass",
        description: "Color back glass for kitchens, adding a sleek, modern touch in your cooking space.",
        category: "glass-work",
        image: "/portfolio/kitchen-glass.jpg",
        link: "/projects/corporate-identity",
        year: "2022",
        client: "Fusion Enterprises",
    },
    {
        id: "p8",
        title: "Soft Closing sliding Glass Door",
        description: "Expert plumbing services, ensuring reliable, efficient solutions for all of your residential and commercial needs.",
        category: "glass-work",
        image: "/portfolio/sliding door.avif",
        link: "/projects/corporate-identity",
        year: "2022",
        client: "Fusion Enterprises",
    },
    {
        id: "p9",
        title: "Shower Screen Glass",
        description: "High-quality shower screens, custom-fitted, offering durability and modern design.",
        category: "glass-work",
        image: "/portfolio/shower glass.webp",
        link: "/projects/corporate-identity",
        year: "2022",
        client: "Fusion Enterprises",
    },
    {
        id: "p10",
        title: "Glass Wall Installation",
        description: "Elegant glass wall partitions designed for modern office and residential spaces.",
        category: "glass-work",
        image: "/portfolio/glass-wall.jpg",
        link: "/projects/glass-wall",
        year: "2024",
        client: "Urban Spaces Ltd.",
    },
    {
        id: "p11",
        title: "Glass Canopy Installation",
        description: "Durable and stylish glass canopy for building entrances, providing weather protection.",
        category: "glass-work",
        image: "/portfolio/glass-canopy.jpg",
        link: "/projects/glass-canopy",
        year: "2024",
        client: "Skyline Towers",
    },
    {
        id: "p12",
        title: "Metal Canopy Construction",
        description: "Robust metal canopy solutions for commercial and residential properties.",
        category: "contracting",
        image: "/portfolio/metal-canopy.jpg",
        link: "/projects/metal-canopy",
        year: "2024",
        client: "Industrial Solutions Ltd.",
    },
    {
        id: "p13",
        title: "Polycarbonate Canopy",
        description: "Lightweight and weather-resistant polycarbonate canopy installations.",
        category: "contracting",
        image: "/portfolio/polycarbonate-canopy.jpg",
        link: "/projects/polycarbonate-canopy",
        year: "2024",
        client: "EcoBuild Inc.",
    },
    {
        id: "p14",
        title: "Plumbing Service",
        description: "Professional plumbing solutions for residential and commercial spaces.",
        category: "plumbing",
        image: "/portfolio/plumbing-service.jpg",
        link: "/projects/plumbing-service",
        year: "2024",
        client: "Reliable Plumbing Co.",
    },
    {
        id: "p15",
        title: "Water Heater Installation",
        description: "Efficient and reliable water heater installations for homes and businesses.",
        category: "plumbing",
        image: "/portfolio/water-heater.jpg",
        link: "/projects/water-heater",
        year: "2024",
        client: "Home Comfort Ltd.",
    },
    {
        id: "p16",
        title: "Electric Switch Installation",
        description: "Safe and high-quality electric switch installations for modern homes.",
        category: "electrical",
        image: "/portfolio/electric-switch.jpg",
        link: "/projects/electric-switch",
        year: "2024",
        client: "PowerTech Solutions",
    },
    {
        id: "p17",
        title: "Handyman Services",
        description: "Reliable handyman services for home repairs and maintenance.",
        category: "handyman",
        image: "/portfolio/handyman-service.jpg",
        link: "/projects/handyman-service",
        year: "2024",
        client: "FixIt Professionals",
    },
    {
        id: "p18",
        title: "Home & Office Renovation",
        description: "Complete renovation solutions for homes and office spaces.",
        category: "renovation",
        image: "/portfolio/renovation-service.jpg",
        link: "/projects/renovation-service",
        year: "2024",
        client: "Urban Renovators Ltd.",
    },
]

// Category icons mapping
export const categoryIcons = {
    web: <Code className="w-4 h-4" />,
    design: <PenTool className="w-4 h-4" />,
    architecture: <Building className="w-4 h-4" />,
    interior: <Compass className="w-4 h-4" />,
    branding: <Layers className="w-4 h-4" />,
}

// Filter categories
export const categories: { value: ProjectCategory | "all"; label: string }[] = [
    { value: "all", label: "All Projects" },
    { value: "plumbing", label: "Plumbing" },
    { value: "electrical", label: "Electrical" },
    { value: "handyman", label: "Handyman" },
    { value: "renovation", label: "Renovation" },
    { value: "glass-work", label: "Glass Work" },
    { value: "painting", label: "Painting" },
    { value: "flooring", label: "Flooring" },
    { value: "contracting", label: "Contracting" },
];

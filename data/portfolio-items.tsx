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
        category: "architecture",
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
        category: "interior",
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
        category: "interior",
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
        category: "interior",
        image: "/portfolio/bathroom-renovation.jpeg",
        link: "/projects/bathroom-renovation",
        year: "2023",
        client: "Residential Client",
    },
    {
        id: "p6",
        title: "Kitchen Back Glass",
        description: "Sleek kitchen back glass for a modern, easy-to-clean, and stylish finish.",
        category: "branding",
        image: "/portfolio/kitchen-glass-splashback.jpg",
        link: "/projects/corporate-identity",
        year: "2022",
        client: "Fusion Enterprises",
    },
    {
        id: "p7",
        title: "Kitchen Back Color Glass",
        description: "Color back glass for kitchens, adding a sleek, modern touch in your cooking space.",
        category: "branding",
        image: "/portfolio/kitchen-glass.jpg",
        link: "/projects/corporate-identity",
        year: "2022",
        client: "Fusion Enterprises",
    },
    {
        id: "p8",
        title: "Soft Closing sliding Glass Door",
        description: "Expert plumbing services, ensuring reliable, efficient solutions for all of your residential and commercial needs.",
        category: "branding",
        image: "/portfolio/sliding door.avif",
        link: "/projects/corporate-identity",
        year: "2022",
        client: "Fusion Enterprises",
    },
    {
        id: "p9",
        title: "Shower Screen Glass",
        description: "High-quality shower screens, custom-fitted, offering durability and modern design.",
        category: "branding",
        image: "/portfolio/shower glass.webp",
        link: "/projects/corporate-identity",
        year: "2022",
        client: "Fusion Enterprises",
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

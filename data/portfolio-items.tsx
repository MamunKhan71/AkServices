import { Building, Code, Compass, Layers, PenTool } from "lucide-react"

export type ProjectCategory = "web" | "design" | "architecture" | "interior" | "branding"

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
        title: "Modern Glass Office",
        description:
            "A sleek corporate headquarters with floor-to-ceiling glass walls that maximize natural light and create an open, collaborative environment.",
        category: "architecture",
        image: "/",
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
        image: "/placeholder.svg?height=600&width=800",
        link: "/projects/minimalist-staircase",
        year: "2022",
        client: "Luxury Homes Inc.",
    },
    {
        id: "p3",
        title: "Frosted Glass Partition",
        description:
            "Custom frosted glass partitions that provide privacy while allowing light to flow through office spaces.",
        category: "interior",
        image: "/placeholder.svg?height=800&width=600",
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
        image: "/placeholder.svg?height=500&width=900",
        link: "/projects/canopy-entrance",
        year: "2022",
        client: "Metro Hotel Group",
    },
    {
        id: "p5",
        title: "Bathroom Renovation",
        description: "Luxury bathroom redesign featuring frameless glass shower enclosures and modern fixtures.",
        category: "interior",
        image: "/placeholder.svg?height=600&width=600",
        link: "/projects/bathroom-renovation",
        year: "2023",
        client: "Residential Client",
    },
    {
        id: "p6",
        title: "Corporate Identity",
        description: "Complete brand identity system including logo, typography, and visual guidelines.",
        category: "branding",
        image: "/placeholder.svg?height=600&width=600",
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
    { value: "architecture", label: "Architecture" },
    { value: "interior", label: "Interior Design" },
    { value: "branding", label: "Branding" },
    { value: "web", label: "Web Development" },
    { value: "design", label: "Graphic Design" },
]

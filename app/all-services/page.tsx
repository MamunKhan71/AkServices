import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ContactHeader from "@/components/contact-header"

const services = [
    {
        title: "Glass Studio Service",
        items: [
            { name: "Frosted Glass Door with Fix Panel", icon: "🚪" },
            { name: "Shop Front Glass Door", icon: "🏪" },
            { name: "Glass Pattison Shopping mall and Any Office", icon: "🏢" },
            { name: "Kitchen Color Back Flash Glass", icon: "🔧" },
            { name: "Custom Glass work Design & Installation", icon: "✨" },
        ],
    },
    {
        title: "Glass Studio Service 2",
        items: [
            { name: "Soft Closing Sliding Glass Door", icon: "🚪" },
            { name: "Slidin, Swing, Shower Skin Door Installation", icon: "🚿" },
            { name: "Staircase Railing Glass", icon: "📶" },
            { name: "Toilet Shower Screen", icon: "🛁" },
            { name: "Tempered Glass Work", icon: "🔨" },
        ],
    },
    {
        title: "Canopy Glass Service",
        items: [
            { name: "Canopy Glass Roofing", icon: "🏠" },
            { name: "Canopy Polycarbonate Roofing", icon: "🏗️" },
            { name: "Composite Panel Roofing", icon: "🔧" },
            { name: "Canopy Metal Work", icon: "⚒️" },
        ],
    },
    {
        title: "Plumbing Service",
        items: [
            { name: "Installing Heater Switch", icon: "🔌" },
            { name: "Installing Water Heater", icon: "🚰" },
            { name: "Installing Shower Set", icon: "🚿" },
            { name: "Installing Water Tap", icon: "🚰" },
        ],
    },
]

export default function ServicesPage() {
    return (
        <div >
            <div className="container py-16 mx-auto">
                <ContactHeader
                    title="Our Projects"
                    description="We're a home/Renovation service provider that can help you with anything from plumbing to carpentry,
                        electrical work, and full renovations."
                    imageUrl="/projects-banner.jpg"
                    primaryButtonText="Our Services"
                    primaryButtonLink="/services"
                    secondaryButtonText="Contact Us"
                    secondaryButtonLink="/contact"
                />

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-10">
                    {services.map((category) => (
                        <Card
                            key={category.title}
                            className="group overflow-hidden hover:shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/50 rounded-none"
                        >
                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-4 pb-4 border-b">{category.title}</h2>
                                <ul className="space-y-3">
                                    {category.items.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={`/services/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                                                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors py-3 bg-gray-50 p-2"
                                            >
                                                <span className="text-lg">{item.icon}</span>
                                                {item.name}
                                                <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}


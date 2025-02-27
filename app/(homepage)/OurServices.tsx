import { Building2, Home, Building, Paintbrush2, Grid2X2, Wrench } from "lucide-react"

const services = [
    {
        icon: Building2,
        title: "Office Renovation",
        description:
            "Transform your workplace into a productive and inspiring environment with our comprehensive office renovation services.",
    },
    {
        icon: Home,
        title: "Residential Design",
        description:
            "Create your dream home with our expert residential interior design services tailored to your lifestyle.",
    },
    {
        icon: Building,
        title: "Commercial Projects",
        description:
            "Elevate your business space with our commercial interior solutions that blend functionality with style.",
    },
    {
        icon: Paintbrush2,
        title: "Custom Solutions",
        description: "Get bespoke interior designs that perfectly match your vision and requirements.",
    },
    {
        icon: Grid2X2,
        title: "Space Planning",
        description: "Maximize your space efficiency with our expert planning and layout optimization services.",
    },
    {
        icon: Wrench,
        title: "Repair & Maintenance",
        description: "Keep your space in perfect condition with our professional repair and maintenance services.",
    },
]

export default function OurServices() {
    return (
        <section id="services" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Our Services</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Comprehensive interior design and renovation solutions for every space
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 border group hover:border-red-600 transition-colors shadow-sm">
                            <service.icon className="h-12 w-12 text-red-600 mb-6" />
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


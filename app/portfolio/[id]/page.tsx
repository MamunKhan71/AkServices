"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Star, Phone, Calendar, Clock, MapPin, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectDetails({ params }: { params: { id: string } }) {
    const project = projects.find((p) => p.id === params.id)
    const [activeImage, setActiveImage] = useState(0)

    if (!project) {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <h2 className="text-2xl font-bold mb-4">Project not found</h2>
                <Link href="/" className="text-primary hover:underline">
                    Return to home
                </Link>
            </div>
        )
    }

    // Generate multiple images for the gallery
    const images = [
        project.image,
        "/portfolio/1/plumbing-services-ak-contractor-services-02.jpg",
        "/portfolio/1/plumbing-services-ak-contractor-services-03.jpg",
        "/portfolio/1/plumbing-services-ak-contractor-services-04.jpg",
    ]

    return (
        <div className="min-h-screen bg-white">
            <main className="container mx-auto px-4 py-12">


                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="border border-gray-200 mb-6">
                            <div className="relative h-[400px] w-full">
                                <Image
                                    src={images[activeImage] || "/placeholder.svg"}
                                    alt={project.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-0 left-0 bg-primary text-white p-2">{project.serviceType}</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-4 gap-2 mb-8">
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`border cursor-pointer ${activeImage === index ? "border-primary" : "border-gray-200"}`}
                                    onClick={() => setActiveImage(index)}
                                >
                                    <div className="relative h-20 w-full">
                                        <Image
                                            src={image || "/placeholder.svg"}
                                            alt={`${project.name} thumbnail ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-4">{project.name}</h2>
                            <div className="flex items-center mb-4">
                                <div className="flex items-center mr-4">
                                    <Star className="h-5 w-5 text-yellow-500 mr-1" fill="currentColor" />
                                    <span className="font-medium">{project.rating}</span>
                                    <span className="text-muted-foreground ml-1">({project.reviews.length} reviews)</span>
                                </div>
                                <div className="text-muted-foreground">
                                    Service Type: <span className="font-medium text-foreground">{project.serviceType}</span>
                                </div>
                            </div>
                            <p className="text-muted-foreground mb-6">{project.fullDescription}</p>

                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-3">Services Included</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {project.services.map((service, index) => (
                                        <li key={index} className="flex items-center">
                                            <Check className="h-5 w-5 text-primary mr-2" />
                                            <span>{service}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-4">Reviews</h3>
                            {project.reviews.map((review, index) => (
                                <div key={index} className="border border-gray-200 p-4 mb-4">
                                    <div className="flex justify-between mb-2">
                                        <div className="font-medium">{review.name}</div>
                                        <div className="text-muted-foreground text-sm">{review.date}</div>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="h-4 w-4 mr-1"
                                                fill={i < review.rating ? "#FFD700" : "none"}
                                                stroke={i < review.rating ? "#FFD700" : "currentColor"}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-muted-foreground">{review.comment}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="border border-gray-200 p-6 sticky top-6">
                            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                            <div className="space-y-4 mb-6">
                                <div className="flex items-start">
                                    <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                                    <div>
                                        <div className="font-medium">Phone</div>
                                        <div className="text-muted-foreground">86503828</div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Calendar className="h-5 w-5 text-primary mr-3 mt-0.5" />
                                    <div>
                                        <div className="font-medium">Experience</div>
                                        <div className="text-muted-foreground">Joined 4 years ago</div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
                                    <div>
                                        <div className="font-medium">Response Time</div>
                                        <div className="text-muted-foreground">Very Responsive</div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                                    <div>
                                        <div className="font-medium">Service Area</div>
                                        <div className="text-muted-foreground">Singapore</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-primary/10 p-4 mb-6">
                                <div className="font-bold mb-2">Quality Service, Cheap Price!</div>
                                <ul className="text-sm space-y-1">
                                    <li>✅ Professional Worker</li>
                                    <li>✅ No Hidden Cost</li>
                                    <li>✅ No GST</li>
                                </ul>
                            </div>

                            <Button className="w-full mb-3">Contact Now</Button>
                            <Button variant="outline" className="w-full">
                                Request Quote
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

const projects = [
    {
        id: "plumbing-service",
        name: "24/7 Plumbing Service",
        shortDescription:
            "Emergency plumbing services available 24/7 for all your plumbing needs including toilet chocking, water heater installation, and more.",
        serviceType: "Plumbing",
        image: "/portfolio/1/plumbing-services-ak-contractor-services-01.jpg",
        rating: 4.9,
        fullDescription:
            "Our 24/7 plumbing service offers immediate assistance for all your plumbing emergencies. We handle everything from toilet chocking to water heater installation, kitchen sink repairs, shower tap replacements, and more. Our team of experienced plumbers is available around the clock to ensure your plumbing issues are resolved promptly and efficiently.",
        reviews: [
            {
                name: "terriok_0605",
                date: "2 months ago",
                rating: 5,
                comment:
                    "Reasonable price, professional and speedy. Just a suggestion, maybe can do a simple cleaning once completed.",
            },
        ],
        services: [
            "Toilet chocking",
            "Water Heater Installation",
            "Kitchen Sink",
            "Shower tap",
            "Water Tap",
            "Toilet bowl installation",
        ],
    },
    {
        id: "glass-cabinet",
        name: "Glass Cabinet & Repair",
        shortDescription:
            "Professional glass cabinet installation, glass repair, glass hinges, toilet doors, and glass door services.",
        serviceType: "Glass Work",
        image: "/placeholder.svg?height=400&width=600",
        rating: 4.8,
        fullDescription:
            "Our glass services include professional installation and repair of glass cabinets, glass doors, toilet doors, and more. We use high-quality materials and employ skilled technicians to ensure durable and aesthetically pleasing results. Whether you need new glass installations or repairs to existing glass fixtures, our team has the expertise to deliver exceptional service.",
        reviews: [
            {
                name: "megachalizardxy",
                date: "6 months ago",
                rating: 5,
                comment: "Amazing handy man, assembled my wall cabinets & bookshelf",
            },
        ],
        services: ["Glass cabinet installation", "Glass repair", "Glass hinges", "Toilet doors", "Glass door"],
    },
    {
        id: "kitchen-renovation",
        name: "Kitchen Renovation",
        shortDescription:
            "Complete kitchen renovation services including cabinet installation, hacking, tiling, and sink installation.",
        serviceType: "Renovation",
        image: "/placeholder.svg?height=400&width=600",
        rating: 4.9,
        fullDescription:
            "Transform your kitchen with our comprehensive renovation services. We handle everything from cabinet installation and hacking to tiling and sink installation. Our team works closely with you to design and implement a kitchen that meets your functional needs and aesthetic preferences. We use quality materials and employ skilled craftsmen to ensure a durable and beautiful result.",
        reviews: [
            {
                name: "johnsmith",
                date: "3 months ago",
                rating: 5,
                comment:
                    "Excellent work on my kitchen renovation. The team was professional and completed the project on time.",
            },
        ],
        services: [
            "Kitchen cabinet installation",
            "Hacking services",
            "Tiling",
            "Sink installation",
            "Kitchen tap installation",
        ],
    },
    {
        id: "toilet-renovation",
        name: "Toilet Renovation",
        shortDescription:
            "Complete toilet renovation including toilet bowl installation, shower tap replacement, and tiling.",
        serviceType: "Renovation",
        image: "/placeholder.svg?height=400&width=600",
        rating: 4.7,
        fullDescription:
            "Our toilet renovation services cover everything from toilet bowl installation and shower tap replacement to tiling and overall design. We work with you to create a functional and aesthetically pleasing bathroom space. Our team of skilled professionals ensures that all installations are done correctly and to your satisfaction.",
        reviews: [
            {
                name: "sarahlee",
                date: "4 months ago",
                rating: 4,
                comment: "Very satisfied with the toilet renovation. The team was efficient and the result looks great.",
            },
        ],
        services: ["Toilet bowl installation", "Shower tap replacement", "Tiling", "Water tap installation"],
    },
    {
        id: "electrical-services",
        name: "Electrical Services",
        shortDescription: "Professional electrical services including light installation, wiring, and electrical repairs.",
        serviceType: "Electrical",
        image: "/placeholder.svg?height=400&width=600",
        rating: 4.8,
        fullDescription:
            "Our electrical services cover a wide range of needs, from light installation and wiring to electrical repairs. Our licensed electricians ensure that all work is done safely and up to code. Whether you need new lighting fixtures installed or have electrical issues that need to be addressed, our team has the expertise to handle it.",
        reviews: [
            {
                name: "davidtan",
                date: "1 month ago",
                rating: 5,
                comment: "Excellent electrical work. The electrician was knowledgeable and efficient.",
            },
        ],
        services: ["Light installation", "Wiring", "Electrical repairs", "Electrical troubleshooting"],
    },
    {
        id: "carpentry-works",
        name: "Carpentry Works",
        shortDescription: "Custom carpentry services including cabinet making, shelving, and furniture assembly.",
        serviceType: "Carpentry",
        image: "/placeholder.svg?height=400&width=600",
        rating: 4.9,
        fullDescription:
            "Our carpentry services include custom cabinet making, shelving, furniture assembly, and more. Our skilled carpenters work with quality materials to create durable and beautiful wooden fixtures for your home. Whether you need built-in cabinets, custom shelving, or help with furniture assembly, our team has the expertise to deliver exceptional results.",
        reviews: [
            {
                name: "lisamong",
                date: "2 months ago",
                rating: 5,
                comment: "Amazing carpentry work. The cabinets look beautiful and are very sturdy.",
            },
        ],
        services: ["Cabinet making", "Shelving", "Furniture assembly", "Custom woodwork"],
    },
]


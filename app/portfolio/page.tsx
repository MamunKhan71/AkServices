"use client"

import ContactHeader from "@/components/contact-header"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { projects, projectsType } from "@/data/projects-data/projects-data"
import { ArrowRight, ChevronDown, ChevronUp, Filter, Search, Star, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useMemo, useState } from "react"

export default function PortfolioPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedServiceTypes, setSelectedServiceTypes] = useState<string[]>([])
    const [selectedSort, setSelectedSort] = useState("featured")
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 300])
    const [sidebarOpen, setSidebarOpen] = useState(true)

    // Get unique service types
    const serviceTypes = Array.from(new Set(projects.map((project: projectsType) => project.serviceType)))

    // Handle service type filter change
    const handleServiceTypeChange = (serviceType: string) => {
        setSelectedServiceTypes((prev) =>
            prev.includes(serviceType) ? prev.filter((type) => type !== serviceType) : [...prev, serviceType],
        )
    }

    // Filter and sort projects
    const filteredProjects = useMemo(() => {
        return projects
            .filter((project) => {
                // Search filter
                if (
                    searchQuery &&
                    !project.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
                    !project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
                ) {
                    return false
                }

                // Service type filter
                if (selectedServiceTypes.length > 0 && !selectedServiceTypes.includes(project.serviceType)) {
                    return false
                }

                // Price range filter
                if (project.price < priceRange[0] || project.price > priceRange[1]) {
                    return false
                }

                return true
            })
            .sort((a, b) => {
                switch (selectedSort) {
                    case "featured":
                        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
                    case "price-low":
                        return a.price - b.price
                    case "price-high":
                        return b.price - a.price
                    case "newest":
                        return new Date(b.date).getTime() - new Date(a.date).getTime()
                    case "rating":
                        return b.rating - a.rating
                    default:
                        return 0
                }
            })
    }, [searchQuery, selectedServiceTypes, selectedSort, priceRange])

    // Toggle sidebar on mobile
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    return (
        <div className="h-full bg-white">
            <div className="container mx-auto py-10">
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

                {/* Mobile filter toggle */}
                <div className="md:hidden mb-6">
                    <Button variant="outline" onClick={toggleSidebar} className="w-full flex items-center justify-between">
                        <span className="flex items-center">
                            <Filter className="h-4 w-4 mr-2" />
                            Filters & Sort
                        </span>
                        {sidebarOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </Button>
                </div>

                <div className="flex flex-col md:flex-row gap-8 mt-10">
                    {/* Sidebar */}
                    {sidebarOpen && (
                        <div className="w-full md:w-64 shrink-0 border border-gray-200 p-4 h-fit">
                            <div className="mb-6">
                                <h3 className="font-bold text-lg mb-3">Search</h3>
                                <div className="relative">
                                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        type="text"
                                        placeholder="Search projects..."
                                        className="pl-8"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    {searchQuery && (
                                        <button className="absolute right-2 top-2.5" onClick={() => setSearchQuery("")}>
                                            <X className="h-4 w-4 text-muted-foreground" />
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="font-bold text-lg mb-3">Service Type</h3>
                                <div className="space-y-2">
                                    {serviceTypes.map((serviceType) => (
                                        <div key={serviceType} className="flex items-center space-x-2">
                                            <Checkbox
                                                id={`service-${serviceType}`}
                                                checked={selectedServiceTypes.includes(serviceType)}
                                                onCheckedChange={() => handleServiceTypeChange(serviceType)}
                                            />
                                            <Label htmlFor={`service-${serviceType}`}>{serviceType}</Label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Button
                                variant="outline"
                                className="w-full"
                                onClick={() => {
                                    setSearchQuery("")
                                    setSelectedServiceTypes([])
                                    setSelectedSort("featured")
                                    setPriceRange([0, 300])
                                }}
                            >
                                Reset Filters
                            </Button>
                        </div>
                    )}

                    {/* Projects Grid */}
                    <div className="flex-1">
                        {filteredProjects.length === 0 ? (
                            <div className="text-center py-12 border border-gray-200">
                                <h3 className="text-lg font-medium mb-2">No projects found</h3>
                                <p className="text-muted-foreground mb-4">Try adjusting your filters or search query</p>
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        setSearchQuery("")
                                        setSelectedServiceTypes([])
                                        setSelectedSort("featured")
                                        setPriceRange([0, 300])
                                    }}
                                >
                                    Reset Filters
                                </Button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredProjects.map((project) => (
                                    <Link href={`/portfolio/${project.id}`} key={project.id}>
                                        <div className="border border-gray-200 hover:border-primary transition-colors duration-200 group">
                                            <div className="relative h-64 w-full">
                                                <Image
                                                    src={project.image || "/placeholder.svg"}
                                                    alt={project.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                                <div className="absolute bottom-0 right-0 bg-primary text-white p-1.5 shadow-lg text-xs">{project.serviceType}</div>
                                            </div>
                                            <div className="p-4">
                                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-200">
                                                    {project.name}
                                                </h3>
                                                <p className="text-muted-foreground line-clamp-2 mb-4">{project.shortDescription}</p>
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center">
                                                        <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
                                                        <span className="text-sm">{project.rating}</span>
                                                    </div>
                                                    <div className="font-bold">${project.price}</div>
                                                </div>
                                                <div className="mt-4 text-primary flex items-center text-sm font-medium">
                                                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}



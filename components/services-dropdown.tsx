"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import {
    ChevronDown,
    Globe,
    SlidersHorizontal,
    Store,
    Layers,
    Umbrella,
    Thermometer,
    Droplets,
    ShowerHeadIcon as Shower,
    Pipette,
    LayoutGrid,
    StepBackIcon as Stairs,
    Bath,
    Hammer,
    Shield,
} from "lucide-react"

interface ServiceItem {
    title: string
    href: string
    icon: React.ReactNode
}

interface ServiceCategory {
    title: string
    items: ServiceItem[]
}

const serviceCategories: ServiceCategory[] = [
    {
        title: "Glass Studio Service",
        items: [
            {
                title: "Frosted Glass Door with Fix Panel",
                href: "/services/frosted-glass-door",
                icon: <Globe className="h-4 w-4" />,
            },
            {
                title: "Shop Front Glass Door",
                href: "/services/shop-front-glass",
                icon: <Store className="h-4 w-4" />,
            },
            {
                title: "Glass Pattison Shopping mall and Any Office",
                href: "/services/glass-pattison",
                icon: <LayoutGrid className="h-4 w-4" />,
            },
            {
                title: "Kitchen Color Back Flash Glass",
                href: "/services/kitchen-color-glass",
                icon: <Pipette className="h-4 w-4" />,
            },
            {
                title: "Custom Glass work Design & Installation",
                href: "/services/custom-glass-work",
                icon: <Hammer className="h-4 w-4" />,
            },
        ],
    },
    {
        title: "Glass Studio Service 2",
        items: [
            {
                title: "Soft Closing Sliding Glass Door",
                href: "/services/sliding-glass-door",
                icon: <SlidersHorizontal className="h-4 w-4" />,
            },
            {
                title: "Slidin, Swing, Shower Skin Door Installation",
                href: "/services/shower-skin-door",
                icon: <Layers className="h-4 w-4" />,
            },
            {
                title: "Staircase Railing Glass",
                href: "/services/staircase-railing",
                icon: <Stairs className="h-4 w-4" />,
            },
            {
                title: "Toilet Shower Screen",
                href: "/services/toilet-shower-screen",
                icon: <Bath className="h-4 w-4" />,
            },
            {
                title: "Tempered Glass Work",
                href: "/services/tempered-glass",
                icon: <Shield className="h-4 w-4" />,
            },
        ],
    },
    {
        title: "Canopy Glass Service",
        items: [
            {
                title: "Canopy Glass Roofing",
                href: "/services/canopy-glass-roofing",
                icon: <Umbrella className="h-4 w-4" />,
            },
            {
                title: "Canopy Polycarbonate Roofing",
                href: "/services/polycarbonate-roofing",
                icon: <Umbrella className="h-4 w-4" />,
            },
            {
                title: "Composite Panel Roofing",
                href: "/services/composite-panel-roofing",
                icon: <Umbrella className="h-4 w-4" />,
            },
            {
                title: "Canopy Metal Work",
                href: "/services/canopy-metal-work",
                icon: <Umbrella className="h-4 w-4" />,
            },
        ],
    },
    {
        title: "Plumbing Service",
        items: [
            {
                title: "Installing Heater Switch",
                href: "/services/heater-switch",
                icon: <Thermometer className="h-4 w-4" />,
            },
            {
                title: "Installing Water Heater",
                href: "/services/water-heater",
                icon: <Droplets className="h-4 w-4" />,
            },
            {
                title: "Installing Shower Set",
                href: "/services/shower-set",
                icon: <Shower className="h-4 w-4" />,
            },
            {
                title: "Installing Water Tap",
                href: "/services/water-tap",
                icon: <Droplets className="h-4 w-4" />,
            },
        ],
    },
]

export function ServicesDropdown() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative">
            <button
                className="flex items-center gap-1 text-primary font-medium text-sm"
                onMouseEnter={() => setIsOpen(true)}
                onClick={() => setIsOpen(!isOpen)}
            >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {isOpen && (
                <div
                    className="absolute left-0 mt-1 w-[950px] bg-white shadow-lg rounded-md overflow-hidden z-50 border border-gray-100"
                    onMouseLeave={() => setIsOpen(false)}
                >
                    <div className="grid grid-cols-4 gap-0 p-0">
                        {serviceCategories.map((category, index) => (
                            <div
                                key={category.title}
                                className={`p-4 ${index < serviceCategories.length - 1 ? "border-r border-gray-100" : ""}`}
                            >
                                <h3 className="font-medium text-sm text-gray-900 mb-3 pb-2 border-b">{category.title}</h3>
                                <ul className="space-y-2">
                                    {category.items.map((item) => (
                                        <li key={item.title}>
                                            <Link
                                                href={item.href}
                                                className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 p-2 rounded-sm transition-colors"
                                            >
                                                <span className="flex-shrink-0 text-gray-500">{item.icon}</span>
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gray-50 p-3 border-t border-gray-100">
                        <Link href="/all-services" className="text-sm text-primary font-medium hover:underline">
                            View all services
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}


"use client"

import { cn } from "@/lib/utils"; // If you have a classNames utility
import Link from "next/link"
import { usePathname } from "next/navigation"

interface Service {
    name: string
    path: string
}

const services: Service[] = [
    { name: "Glass Studio Service", path: "/services" },
    { name: "Custom Glass Design and Installation", path: "/services/custom-glass-design-installation" },
    { name: "Frosted Glass Door with Fix Panel", path: "/services/frosted-glass-door-with-fix-panel" },
    { name: "Glass Partition Shopping Mall and Office", path: "/services/glass-partition-shopping-mall-office" },
    { name: "Kitchen Color Back Flash Glass", path: "/services/kitchen-color-back-flash-glass" },
    { name: "Shop Front Glass Door", path: "/services/shop-front-glass-door" },
    { name: "Shower Screen, Sliding, Swing Door Installation", path: "/services/shower-screen-sliding-swing-door-installation" },
    { name: "Soft Closing Sliding Glass Door", path: "/services/soft-closing-sliding-glass-door" },
    { name: "Staircase Railing Glass", path: "/services/staircase-railing-glass" },
    { name: "Tempered Glass Work", path: "/services/tempered-glass-work" },
    { name: "Toilet Shower Screen", path: "/services/toilet-shower-screen" },
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="w-full md:w-64 lg:w-72 bg-white border-r shadow-sm">
            {/* Header */}
            <div className="bg-blue-600 text-white px-4 py-5">
                <h2 className="text-xl font-semibold uppercase tracking-wide">
                    Glass Studio Service
                </h2>
            </div>

            {/* Services Nav */}
            <nav className="p-4 space-y-1">
                {services.map((service) => {
                    const isActive = pathname === service.path
                    return (
                        <Link
                            key={service.path}
                            href={service.path}
                            className={cn(
                                "block px-3 py-2 text-sm font-medium transition-colors border-l-4",
                                isActive
                                    ? "border-blue-600 bg-blue-50 text-blue-700"
                                    : "border-transparent text-gray-700 hover:bg-gray-50"
                            )}
                        >
                            {service.name}
                        </Link>
                    )
                })}
            </nav>

            {/* “Need Help?” Box */}
            <div className="border-t bg-gray-50 p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-3">
                    Contact us for more information or assistance.
                </p>
                <div className="space-y-1 text-sm">
                    <p className="font-semibold text-gray-800">+1 (234) 567-890</p>
                    <p className="text-gray-500">Mon - Fri, 9AM - 6PM</p>
                </div>
            </div>
        </aside>
    )
}

"use client";

import { cn } from "@/lib/utils"; // If you have a classNames utility
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface Service {
    name: string;
    path: string;
}

const allServices: { [key: string]: Service[] } = {
    glass: [
        { name: "Custom Glass Design and Installation", path: "/services/glass/custom-glass-design-installation" },
        { name: "Frosted Glass Door with Fix Panel", path: "/services/glass/frosted-glass-door-with-fix-panel" },
        { name: "Glass Partition Shopping Mall and Office", path: "/services/glass/glass-partition-shopping-mall-office" },
        { name: "Kitchen Color Back Flash Glass", path: "/services/glass/kitchen-color-back-flash-glass" },
        { name: "Shop Front Glass Door", path: "/services/glass/shop-front-glass-door" },
        { name: "Shower Screen, Sliding, Swing Door Installation", path: "/services/glass/shower-screen-sliding-swing-door-installation" },
        { name: "Soft Closing Sliding Glass Door", path: "/services/glass/soft-closing-sliding-glass-door" },
        { name: "Staircase Railing Glass", path: "/services/glass/staircase-railing-glass" },
        { name: "Tempered Glass Work", path: "/services/glass/tempered-glass-work" },
        { name: "Toilet Shower Screen", path: "/services/glass/toilet-shower-screen" },
    ],
    canopy: [
        { name: "Canopy Glass Roofing", path: "/services/canopy/canopy-glass-roofing" },
        { name: "Canopy Metal Roofing", path: "/services/canopy/canopy-metal-roofing" },
        { name: "Canopy Polycarbonate Roofing", path: "/services/canopy/canopy-polycarbonate-roofing" },
        { name: "Composite Panel Roofing", path: "/services/canopy/composite-panel-roofing" },
    ],
    plumbing: [
        { name: "Installing Heater Switch", path: "/services/plumbing/installing-heater-switch" },
        { name: "Installing Shower Set", path: "/services/plumbing/installing-shower-set" },
        { name: "Installing Water Tap", path: "/services/plumbing/installing-water-tap" },
        { name: "Installing Water Heater", path: "/services/plumbing/installing-water-heater" },
    ],
};

export default function Sidebar() {
    const pathname = usePathname();
    const [category, setCategory] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const pathCategory = pathname.split("/")[2]; // Extract category from URL
            setCategory(pathCategory);
        }
    }, [pathname]);

    if (!category) return null; // Prevent rendering until category is determined

    const services = allServices[category] || [];

    return (
        <aside className="w-full md:w-64 lg:w-72 bg-white border shadow-sm sticky top-28">
            {/* Header */}
            <div className="bg-blue-600 text-white px-4 py-5">
                <h2 className="text-xl font-semibold uppercase tracking-wide">
                    {category ? `${category.charAt(0).toUpperCase()}${category.slice(1)} Services` : "Services"}
                </h2>
            </div>

            {/* Services Nav */}
            <nav className="p-4 space-y-1">
                {services.map((service) => {
                    const isActive = pathname === service.path;
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
                    );
                })}
            </nav>
        </aside>
    );
}

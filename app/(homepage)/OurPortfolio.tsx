"use client"

import { Button } from "@/components/ui/button"
import { categories, categoryIcons, ProjectCategory, projects } from "@/data/portfolio-items"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { useRef, useState } from "react"

// Define project types

export default function PortfolioSection() {
    const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all")
    const [hoveredProject, setHoveredProject] = useState<string | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    // Filter projects based on active category
    const filteredProjects =
        activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
            },
        },
    }

    return (
        <section className="py-20">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-red-500 font-medium mb-2"
                    >
                        Successful Projects
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl font-bold text-gray-800"
                    >
                        Our Proud Portfolio
                    </motion.h2>

                </div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category.value}
                            onClick={() => setActiveCategory(category.value)}
                            className={cn(
                                "px-4 py-2 text-sm font-medium transition-all duration-300",
                                activeCategory === category.value
                                    ? "bg-gray-900 text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200",
                            )}
                        >
                            {category.label}
                        </button>
                    ))}
                </motion.div>

                {/* Simple Grid Portfolio */}
                <motion.div
                    ref={containerRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            layoutId={project.id}
                            onHoverStart={() => setHoveredProject(project.id)}
                            onHoverEnd={() => setHoveredProject(null)}
                            className="relative overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <Image
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-90" />

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: hoveredProject === project.id ? 1 : 0,
                                        y: hoveredProject === project.id ? 0 : 20,
                                    }}
                                    className="absolute inset-0 p-6 flex flex-col justify-end"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="inline-flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium text-white">
                                            {categoryIcons[project.category]}
                                            <span className="ml-1">{project.category}</span>
                                        </span>
                                        <span className="inline-flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium text-white">
                                            {project.year}
                                        </span>
                                    </div>

                                    <p className="text-white/80 text-sm mb-4 line-clamp-3">{project.description}</p>

                                    <div className="flex justify-between items-center">
                                        <span className="text-white/70 text-sm">{project.client}</span>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-1 text-white font-medium text-sm"
                                        >
                                            View Project <ArrowUpRight className="w-4 h-4" />
                                        </motion.button>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="p-5 bg-white">
                                <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-gray-900 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
                            </div>

                        </motion.div>
                    ))}
                    {/* TODO */}
                    {/* <div className="col-span-3 flex justify-center items-center w-full mt-4">
                        <Button className="text-xl">View All <ArrowDown size={20}/></Button>
                    </div> */}
                </motion.div>
            </div>
        </section>
    )
}


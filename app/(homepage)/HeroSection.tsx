'use client'
import { heroImages, heroTexts, services } from "@/data/hero-data";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
    const [isHovered, setIsHovered] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
            setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full h-full bg-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="grid grid-cols-10 h-full w-full">
                    {[...Array(100)].map((_, i) => (
                        <div key={i} className="border-[0.5px] border-gray-900/20" />
                    ))}
                </div>
            </div>

            <div className="container mx-auto py-16 lg:py-24 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={currentTextIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.6 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-relaxed"
                            >
                                {heroTexts[currentTextIndex]}
                            </motion.h1>
                        </AnimatePresence>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-gray-600"
                        >
                            We bring your vision to life with expert craftsmanship and attention to detail.
                        </motion.p>

                        <div className="flex gap-4 items-center">
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-primary text-white px-8 py-4 text-lg font-semibold shadow-lg flex items-center group"
                            >
                                Book a Consultation
                                <ArrowRight className="ml-2" />
                            </motion.button>

                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-green-500 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:bg-green-600 transition-all duration-300 flex gap-2 items-center group"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-whatsapp"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                </svg>
                                Call Us
                            </motion.button>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4 mt-12">
                            {services.map((service) => (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 + service.id * 0.1 }}
                                    onHoverStart={() => setIsHovered(service.id)}
                                    onHoverEnd={() => setIsHovered(null)}
                                    className={`p-8 border border-gray-200 transition-all duration-300 ${isHovered === service.id ? "bg-amber-50 border-amber-200" : "bg-white"}`}
                                >
                                    <motion.div
                                        animate={{
                                            scale: isHovered === service.id ? 1.1 : 1,
                                            color: isHovered === service.id ? "#d97706" : "#111827"
                                        }}
                                        className="transition-colors duration-300"
                                    >
                                        {service.icon}
                                    </motion.div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                                    <p className="text-gray-600">{service.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] overflow-hidden group"
                    >
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentImageIndex}
                                src={heroImages[currentImageIndex]}
                                alt="Luxurious interior design"
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                        <div className="absolute bottom-4 right-4 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button
                                onClick={() => setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
                                className="p-2 bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors duration-300"
                            >
                                <ArrowLeft className="text-white text-xl" />
                            </button>
                            <button
                                onClick={() => setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)}
                                className="p-2 bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors duration-300"
                            >
                                <ArrowRight className="text-white text-xl" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
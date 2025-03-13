'use client'
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Home, PaintBucket, Ruler } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
    const [isHovered, setIsHovered] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const images = [
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
        "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e"
    ];

    const heroTexts = [
        "Transform Your Space Into Something Extraordinary",
        "Create Your Dream Living Environment",
        "Elevate Your Lifestyle With Perfect Design"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
            setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const services = [
        {
            id: 1,
            title: "Interior Design",
            description: "Custom designs tailored to your lifestyle and preferences",
            icon: <Home className="text-4xl mb-4" />
        },
        {
            id: 2,
            title: "Renovation",
            description: "Complete home transformation with expert craftsmanship",
            icon: <PaintBucket className="text-4xl mb-4" />
        },
        {
            id: 3,
            title: "Space Planning",
            description: "Optimize your living space with professional planning",
            icon: <Ruler className="text-4xl mb-4" />
        }
    ];

    return (
        <div className="w-full min-h-screen bg-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-700" />
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
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
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

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-amber-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:bg-amber-700 transition-all duration-300 flex items-center group"
                        >
                            Book a Consultation
                            <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                        </motion.button>

                        <div className="grid md:grid-cols-3 gap-0 mt-12">
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
                                src={images[currentImageIndex]}
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
                                onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                                className="p-2 bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors duration-300"
                            >
                                <ArrowLeft className="text-white text-xl" />
                            </button>
                            <button
                                onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
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
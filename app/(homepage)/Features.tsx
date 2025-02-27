import Image from "next/image"
import { Check } from "lucide-react"

const features = [
    "Premium Materials & Finishes",
    "Expert Design Consultation",
    "Project Management",
    "Quality Craftsmanship",
    "On-Time Completion",
    "After-Service Support",
]

export default function Features() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold">Why One Excel is Your Best Choice</h2>
                        <p className="text-gray-600 text-lg">
                            With years of experience in the industry, we deliver exceptional interior design and renovation services
                            that exceed expectations.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <div className="bg-red-600 p-1">
                                        <Check className="h-4 w-4 text-white" />
                                    </div>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-[600px]">
                        <Image
                            src="/hero1.jpg"
                            alt="Interior Design Feature"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}


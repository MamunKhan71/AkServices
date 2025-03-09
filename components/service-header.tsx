import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ServiceHeaderProps {
    title: string
    description?: string
    imagePath?: string
}

export default function ServiceHeader({
    title,
    description = "Innovative glass solutions with meticulous craftsmanship for residential and commercial spaces.",
    imagePath = "/placeholder.svg?height=500&width=1200",
}: ServiceHeaderProps) {
    return (
        <div className="relative">
            <div className="relative h-[400px] w-full">
                <Image src={imagePath || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
                        <p className="text-white text-lg mb-8">{description}</p>
                        <div className="flex flex-wrap gap-4">
                            <Button className="bg-blue-600 hover:bg-blue-700">
                                <Link href="/services">Our Services</Link>
                            </Button>
                            <Button variant="outline" className="bg-white text-black hover:bg-gray-100">
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white px-4 py-2 flex items-center justify-end gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm">WORK TIME: 08:00 - 18:00</span>
            </div>
        </div>
    )
}


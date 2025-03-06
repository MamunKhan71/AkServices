'use client'
import { MessageSquare, Phone } from 'lucide-react'
import Link from 'next/link'
const WhyChooseUs = () => {

    return (
        <div
            className="relative overflow-hidden bg-primary text-white p-10 flex flex-col md:flex-row items-center justify-between"
        >
            <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Why Choose Us?</h3>
                <p className="text-white w-[700px]">Ak Contractor Services provides durable, visually appealing glass partitions tailored to enhance your space’s design and functionality.</p>
            </div>
            <div className="flex gap-4 relative z-10">
                <Link
                    href="tel:+6583722049"
                    className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 px-6 py-3 font-medium"
                >
                    <Phone className="h-5 w-5" />
                    <span>Call Now</span>
                </Link>
                <Link
                    href="https://wa.me/6583722049"
                    className="flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 px-6 py-3 font-medium"
                >
                    <MessageSquare className="h-5 w-5" />
                    <span>WhatsApp</span>
                </Link>
            </div>
            <div
                className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-emerald-500/10"
            />
        </div>
    )
}

export default WhyChooseUs
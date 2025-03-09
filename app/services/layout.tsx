import Sidebar from '@/components/sidebar'
import React from 'react'

const ServiceLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="flex flex-col md:flex-row container mx-auto gap-12 mt-10">
            <div className="hidden md:block">
                <Sidebar />
            </div>
            <div className="flex-1 bg-white">{children}</div>
        </main>
    )
}

export default ServiceLayout
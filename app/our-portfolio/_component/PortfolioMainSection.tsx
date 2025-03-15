"use client";

import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio-data";
import { cn } from "@/lib/utils"; // Ensure you have this utility
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import ProjectCards from "./ProjectCards";

const tabs = [
    "All",
    "Plumbing",
    "Electrical",
    "Handyman",
    "Renovation",
    "Glass Work",
    "Painting",
    "Flooring",
    "Contracting"
];
export default function PortfolioMainSection() {
    const [activeTab, setActiveTab] = useState("All");
    const [filteredProjects, setFilteredProjects] = useState(portfolioData)
    const ITEMS_PER_PAGE = 9
    const TOTAL_ITEMS = filteredProjects?.length
    useEffect(() => {
        if (activeTab === "All") {
            setFilteredProjects(portfolioData);
        } else {
            const updatedData = portfolioData?.filter(portfolio => portfolio.category === activeTab);
            setFilteredProjects(updatedData);
        }
    }, [activeTab]);

    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(TOTAL_ITEMS / ITEMS_PER_PAGE)

    const indexOfLastItem = (currentPage * ITEMS_PER_PAGE)
    const indexOfFirstItem = (indexOfLastItem - ITEMS_PER_PAGE)
    const currentItems = filteredProjects?.slice(indexOfFirstItem, indexOfLastItem)

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber)
        window.scrollTo(0, 0)
    }

    return (
        <div>
            <div className="flex flex-wrap gap-3 md:gap-[18px] mt-8 md:mt-[50px] md:p-4 justify-center md:max-w-5xl mx-auto w-full h-full">
                {tabs.map((tab) => (
                    <Button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={cn(
                            "px-6 py-2 text-sm font-medium rounded-none border transition-all",
                            activeTab === tab
                                ? "bg-black text-white hover:bg-black"
                                : "bg-white text-black border-[#C4C4C4] hover:bg-gray-100"
                        )}
                    >
                        {tab}
                    </Button>
                ))}
            </div>
            <div>
                <div className='h-full w-full'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7 mt-8 md:mt-14 w-full h-full pb-6'>
                        {
                            currentItems?.map((project, index) => <ProjectCards key={`project-${index}`} title={project.title || ''} 
                            
                            imageUrl={project.imageUrl} category={project.category} />)
                        }
                    </div>
                </div>
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
}

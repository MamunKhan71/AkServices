import ServiceHeader from "@/components/service-header"
import { Button } from "@/components/ui/button"
import { plumbingServicesData as servicesData } from "@/data/services-data/plumbing-data"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface ServicePageProps {
    params: {
        service: string
    }
}

export function generateStaticParams() {
    return Object.keys(servicesData).map((service) => ({
        service,
    }))
}

export default function ServicePage({ params }: ServicePageProps) {
    const { service } = params

    const serviceData = servicesData[service]

    if (!serviceData) {
        notFound()
    }

    return (
        <div>
            <ServiceHeader title={serviceData.title} description={serviceData.description} imagePath={serviceData.imageSrc} />
            <div className="py-8">
                <div>
                    <h2 className="text-3xl font-bold mb-6">{serviceData.title}</h2>
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div>
                            {/* <p className="text-gray-700 mb-6">{serviceData.description}</p> */}

                            {serviceData.content.map((paragraph, index) => (
                                <div key={index} className="mb-4">
                                    {paragraph.startsWith("*") ? (
                                        // This is a "title" line, so render it as an H3 or whichever heading level you prefer
                                        <h3 className="text-lg font-semibold text-white mb-2 bg-primary p-1">
                                            {paragraph.replace("*", "").trim()}
                                        </h3>
                                    ) : (
                                        // Otherwise, it's a normal paragraph
                                        <p className="text-gray-700 text-justify">{paragraph}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div>
                            <Image
                                src="/portfolio/canopy-entrance.jpg"
                                alt={serviceData.title}
                                width={600}
                                height={600}
                                className="rounded-lg object-cover w-full h-auto mb-6"
                            />

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-4">Why Choose Our {serviceData.title}?</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                        <div className="bg-blue-600 rounded-full p-1 mt-1">
                                            <svg
                                                className="w-3 h-3 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span>Premium quality materials for durability and longevity</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="bg-blue-600 rounded-full p-1 mt-1">
                                            <svg
                                                className="w-3 h-3 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span>Expert installation by skilled professionals</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="bg-blue-600 rounded-full p-1 mt-1">
                                            <svg
                                                className="w-3 h-3 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span>Customized solutions tailored to your specific needs</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="bg-blue-600 rounded-full p-1 mt-1">
                                            <svg
                                                className="w-3 h-3 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span>Excellent customer service and support</span>
                                    </li>
                                </ul>

                                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                                    <Button className="w-full sm:w-auto">Get a Quote</Button>
                                    <Button variant="outline" className="w-full sm:w-auto">
                                        Contact Us
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl font-bold mb-6">Related Services</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {Object.entries(servicesData)
                                .filter(([key]) => key !== service)
                                .slice(0, 3)
                                .map(([key, data]) => (
                                    <Link key={key} href={`/services/${key}`} className="group">
                                        <div className="border overflow-hidden transition-all group-hover:shadow-md">
                                            <div className="relative h-48">
                                                <Image
                                                    src="/placeholder.svg?height=200&width=400"
                                                    alt={data.title}
                                                    fill
                                                    className="object-cover h-96 w-full"
                                                />
                                            </div>
                                            <div className="p-4">
                                                <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                                                    {data.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm line-clamp-2">{data.description}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


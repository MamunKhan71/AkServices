'use client'

import ServicesDescription from "@/components/ui/services/ServicesDescription"
import HeroSection from "@/components/ui/services/ServicesHeroSection"
import ServicesImageContainer from "@/components/ui/services/ServicesImageContainer"
import ServiceList from "@/components/ui/services/ServicesList"
import ServicesPreviewImage from "@/components/ui/services/ServicesPreviewImage"
import ServicesTitle from "@/components/ui/services/ServicesTitle"
import WhyChooseUs from "@/components/ui/services/WhyChooseUs"
import WorkBannerSection from "./_components/WorkBannerSection"
import WhatsappContactButton from "@/components/ui/services/WhatsappContactButton"
import { canopyGlassServicesData, glassServicesData, plumbingServicesData } from "@/data/service-list"
import ContactInfoCard from "@/components/ui/services/ContactInfoCard"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full container mx-auto">
            <HeroSection
                title="Glass Studio Service"
                description="Innovative glass solutions with meticulous craftsmanship for residential and commercial spaces."
                backgroundImage="/custom-glass.jpg"
                primaryButtonText="Our Services"
                primaryButtonLink="/services"
                secondaryButtonText="Contact Us"
                secondaryButtonLink="/contact"
            />
            <WorkBannerSection />
            <div>
                <section id="services" className="py-16">
                    <div>
                        <div className="grid gap-12 md:grid-cols-12">
                            {/* Service Menu - Redesigned Sidebar */}
                            <div className="md:col-span-4 lg:col-span-3">
                                <div className="space-y-6 sticky top-20">
                                    {/* Glass Studio Service */}
                                    <ServiceList title={glassServicesData?.title} services={glassServicesData.services} />
                                    {/* Canopy Glass Service */}
                                    <ServiceList title={canopyGlassServicesData?.title} services={canopyGlassServicesData?.services} />
                                    {/* Plumbing Service */}
                                    <ServiceList title={plumbingServicesData?.title} services={plumbingServicesData?.services} />
                                    {/* WhatsApp Button - Highlighted */}
                                    <WhatsappContactButton />
                                    {/* Contact Info Card */}
                                    <ContactInfoCard />
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="md:col-span-8 lg:col-span-9">
                                <div className="space-y-12">
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div>
                                            <ServicesTitle title="Glass Studio Service" />
                                            <ServicesDescription description=" One Excel Engineering and Construction Pte. Ltd., our Glass Studio Service offers innovative
                                                solutions to elevate the design and functionality of your space. We specialize in custom glass
                                                creations that combine both aesthetic appeal and practical use, tailored to meet the unique needs
                                                of our clients."/>
                                        </div>
                                        <ServicesPreviewImage imageSrc="/custom-glass.jpg" alt="glass studio services" />
                                    </div>

                                    <div>
                                        <ServicesTitle title="Custom Glass Design" />
                                        <ServicesDescription description="  Our Glass Studio provides bespoke design services, crafting unique glass features that perfectly
                                            complement your space. Whether you need elegant glass partitions, stylish shower enclosures, or
                                            decorative glass panels, our team works closely with you to bring your vision to life. We offer a
                                            wide range of glass types, finishes, and colors to match your design preferences and functional
                                            requirements."/>
                                    </div>
                                    <div>
                                        <ServicesTitle title="Meticulous Craftsmanship For Flawless Glass Installations" />
                                        <ServicesDescription description="Each project is executed with meticulous attention to detail and high-quality materials. Our skilled
                                            craftsmen use advanced techniques to ensure that every glass installation is precise and flawless.
                                            From concept to completion, we prioritize excellence, delivering results that are both beautiful and
                                            durable."/>
                                    </div>

                                    <ServicesImageContainer imageSrc="/custom-glass.jpg" alt="custom-glass-design" />

                                    <div>
                                        <ServicesTitle title="Versatile Glass Solutions" />
                                        <ServicesDescription description="One Excel Glass Studio Service caters to various applications, including residential, commercial,
                                            and hospitality projects. Whether you're upgrading your home, enhancing a business environment, or
                                            designing a unique feature for a hospitality venue, our glass solutions offer versatility and
                                            sophistication."/>
                                    </div>

                                    <WhyChooseUs />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default MainLayout
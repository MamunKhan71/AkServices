"use client"
import ContactHeader from '@/components/contact-header'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent
} from "@/components/ui/card"
import { aboutUsData } from '@/data/about-us-data'
import { motion } from 'framer-motion'
import { Headset } from 'lucide-react'
const AboutUs = () => {
    const containerVariants = {

        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    }

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }


    return (
        <div className='container mx-auto py-10 bg-white'>
            <ContactHeader
                title="About Us"
                description="We'd love to hear from you. Reach out to us with any questions or inquiries."
                imageUrl="/about-us-banner.jpg"
                primaryButtonText="Our Services"
                primaryButtonLink="/services"
                secondaryButtonText="Contact Us"
                secondaryButtonLink="/contact"
            />
            <motion.div
                className="relative mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    className="rounded-xl overflow-hidden"
                >
                    <div className="space-y-12 pt-10">
                        <motion.div variants={childVariants}>
                            <div className='flex w-full gap-12 items-center'>
                                <div className='w-full flex-1 h-full space-y-5'>
                                    <h1 className='font-bold text-primary text-3xl'>AK Contractor Services PTE LTD.</h1>
                                    <p className='font-medium text-justify text-teal-700'>We registered AK CONTRACTOR SERVICES PTE. LTD. with the Accounting and Corporate Regulatory Authority on August 12, 2023, under the Unique Entity Number (UEN) 202332476Z. As a local company, we operate from our registered address at Bedok North Street 5, Postal Code 486132. Our entity status is currently active.</p>
                                    <Button className="bg-primary text-white rounded-none hover:bg-blue-800 inline-flex gap-2 items-center"> <Headset size={20} />Contact Us</Button>
                                </div>
                                <div className='w-full h-auto flex-1 rounded-xl space-y-6'>
                                    <div className="grid grid-cols-2 gap-4">
                                        {
                                            aboutUsData?.map((about, index) =>
                                                <Card key={index} className={`rounded-none p-0 ${index === 0 ? 'bg-primary text-white' : 'bg-teal-50 text-blue-700'}`}>
                                                    <CardContent className="p-4">
                                                        <div className='flex flex-col gap-4 items-center justify-center'>
                                                            <div className='border rounded-none p-4'>
                                                                <h3 className={`font-semibold ${index === 0 ? 'text-white' : 'text-green-500'} text-xl`}>{<about.icon />}</h3>
                                                            </div>
                                                            <div className='flex flex-col items-center justify-center'>
                                                                <h3 className={`font-semibold ${index === 0 ? 'text-white' : 'text-teal-700'}`}>{about.title}</h3>
                                                                <p className={`text-sm ${index === 0 ? 'text-white' : 'text-teal-700'} text-center`}>{about.description}</p>
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            )
                                        }

                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default AboutUs
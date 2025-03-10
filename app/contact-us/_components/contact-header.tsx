import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const ContactHeader = () => {
    return (
        <div>
            <section className="relative pt-16 h-[40vh] md:h-[50vh] overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div className="absolute inset-0">
                    <Image
                        src="/contact-us-mobile.png"
                        alt="Modern interior design"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                {/* <div className="container relative z-20 h-full flex flex-col justify-center p-12">
                    <div>
                        <div className="inline-block backdrop-blur-sm">
                            <h1 className="text-white font-bold text-3xl md:text-5xl">Contact Us</h1>
                        </div>
                        <p className="text-white text-lg md:text-xl max-w-md">
                            Let's transform your space into something extraordinary
                        </p>
                    </div>
                </div> */}
                <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12 z-50">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
                        <p className="text-white text-lg mb-8">We'd love to hear from you. Reach out to us with any questions or inquiries.</p>
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
            </section>
        </div>
    )
}

export default ContactHeader
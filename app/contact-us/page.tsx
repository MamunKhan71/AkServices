import ContactHeader from "@/components/contact-header"
import CompanyMap from "./_components/company-map"
import ContactForm from "./_components/contact-form"
import ContactInfo from "./_components/contact-info"
const ContactPage = () => {
    return (
        <div className='h-full w-full'>
            <div className="container mx-auto h-full bg-white mt-10">
                <ContactHeader
                    title="Get in Touch"
                    description="We'd love to hear from you. Reach out to us with any questions or inquiries."
                    imageUrl="/contact-us-mobile.png"
                    primaryButtonText="Our Services"
                    primaryButtonLink="/services"
                    secondaryButtonText="Contact Us"
                    secondaryButtonLink="/contact"
                />
                <section className="container p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <ContactInfo />
                        <div className="lg:col-span-2">
                            <ContactForm />
                        </div>
                    </div>
                </section>
                <CompanyMap />
            </div>
        </div>
    )
}

export default ContactPage
import CompanyMap from "./_components/company-map"
import ContactForm from "./_components/contact-form"
import ContactHeader from "./_components/contact-header"
import ContactInfo from "./_components/contact-info"
const ContactPage = () => {
    return (
        <div className='h-full w-full'>
            <div className="container mx-auto h-full bg-white mt-10">
                <ContactHeader />
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
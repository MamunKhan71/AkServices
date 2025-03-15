import ContactHeader from '@/components/contact-header'
import PortfolioSection from '../(homepage)/OurPortfolio'

const OurPortfolio = () => {
    return (
        <div>
            <div className='container mx-auto mb-8 md:mb-16 px-4 md:px-0 mt-10'>
                <ContactHeader
                    title="Our Projects"
                    description="We're a home/Renovation service provider that can help you with anything from plumbing to carpentry,
                        electrical work, and full renovations."
                    imageUrl="/projects-banner.jpg"
                    primaryButtonText="Our Services"
                    primaryButtonLink="/services"
                    secondaryButtonText="Contact Us"
                    secondaryButtonLink="/contact"
                />
                <PortfolioSection isHomepage={false} />
            </div>
        </div>
    )
}

export default OurPortfolio
import ContactHeader from '@/components/contact-header'
import PortfolioSection from '../(homepage)/OurPortfolio'

const OurPortfolio = () => {
    return (
        <div>
            <div className='container mx-auto mb-8 md:mb-16 px-4 md:px-0 mt-10'>
                <PortfolioSection isHomepage={false} />
            </div>
        </div>
    )
}

export default OurPortfolio
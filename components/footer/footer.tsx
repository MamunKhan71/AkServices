import FooterFirst from './components/footer-first'
import FooterContent from './components/footer-content'
import FollowUsContent from './components/follow-us-content'
import FooterInfoBar from './components/footer-info-bar'
import { footerQuickLinks, footerResourcesLinks } from '@/data/footer-links'
import ScrollToTopIcon from '../ui/ScrollToTopIcon'

const Footer = () => {
    return (
        <div className='bg-[#010F22] relative'>
            <div className='container mx-auto py-11 w-full'>
                <div className="flex justify-between items-start gap-16">
                    <FooterFirst />
                    {/* Footer second portion */}
                    <FooterContent title='Quick Links' links={footerQuickLinks} />
                    {/* Footer third portion */}
                    <FooterContent title='Resources' links={footerResourcesLinks} />
                    <FollowUsContent />
                </div>
            </div>
            <FooterInfoBar />
            <div className="absolute bottom-32 right-10 z-50">
                <ScrollToTopIcon />
            </div>
        </div>
    )
}

export default Footer



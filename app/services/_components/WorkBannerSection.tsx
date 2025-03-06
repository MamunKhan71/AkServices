import { Clock } from 'lucide-react'

const WorkBannerSection = () => {
    return (
        <div className="bg-blue-600 text-white">
            <div className="container flex items-center justify-end px-4 py-2 md:px-6">
                <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-medium">WORK TIME: 08:00 - 18:00</span>
                </div>
            </div>
        </div>
    )
}

export default WorkBannerSection
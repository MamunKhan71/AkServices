import { Clock, Phone } from "lucide-react"

const ContactInfoCard = () => {
    return (
        <div className="bg-primary rounded-none shadow-lg p-5 text-white">
            <h3 className="text-lg font-bold mb-3">Need Help?</h3>
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span className="font-medium">+65 8372 2049</span>
                </div>
                <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span className="font-medium">+65 6340 1019</span>
                </div>
                <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span className="font-medium">08:00 - 18:00</span>
                </div>
            </div>
        </div>
    )
}

export default ContactInfoCard
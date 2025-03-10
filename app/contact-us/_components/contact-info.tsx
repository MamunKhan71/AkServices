import { Card, CardContent } from '@/components/ui/card'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

const ContactInfo = () => {
    return (
        <div className="lg:col-span-1 space-y-6">
            <div className="relative">
                <div className="absolute top-0 left-0 w-12 h-1 bg-primary"></div>
                <h2 className="text-2xl font-bold pt-4">Get in Touch</h2>
                <p className="text-muted-foreground mt-2">
                    We'd love to hear from you. Contact us for a free consultation.
                </p>
            </div>

            <div className="space-y-6">
                <Card className="overflow-hidden border-none shadow-md rounded-none">
                    <div className="h-1 bg-primary"></div>
                    <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3">
                                <Phone className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-medium">Phone</h3>
                                <p className="text-muted-foreground text-sm mt-1">Mon-Fri, 9am-6pm</p>
                                <a href="tel:+6583723049" className="block mt-1 font-medium">
                                    +65 8372 3049
                                </a>
                                <a href="tel:+6584505019" className="block mt-1 font-medium">
                                    +65 8450 5019
                                </a>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="overflow-hidden border-none shadow-md rounded-none">
                    <div className="h-1 bg-primary"></div>
                    <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3">
                                <Mail className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-medium">Email</h3>
                                <p className="text-muted-foreground text-sm mt-1">We'll respond within 24 hours</p>
                                <a href="mailto:info@lukreative.com" className="block mt-1 font-medium">
                                    info@lukreative.com
                                </a>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="overflow-hidden border-none shadow-md rounded-none">
                    <div className="h-1 bg-primary"></div>
                    <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3">
                                <MapPin className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-medium">Address</h3>
                                <p className="text-muted-foreground text-sm mt-1">Visit our studio</p>
                                <p className="mt-1">
                                    8 Burn Road, Trivex,
                                    <br />
                                    Singapore 369977
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="overflow-hidden border-none shadow-md rounded-none">
                    <div className="h-1 bg-primary"></div>
                    <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3">
                                <Clock className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-medium">Business Hours</h3>
                                <p className="text-muted-foreground text-sm mt-1">When we're available</p>
                                <p className="mt-1">Monday to Friday: 9am - 6pm</p>
                                <p className="mt-1">Saturday: 10am - 3pm</p>
                                <p className="mt-1">Sunday: Closed</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default ContactInfo
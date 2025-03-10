import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Send } from 'lucide-react'

const ContactForm = () => {
    return (
        <div>
            <Card className="overflow-hidden border-none shadow-xl rounded-none">
                <div className="h-1 bg-primary"></div>
                <CardContent className="p-8">
                    <div className="relative mb-6">
                        <div className="absolute top-0 left-0 w-12 h-1 bg-primary"></div>
                        <h2 className="text-2xl font-bold pt-4">Send a Message</h2>
                        <p className="text-muted-foreground mt-2">
                            Fill out the form below and we'll get back to you as soon as possible.
                        </p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">
                                    Full Name
                                </label>
                                <Input
                                    id="name"
                                    placeholder="John Doe"
                                    className="border-muted-foreground/20 focus-visible:ring-primary"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">
                                    Email Address
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    className="border-muted-foreground/20 focus-visible:ring-primary"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium">
                                    Phone Number
                                </label>
                                <Input
                                    id="phone"
                                    placeholder="+65 1234 5678"
                                    className="border-muted-foreground/20 focus-visible:ring-primary"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">
                                    Subject
                                </label>
                                <Input
                                    id="subject"
                                    placeholder="Interior Design Consultation"
                                    className="border-muted-foreground/20 focus-visible:ring-primary"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">
                                Your Message
                            </label>
                            <Textarea
                                id="message"
                                placeholder="Tell us about your project..."
                                className="min-h-[150px] border-muted-foreground/20 focus-visible:ring-primary"
                            />
                        </div>

                        <Button className="w-full sm:w-auto gap-2 text-base">
                            Send Message
                            <Send className="h-4 w-4" />
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default ContactForm
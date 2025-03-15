"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Mail, MessageSquare, Send } from "lucide-react"
import { useState } from "react"
function SubmitButton() {
    const [pending, setPending] = useState(false)

    return (
        <button
            type="submit"
            disabled={pending}
            className="group relative flex items-center justify-center w-full  px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
        >
            <span className="flex items-center">
                {pending ? (
                    <>
                        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mr-2">
                            Sending
                        </motion.div>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        >
                            <Send className="w-4 h-4" />
                        </motion.div>
                    </>
                ) : (
                    <>
                        Send Message
                        <motion.div className="ml-2 group-hover:translate-x-1 transition-transform">
                            <ArrowRight className="w-4 h-4" />
                        </motion.div>
                    </>
                )}
            </span>
        </button>
    )
}

export default function ContactSection() {
    const [submitted, setSubmitted] = useState(false)

    async function handleSubmit(formData: FormData) {
        // await sendEmail(formData)
        setSubmitted(true)
    }

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
            },
        },
    }

    return (
        <section
            style={{ backgroundImage: `url('/contact-us.jpg')` }}
            className="h-full w-full bg-cover relative"
        >
            <div className="bg-white w-full h-full bg-cover absolute opacity-80"></div>
            <div className="container mx-auto py-32 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid lg:grid-cols-2 gap-12 lg:gap-20"
                >
                    {/* Left Column - Contact Info */}
                    <motion.div variants={itemVariants} className="space-y-8 text-primary">
                        <div className="space-y-4">
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-primary font-bold"
                            >
                                Get in Touch
                            </motion.span>
                            <h2 className="text-3xl md:text-4xl font-bold">Let's Work Together</h2>
                            <p className="max-w-md text-primary font-medium">
                                Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you as soon
                                as possible.
                            </p>
                        </div>

                        <motion.div variants={containerVariants} className="space-y-6">
                            <motion.div variants={itemVariants} className="flex items-start space-x-4 text-primary">
                                <div className="mt-1 bg-primary rounded-none p-3 shadow-sm">
                                    <Mail className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-medium">Email</h3>
                                    <p className="text-primary font-medium">hello@company.com</p>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex items-start space-x-4">
                                <div className="mt-1 bg-primary rounded-none p-3 shadow-sm">
                                    <MessageSquare className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-medium">Live Chat</h3>
                                    <p className="text-primary font-medium">Available Mon-Fri, 9am-6pm</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Decorative Elements */}
                        <div className="relative">
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }}
                                className="absolute -left-8 -top-8 w-24 h-24 bg-red-500/10 rounded-full blur-2xl"
                            />
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.2, 0.5, 0.2],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                    delay: 1,
                                }}
                                className="absolute right-0 bottom-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"
                            />
                        </div>
                    </motion.div>

                    {/* Right Column - Contact Form */}
                    <motion.div variants={itemVariants} className="relative">
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center space-y-4 p-8"
                            >
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Thank You!</h3>
                                <p className="text-gray-600">Your message has been sent successfully. We'll get back to you soon.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="text-sm text-gray-500 hover:text-gray-900 underline underline-offset-4"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                action={handleSubmit}
                                variants={containerVariants}
                                className="space-y-6 bg-transparent backdrop-blur-lg rounded-2xl p-8 shadow-sm"
                            >
                                <motion.div variants={itemVariants} className="w-full">
                                    <Label htmlFor="email">
                                        Name
                                    </Label>
                                    <div>
                                        <Input className="py-6"  placeholder="Your email"/>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants} className="w-full">
                                    <Label htmlFor="email">
                                        Email
                                    </Label>
                                    <div>
                                        <Input className="py-6" placeholder="Type your email" type="email"/>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        className="input w-full"
                                        placeholder="Tell us about your project..."
                                    />
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <SubmitButton />
                                </motion.div>
                            </motion.form>
                        )}

                        {/* Decorative grid */}
                        <div className="absolute inset-0 -z-10 grid grid-cols-12 grid-rows-6 gap-4">
                            {Array.from({ length: 72 }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: Math.random() * 0.12 }}
                                    transition={{
                                        duration: 2,
                                        repeat: Number.POSITIVE_INFINITY,
                                        repeatType: "reverse",
                                        delay: Math.random() * 2,
                                    }}
                                    className="w-full h-full bg-gray-900/5 rounded-full"
                                />
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}


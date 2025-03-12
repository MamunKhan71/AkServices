"use client"

import ComponentHeader from "@/components/ComponentHeader"
import { cn } from "@/lib/utils"
import { CheckCircle, Clock, Notebook, User, Video } from "lucide-react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function ScheduleConfirmation() {
    const searchParams = useSearchParams()
    const queryData = Object.fromEntries(searchParams.entries())

    return (
        <div className="flex flex-col items-center justify-center h-full w-full mt-10 container mx-auto">
            <div className={cn(`text-center mb-16 bg-primary text-white p-6 w-full space-y-2`)}>
                <h2 className="text-4xl font-bold">Book A Schedule</h2>
                <p className="text-gray-100 ">
                    Book your appointment online and let us know your needs
                </p>
            </div>
            <div className="w-full max-w-xl bg-white border border-primary/50 rounded-none shadow-md overflow-hidden p-2 md:p-8">
                <div className="flex flex-col items-center pb-4">
                    <div className="relative w-20">
                        <Image
                            src={"/acote-logo.png"}
                            alt="Profile"
                            width={80}
                            height={80}
                            className="rounded-full relative z-10"
                        />
                    </div>

                    <div className="flex items-center gap-2 text-green-600 font-medium text-lg">
                        <CheckCircle className="h-5 w-5 fill-green-600 text-white" />
                        <span>You are scheduled</span>
                    </div>

                    <p className="text-gray-500 mt-2 text-center px-4">
                        A calendar invitation has been sent to your email address.
                    </p>
                </div>

                <div className="border rounded-none border-gray-200 p-5">
                    <h2 className="font-bold text-primary mb-4 text-base">{queryData.title || "Schedule eClosing"}</h2>

                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-gray-600">
                            <User className="h-5 w-5 text-gray-400 flex-shrink-0" />
                            <span>{queryData.attendeeName || "Acote Group LTD"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                            <Clock className="h-5 w-5 text-gray-400 flex-shrink-0" />
                            <span>
                                {queryData.attendeeStartTime
                                    ? `${new Date(queryData.attendeeStartTime).toLocaleDateString("en-US", {
                                        weekday: "long",
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}, ${new Date(queryData.attendeeStartTime).toLocaleTimeString("en-US", {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        hour12: true,
                                    })} - ${new Date(queryData.endTime).toLocaleTimeString("en-US", {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        hour12: true,
                                    })}`
                                    : "Time not available"}
                            </span>
                        </div>

                        <div className="flex items-center gap-3 text-gray-600">
                            <Video className="h-5 w-5 text-gray-400 flex-shrink-0" />
                            <span className="capitalize">Google {queryData.location ? queryData.location.split(":").pop() : "Not provided"}</span>
                        </div>

                        <div className="flex items-center gap-3 text-gray-600">
                            <Notebook className="h-5 w-5 text-gray-400 flex-shrink-0" />
                            <span>{queryData.description || "Web conferencing details to follow."}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function ConfirmationPage() {
    return (
        <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
            <ScheduleConfirmation />
        </Suspense>
    )
}

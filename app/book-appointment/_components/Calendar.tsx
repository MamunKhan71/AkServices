
import { cn } from "@/lib/utils";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function CalendarScheduler() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return (
        <div className="relative w-full h-full container mx-auto overflow-hidden pt-10 bg-white">
            <div className={cn(`text-center mb-16 bg-primary text-white p-6 w-full space-y-2`)}>
                <h2 className="text-4xl font-bold">Book A Schedule</h2>
                <p className="text-gray-100 ">
                    Book your appointment online and let us know your needs
                </p>
            </div>
            <div className="w-full h-full mt-10">
                <Cal namespace="30min"
                    className="w-full h-full"
                    calLink="ak-services-pte-ltd/ak-services-pte-ltd"
                    style={{ width: "100%", height: "100%" }}
                    config={{ "layout": "month_view" }}
                />
            </div>
            <div className="hidden md:block bg-white absolute bottom-0 z-30 py-8 px-12 left-1/2 -translate-x-1/2">
            </div>
        </div>
    )
};
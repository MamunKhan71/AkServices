"use client";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsappButton = () => {
    return (
        <FloatingWhatsApp
            phoneNumber="+8801643091606"
            notificationSound={true}
            notificationSoundSrc="/public/whatsapp.mp3"
            accountName="Ak Contractor Services LTD."
            avatar="https://via.placeholder.com/150"
        />
    )
}

export default WhatsappButton
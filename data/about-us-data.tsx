import { Cpu, Hospital, Speech, LucideIcon, MapPin } from "lucide-react";

export interface aboutUsDataTypes {
    icon: LucideIcon,
    title: string,
    description: string,
}

export const aboutUsData: aboutUsDataTypes[] = [
    {
        icon: Hospital,
        title: "Company Registration",
        description: "Registered at ACRA on Aug 12 2023. UEN: 202332476Z."
    },
    {
        icon: MapPin,
        title: "Company Details",
        description: "3018 BEDOK NORTH STREET 5, #03-29, EASTLINK, Singapore 486132."
    },
    {
        icon: Speech,
        title: "Services Offered",
        description: "House renovation, Electrical, Glass partitions, Heater Installation, Painting, Door Lock Repair, Dismantle Services."
    },
    {
        icon: Speech,
        title: "Contact Information",
        description: "Contact: +65 86503828"
    }
];

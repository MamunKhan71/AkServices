"use client"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { navbarRoutes } from "@/data/navbar-routes"
import DummyLogo from "./footer/components/icon/dummyLogo"
import { ServicesDropdown } from "./services-dropdown"

export default function Navbar() {
    const [menuItems, setMenuItems] = useState(navbarRoutes)
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white">
            <div className="container flex h-20 items-center justify-between mx-auto">
                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="lg:hidden">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-80">
                        <SheetTitle />
                        <nav className="flex flex-col gap-4">
                            {menuItems.map((item, index) => (
                                <div key={index}>
                                    {item.submenu ? (
                                        <div className="flex flex-col gap-2">
                                            <div className="text-lg font-semibold">{item.label}</div>
                                            {item.submenu.map((sub, subIndex) => (
                                                <Link key={subIndex} href={sub.items[subIndex].href} className="pl-4 text-muted-foreground hover:text-primary">
                                                    {sub.items[subIndex].label}
                                                </Link>
                                            ))}
                                        </div>
                                    ) : (
                                        <Link href={item.href} className="text-lg font-semibold">
                                            {item.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <Button className="mt-4">Book Now</Button>
                        </nav>
                    </SheetContent>
                </Sheet>

                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <DummyLogo />
                </Link>

                {/* Desktop Navigation */}
                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList>
                        {menuItems.map((item, index) => (
                            <NavigationMenuItem key={index}>
                                {item.submenu ? (
                                    <>
                                        <ServicesDropdown />
                                    </>
                                ) : (
                                    <Link href={item.href} legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.label}</NavigationMenuLink>
                                    </Link>
                                )}
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Book Now Button */}
                <Link href={'/book-appointment'}>
                    <Button className="hidden lg:inline-flex">Book Now</Button>
                </Link>
            </div>
        </header>
    )
}

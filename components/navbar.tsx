"use client"
import { Menu } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import DummyLogo from "./footer/components/icon/dummyLogo"

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b backdrop-blur-md">
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
                            <Link href="/" className="text-lg font-semibold">
                                Home
                            </Link>
                            <div className="flex flex-col gap-2">
                                <div className="text-lg font-semibold">Services</div>
                                <Link href="/services/interior" className="pl-4 text-muted-foreground hover:text-primary">
                                    Interior Design
                                </Link>
                                <Link href="/services/renovation" className="pl-4 text-muted-foreground hover:text-primary">
                                    Renovation
                                </Link>
                                <Link href="/services/consultation" className="pl-4 text-muted-foreground hover:text-primary">
                                    Consultation
                                </Link>
                            </div>
                            <Link href="/portfolio" className="text-lg font-semibold">
                                Portfolio
                            </Link>
                            <Link href="/about" className="text-lg font-semibold">
                                About
                            </Link>
                            <Link href="/contact" className="text-lg font-semibold">
                                Contact
                            </Link>
                            <Button className="mt-4">Book Now</Button>
                        </nav>
                    </SheetContent>
                </Sheet>

                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 jc">
                    <DummyLogo />
                </Link>

                {/* Desktop Navigation */}
                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className="group bg-transparent inline-flex h-10 w-max items-center justify-center px-4 py-2 text-base font-medium transition-colors hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                    Home
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="text-base">Services</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid w-[400px] gap-3 p-2">
                                    <Link
                                        href="/services/interior"
                                        className="block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                        <div className="text-base font-medium leading-none">Interior Design</div>
                                        <p className="line-clamp-2 text-base leading-snug text-muted-foreground">
                                            Transform your space with our professional interior design services
                                        </p>
                                    </Link>
                                    <Link
                                        href="/services/renovation"
                                        className="block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                        <div className="text-base font-medium leading-none">Renovation</div>
                                        <p className="line-clamp-2 text-base leading-snug text-muted-foreground">
                                            Complete renovation solutions for your home or office
                                        </p>
                                    </Link>
                                    <Link
                                        href="/services/consultation"
                                        className="block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                        <div className="text-base font-medium leading-none">Consultation</div>
                                        <p className="line-clamp-2 text-base leading-snug text-muted-foreground">
                                            Expert advice and planning for your interior projects
                                        </p>
                                    </Link>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem >
                            <Link href="/portfolio" legacyBehavior passHref>
                                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center bg-transparent px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                    Portfolio
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/about" legacyBehavior passHref>
                                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center bg-transparent px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                    About
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/contact-us" legacyBehavior passHref>
                                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center bg-transparent px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                    Contact
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Book Now Button */}
                <Button className="hidden lg:inline-flex">Book Now</Button>
            </div>
        </header>
    )
}


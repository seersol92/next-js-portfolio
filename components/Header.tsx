import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="text-white py-6 ">
        <div className="container mx-auto flex justify-between item-center">
            <Link href={"/"}>
                <h1 className="text-4xl font-semibold">
                    Hamad 
                    <span className="text-accent">.</span>
                </h1>
            </Link>
            {/* Desktop Nav */}
            <div className="hidden md:flex gap-8 items-center">
                <Nav />
                <Link href={"/"}>
                    <Button>Hire Me</Button>
                </Link>
            </div>

            {/* Mobile Nav */}
            <div className="md:hidden">
               <MobileNav />
            </div>
        </div>
    </header>
  )
}

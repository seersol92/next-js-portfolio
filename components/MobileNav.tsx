"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci"

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];


export default function MobileNav() {
 const pathName = usePathname()
  return (
    <>
        <Sheet>
            <SheetTrigger className="flex justify-center items-center text-[32px] text-accent">
                <CiMenuFries/>
            </SheetTrigger>
            <SheetContent className="flex flex-col bg-primary">
                <div className="mt-20 mb-5 text-center">
                    <Link href={"/"}>
                        <h1 className="text-4xl font-semibold">
                            Hamad 
                            <span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-6">
                    {links.map((link, index) => {
                        return (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${
                            pathName === link.path && " text-accent border-b-2 border-accent"
                            } font-medium capitalize hover:text-accent transition-all`}
                        >
                            {link.name}
                        </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    </>
  )
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    name: "about",
    path: "/about",
  },
];


export default function Nav() {
  const pathName = usePathname();
  return (
    <nav className="flex gap-4">
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
  );
}

"use client";
import { Metadata } from "next";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./style.css"

export const generateMetaData: Metadata = {
  title: "Auth",
};
const navLinks = [
  { name: "register", href: "/register" },
  { name: "login", href: "/login" },
  { name: "forgot", href: "/forgot" },
];

export default function ({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link href={link.href} key={link.name} className={isActive ? "font-bold mr-4": "text-blue-500 mr-4"}>
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}

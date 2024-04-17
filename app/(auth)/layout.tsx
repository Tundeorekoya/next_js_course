"use client";
import { Metadata } from "next";
import { usePathname } from "next/navigation";

export const generateMetaData: Metadata = {
  title: "Auth",
};
const navLinks = [
  { name: "register", href: "/register" },
  { name: "login", href: "/login" },
  { name: "forget-password", href: "/forget-password" },
];

export default function ({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <link href={link.href} key={link.name}>
            {link.name}
          </link>
        );
      })}
      {children}
    </div>
  );
}

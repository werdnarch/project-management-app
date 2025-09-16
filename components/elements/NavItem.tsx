import React, { ElementType, ReactNode } from "react";
import Link from "next/link";

interface NavItemProps {
  link?: string;
  name: string;
  icon: ReactNode;
}

export default function NavItem({ name, link = name, icon }: NavItemProps) {
  return (
    <li>
      <Link
        href={`/${link.trim().toLowerCase().replace(/\s+/g, "-")}`}
        className=" flex items-center gap-2 p-2 px-3 group hover:bg-[#00b4d8]/60 transition-all duration-150 ease-in-out rounded-sm"
      >
        {icon}
        <p>{name}</p>
      </Link>
    </li>
  );
}

"use client";
import { useSidebar } from "@/context/SideBarContext";
import React from "react";
import Link from "next/link";
import { ChevronRight, ChevronRightIcon, Sidebar } from "lucide-react";
import { usePathname } from "next/navigation";

export default function NavIndicator() {
  const { sidebarOpen, setSidebarOpen, toggleSidebar } = useSidebar();
  const pathname = usePathname();

  function capitalizeWords(str: string) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  const nav = pathname.trim().split("/").filter(Boolean);

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={toggleSidebar}
        className=" flex items-center gap-2 p-2  group hover:bg-[#00b4d8]/60 transition-all duration-150 ease-in-out rounded-sm"
      >
        <Sidebar className="size-5" />
      </button>

      <div className="flex items-center gap-2">
        <Link
          href={"/"}
          className="not-hover:text-zinc-500 transition-all duration-300"
        >
          <p>Aligno</p>
        </Link>
        {nav.map((item, index) => {
          const href = "/" + nav.slice(0, index + 1).join("/");

          return (
            <div key={`nav-${index}`} className="flex items-center gap-1">
              {index !== nav.length && (
                <ChevronRightIcon width={15} className="text-zinc-500" />
              )}
              <Link
                href={href}
                className={`  transition-all duration-300  ${
                  index === nav.length - 1 ? "" : "not-hover:text-zinc-500"
                }`}
              >
                <p>{capitalizeWords(item.replace("-", " "))}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";
import Link from "next/link";
import {
  CalendarX,
  FileStack,
  Folder,
  GitBranch,
  HomeIcon,
  LineChartIcon,
  Settings2,
  Settings2Icon,
} from "lucide-react";
import ThemeToggle from "../ui/themeToggle";
import { useSidebar } from "@/context/SideBarContext";

export default function SideNav() {
  const { sidebarOpen } = useSidebar();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <aside
      className={`border-r-1 h-full w-[20%] hidden  ${
        sidebarOpen ? "max-w-[350px]" : "max-w-[0px] pointer-events-none"
      }  containers lg:flex flex-col transition-all duration-200 ease-in-out `}
    >
      <div
        className={`w-full h-full flex flex-col ${
          sidebarOpen
            ? "opacity-100 delay-[250ms]"
            : "opacity-0 pointer-events-none"
        } `}
      >
        <div className="w-full p-4 md:p-6 flex items-center gap-3 border-b-1">
          <div className="bg-[#00b4d8] p-2 aspect-square rounded-md text-sm flex items-center justify-center">
            &lt;/&gt;
          </div>
          <div>
            <h1 className="font-bold text-lg logo">Aligno</h1>
            <p className="text-[0.8rem]/2 font-light opacity-70">
              Project manager
            </p>
          </div>
        </div>

        <nav className="flex flex-col gap-4 p-4 md:p-6 border-b-1 flex-1">
          <p className="text-sm">Navigation</p>
          <ul className="w-full flex flex-col gap-2">
            <NavItem name="Dashboard" icon={<HomeIcon className="size-4" />} />
            <NavItem name="Projects" icon={<Folder className="size-4" />} />
            <NavItem
              name="Analytics"
              icon={<LineChartIcon className="size-4" />}
            />
            <NavItem name="Github" icon={<GitBranch className="size-4" />} />

            <NavItem
              name="Tech Stack"
              icon={<FileStack className="size-4" />}
            />
            <NavItem name="Timeline" icon={<CalendarX className="size-4" />} />
          </ul>
        </nav>
        <div className="w-full p-4 md:p-6 flex items-center gap-3 border-b-1">
          <Link
            href={`/settings`}
            className="w-full flex items-center gap-2 p-2 px-3 group hover:bg-[#00b4d8]/60 transition-all duration-150 ease-in-out rounded-sm"
          >
            <Settings2Icon className="size-4" />
            <p>Settings</p>
          </Link>

          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}

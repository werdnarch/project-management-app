import React from "react";
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

export default function SideNav() {
  return (
    <aside className="border-r-1 h-full  w-[20%] max-w-[350px] container flex flex-col ">
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

          <NavItem name="Tech Stack" icon={<FileStack className="size-4" />} />
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
    </aside>
  );
}

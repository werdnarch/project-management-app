import LogOut from "@/components/logout";
import ThemeToggle from "@/components/ui/themeToggle";
import React from "react";

export default function Page() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-2">
      <p>DASHBOARD</p>

      <ThemeToggle />
      <LogOut />
    </div>
  );
}

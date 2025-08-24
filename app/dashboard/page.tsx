import LogOut from "@/components/logout";
import React from "react";

export default function Page() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-between">
      <p>DASHBOARD</p>
      <LogOut />
    </div>
  );
}

import React, { ReactNode } from "react";

interface ContainerProps {
  name: string;
  description: string;
  status: "Planning" | "In Progress" | "Review" | "Completed" | "On Hold";
  priority: "High" | "Medium" | "Low";
}

export default function ProjectContainer({
  name,
  description,
  priority,
  status,
}: ContainerProps) {
  return (
    <div className="w-full containers p-4 md:p-6 rounded-lg flex flex-col gap-4">
      <header className="flex items-center justify-between">
        <h1 className="text-lg font-bold">{name}</h1>
      </header>
      <div className="flex items-center flex-wrap gap-4">
        <div
          className={`${
            status === "Planning"
              ? "bg-[#262626]"
              : status === "In Progress"
              ? "bg-[#517cd9]"
              : status === "Review"
              ? "bg-[#f0503d]"
              : status === "Completed"
              ? "bg-[#00c951]"
              : status === "On Hold"
              ? "bg-[#e7000b]"
              : null
          }  p-1 px-2 rounded-sm`}
        >
          <p className="text-sm">{status}</p>
        </div>
        <div
          className={` ${
            priority === "High"
              ? "bg-[#e7000b]"
              : priority === "Medium"
              ? "bg-[#f0503d]"
              : priority === "Low"
              ? "bg-[#262626]"
              : null
          }  p-1 px-2 rounded-sm`}
        >
          <p className="text-sm">{priority}</p>
        </div>
      </div>
      <p className="opacity-70 text-sm">{description}</p>
    </div>
  );
}

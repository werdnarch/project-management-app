import React, { ReactNode } from "react";

interface ContainerProps {
  name: string;
  icon: ReactNode;
  value: number;
}

export default function DashboardContainer({
  name,
  icon,
  value,
}: ContainerProps) {
  return (
    <div className="w-full containers p-4 md:p-6 rounded-lg flex flex-col gap-6">
      <header className="flex items-center justify-between">
        <h1 className="opacity-60">{name}</h1>
        {icon}
      </header>
      <div>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}

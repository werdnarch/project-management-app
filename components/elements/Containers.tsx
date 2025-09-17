import React, { ReactNode } from "react";

interface ContainerProps {
  heading: string;
  description: string;
  children: ReactNode;
}

export default function Containers({
  heading,
  description,
  children,
}: ContainerProps) {
  return (
    <div className="w-full container rounded-2xl flex flex-col gap-4 md:gap-6 p-4 md:p-8 h-full">
      <header>
        <h1 className="text-lg font-bold">{heading}</h1>
        <p className="opacity-70">{description}</p>
      </header>
      <section className="w-full">{children}</section>
    </div>
  );
}

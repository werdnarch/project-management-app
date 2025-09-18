import NavIndicator from "@/components/elements/NavIndicator";
import React from "react";

export default function Page() {
  return (
    <section className="h-full w-full flex flex-col p-4 md:p-8 lg:p-12 gap-4 md:gap-8 max-w-[1400px] mx-auto">
      <NavIndicator />
      <header className="flex projects items-center justify-between"></header>

      <section className="flex-1"></section>
    </section>
  );
}

import Technology from "@/components/ui/Technology";
import ThemeToggle from "@/components/ui/themeToggle";
import { PackageIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import * as SiIcons from "react-icons/si";

export default function Page() {
  const tech = [
    {
      name: "Next.js",
      description:
        "A React framework with app router for building modern web applications.",
      link: "https://nextjs.org/",
      icon: "SiNextdotjs",
    },
    {
      name: "React",
      description: "A JavaScript library for building user interfaces.",
      link: "https://react.dev/",
      icon: "SiReact",
    },
    {
      name: "TypeScript",
      description:
        "A typed superset of JavaScript that provides static type checking.",
      link: "https://www.typescriptlang.org/",
      icon: "SiTypescript",
    },
    {
      name: "Tailwind CSS",
      description:
        "A utility-first CSS framework for styling applications quickly.",
      link: "https://tailwindcss.com/",
      icon: "SiTailwindcss",
    },
    {
      name: "Radix UI",
      description:
        "Accessible UI primitives for building design systems and apps.",
      link: "https://www.radix-ui.com/",
      icon: "SiRadixui",
    },
    {
      name: "Lucide React",
      description: "A collection of beautiful, customizable React icons.",
      link: "https://lucide.dev/",
      icon: "SiLucide",
    },
    {
      name: "next-themes",
      description:
        "A library for managing dark mode and themes in Next.js apps.",
      link: "https://github.com/pacocoursey/next-themes",
      icon: "SiNextdotjs",
    },
    {
      name: "Drizzle ORM",
      description: "A TypeScript-first ORM for type-safe database operations.",
      link: "https://orm.drizzle.team/",
      icon: "SiDrizzle",
    },
    {
      name: "Neon",
      description: "A serverless Postgres database platform.",
      link: "https://neon.tech/",
      icon: "SiPostgresql",
    },
    {
      name: "Better Auth",
      description: "A secure authentication solution for web applications.",
      link: "https://www.better-auth.com/",
      icon: "SiAuth0",
    },
    {
      name: "React Hook Form",
      description:
        "A performant form library for React with minimal re-renders.",
      link: "https://react-hook-form.com/",
      icon: "SiReact",
    },
    {
      name: "Zod",
      description: "A TypeScript-first schema validation library.",
      link: "https://zod.dev/",
      icon: "SiZod",
    },
  ];

  return (
    <div className="h-full w-full flex flex-col mx-auto max-w-5xl">
      <header className="w-full flex items-center justify-between p-4 md:p-8">
        <PackageIcon className="size-10" />

        <ThemeToggle />
      </header>
      <section className="flex-1 flex flex-col gap-8 justify-center items-center">
        <div className="flex flex-col items-center text-center gap-2">
          <PackageIcon className="size-10" />
          <h1 className="text-3xl font-bold">Next.js Starter Kit</h1>
          <p>Build faster. Launch sooner. Scale smarter.</p>
        </div>

        <div className="w-full grid grid-cols-3 gap-4">
          {tech.map((tech, index: number) => (
            <Link href={tech.link} key={`tech-${index}`}>
              <Technology
                name={tech.name}
                description={tech.description}
                icon={SiIcons[tech.icon as keyof typeof SiIcons]}
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

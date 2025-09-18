"use client";

import NavIndicator from "@/components/elements/NavIndicator";
import ProjectContainer from "@/components/elements/ProjectContainer";
import Select from "@/components/elements/Select";
import { ProjectType } from "@/types";
import React, { useState } from "react";

export default function Page() {
  const Projects: ProjectType[] = [
    {
      name: "E-commerce Dashboard",
      description:
        "React-based admin panel with real-time analytics and inventory management",
      status: "In Progress",
      priority: "High",
    },
    {
      name: "Mobile Banking App",
      description:
        "Flutter app with biometric authentication and real-time transactions",
      status: "Review",
      priority: "Medium",
    },
    {
      name: "AI Content Generator",
      description: "OpenAI-powered content creation tool with custom templates",
      status: "Planning",
      priority: "Low",
    },
    {
      name: "Task Management API",
      description:
        "RESTful API for project management with team collaboration features",
      status: "Completed",
      priority: "Medium",
    },
    {
      name: "Portfolio Website",
      description: "Personal portfolio with blog and project showcase",
      status: "On Hold",
      priority: "Low",
    },
    {
      name: "Weather Dashboard",
      description:
        "Real-time weather data visualization with location-based forecasts",
      status: "In Progress",
      priority: "Medium",
    },
  ];

  const [statusSelect, setStatusSelect] = useState<
    | "All Status"
    | "Planning"
    | "In Progress"
    | "Review"
    | "Completed"
    | "On Hold"
  >("All Status");

  const [prioritySelect, setPrioritySelect] = useState<
    "All Priority" | "High" | "Medium" | "Low"
  >("All Priority");

  return (
    <section className="h-full w-full flex flex-col p-4 md:p-8 lg:p-12 gap-4 md:gap-8 max-w-[1400px] mx-auto">
      <NavIndicator />
      <header className="flex  items-center justify-between">
        <p>Test</p>
        <div className="flex items-center justify-between gap-4">
          <Select
            select={statusSelect}
            options={[
              "All Status",
              "Planning",
              "In Progress",
              "Review",
              "Completed",
              "On Hold",
            ]}
            setOption={setStatusSelect}
          />
          <Select
            select={prioritySelect}
            options={["All Priority", "High", "Medium", "Low"]}
            setOption={setPrioritySelect}
          />
        </div>
      </header>

      <section className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Projects.filter((project: ProjectType) => {
          const statusMatch =
            statusSelect === "All Status" || project.status === statusSelect;
          const priorityMatch =
            prioritySelect === "All Priority" ||
            project.priority === prioritySelect;

          return statusMatch && priorityMatch;
        }).map((project, index: number) => (
          <ProjectContainer
            key={`project-${index}`}
            name={project.name}
            description={project.description}
            priority={project.priority}
            status={project.status}
          />
        ))}
      </section>
    </section>
  );
}

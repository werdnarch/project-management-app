"use client";
import Containers from "@/components/elements/Containers";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getWelcomeMessage } from "./actions";
import Loading from "@/components/Loading";
import DashboardContainer from "@/components/elements/DashboardContainer";
import { CheckCircle, GitBranch, Timer } from "lucide-react";
import NavIndicator from "@/components/elements/NavIndicator";

export default function Page() {
  const { data, isPending, error } = useQuery({
    queryKey: ["Hello"],
    queryFn: getWelcomeMessage,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  if (error) return "error has occured " + error;

  if (isPending) return <Loading />;

  return (
    <section className="h-full w-full flex flex-col p-4 md:p-8 lg:p-12 gap-4 md:gap-8 max-w-7xl mx-auto ">
      <NavIndicator />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-4 md:gap-8 ">
        <DashboardContainer
          name="Active Projects"
          icon={<div className="text-sm text-[#00b4d8]">&lt;/&gt;</div>}
        />
        <DashboardContainer
          name="Completed"
          icon={<CheckCircle className="size-4 text-[#70e000]" />}
        />
        <DashboardContainer
          name="Github Repos"
          icon={<GitBranch className="size-4 text-[#ef233c]" />}
        />
        <DashboardContainer
          name="Hours Tracked"
          icon={<Timer className="size-4 text-[#ff6000]" />}
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-4 flex-1 ">
        <div className="flex-1 ">
          <Containers
            heading="Active Projects"
            description="Your current development projects and their progress"
          >
            <p></p>
          </Containers>
        </div>
        <div className="flex flex-col gap-4 lg:w-[40%]">
          <Containers
            heading="Quick Actions"
            description="Common tasks and shortcuts"
          >
            <p></p>
          </Containers>
          <Containers
            heading="Recent Activity"
            description="Latest updates across your projects"
          >
            <p></p>
          </Containers>
        </div>
      </div>
    </section>
  );
}

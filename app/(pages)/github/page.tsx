"use client";
import Containers from "@/components/elements/Containers";
import React from "react";
import DashboardContainer from "@/components/elements/DashboardContainer";
import {
  CheckCircle,
  GitBranch,
  GitCommit,
  GitPullRequestIcon,
  MessageCircleWarningIcon,
  Timer,
} from "lucide-react";
import NavIndicator from "@/components/elements/NavIndicator";
import { useQuery } from "@tanstack/react-query";
import getUserDetails from "./actions";
import Loading from "@/components/Loading";

export default function Page() {
  return (
    <section className="h-full w-full flex flex-col p-4 md:p-8 lg:p-12 gap-4 md:gap-8 max-w-[1400px] mx-auto ">
      <NavIndicator />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-4 md:gap-8">
        <DashboardContainer
          name="Repositories"
          icon={<GitBranch className="text-[#00b4d8] size-4" />}
          value={0}
        />
        <DashboardContainer
          name="Total Commits"
          icon={<GitCommit className="size-4 text-[#ff6000]" />}
          value={0}
        />
        <DashboardContainer
          name="Pull Requests"
          icon={<GitPullRequestIcon className="size-4 text-[#ef233c]" />}
          value={0}
        />
        <DashboardContainer
          name="Issues"
          icon={<MessageCircleWarningIcon className="size-4 text-[#ffd000] " />}
          value={0}
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-4 flex-1">
        <div className="flex-1">
          <Containers
            heading="Repositories"
            description="Your GitHub repositories and their current status"
          >
            <p></p>
          </Containers>
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-[40%]">
          <Containers
            heading="Recent Activity"
            description="Latest GitHub activity across your repositories"
          >
            <p></p>
          </Containers>
          <Containers
            heading="Quick Actions"
            description="Common GitHub operations"
          >
            <p></p>
          </Containers>
          <Containers
            heading="This Week"
            description="Your GitHub activity summary"
          >
            <p></p>
          </Containers>
        </div>
      </div>
    </section>
  );
}

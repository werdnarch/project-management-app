"use client";

import LogOut from "@/components/logout";
import ThemeToggle from "@/components/ui/themeToggle";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getWelcomeMessage } from "./actions";
import Loading from "@/components/Loading";

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
    <div className="h-full w-full flex flex-col items-center justify-center gap-2">
      <p>{data.message}</p>
      <ThemeToggle />
      <LogOut />
    </div>
  );
}

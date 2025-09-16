import { notFound } from "next/navigation";
import { WelcomeMessage } from "@/types";

export const getWelcomeMessage = async () => {
  const res = await fetch("/api/welcome");

  if (!res.ok) {
    return notFound();
  }

  const data: WelcomeMessage = await res.json();

  return data;
};

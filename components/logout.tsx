"use client";

import React from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LogOut() {
  const router = useRouter();
  const handleLogOut = async () => {
    try {
      const { error } = await authClient.signOut();
      if (error) {
        console.error("Sign out error:", error);
      } else {
        router.push("/");
      }
    } catch (err) {
      console.error("Unexpected sign out error:", err);
    }
  };
  return (
    <Button variant={"outline"} onClick={handleLogOut}>
      Log Out <LogOutIcon className="size-4" />
    </Button>
  );
}

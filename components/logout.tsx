"use client";

import React from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { LogOutIcon } from "lucide-react";

export default function LogOut() {
  const handleLogOut = async () => {
    await authClient.signOut();
  };

  return (
    <Button variant={"outline"} onClick={handleLogOut}>
      Log Out <LogOutIcon className="size-4" />
    </Button>
  );
}

import React from "react";
import { Loader2Icon } from "lucide-react";

export default function Loading() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Loader2Icon className="size-10 animate-spin" />
    </div>
  );
}

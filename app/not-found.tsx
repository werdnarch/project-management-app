import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Card className="w-[90%] max-w-[400px] text-center">
        <CardHeader>
          <CardTitle className="font-bold text-2xl">Not Found</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <p>The page you are looking for does not exist</p>
          <Link href="/" className="hover:underline text-sm w-fit">
            Home
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

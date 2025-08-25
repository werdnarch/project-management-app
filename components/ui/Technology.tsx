import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { IconType } from "react-icons";

interface TechProps {
  name: string;
  description: string;
  icon: IconType;
}

export default function Technology({
  name,
  description,
  icon: Icon,
}: TechProps) {
  return (
    <Card className="scale-98 hover:scale-100 transition-all duration-150 ease-in-out">
      <CardHeader className="flex flex-col gap-2">
        <Icon size={24} />
        <CardTitle className="text-md">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm opacity-80">{description}</p>
      </CardContent>
    </Card>
  );
}

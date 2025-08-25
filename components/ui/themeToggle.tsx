"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) return null;

  return (
    <Button
      variant={"outline"}
      onClick={handleThemeClick}
      className="cursor-pointer scale-100 hover:scale-95 transition-all duration-300 ease-in-out "
    >
      {theme == "light" ? (
        <SunIcon className="size-4" />
      ) : (
        <MoonIcon className="size-4" />
      )}
    </Button>
  );
}

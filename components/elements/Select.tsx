"use client";

import { useClickOutside } from "@/hooks/useClickOutside";
import { ChevronDown } from "lucide-react";
import React, { useRef, useState } from "react";

interface SelectProps<T extends string> {
  select: T;
  options: T[];
  setOption: React.Dispatch<React.SetStateAction<T>>;
}

export default function Select<T extends string>({
  select,
  options,
  setOption,
}: SelectProps<T>) {
  const [open, setOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement | null>(null);
  const selectButtonRef = useRef<HTMLDivElement | null>(null);

  useClickOutside([selectRef, selectButtonRef], () => setOpen(false));

  return (
    <div className="relative">
      <div
        ref={selectButtonRef}
        onClick={() => setOpen((prev) => !prev)}
        className="p-2 flex items-center gap-3 text-sm justify-between border rounded-sm px-4 cursor-pointer lg:min-w-[150px]"
      >
        <p>{select}</p>
        <ChevronDown className="size-4" />
      </div>
      <div
        ref={selectRef}
        className={`containers mt-1 z-100 absolute w-full rounded-md shadow-lg ${
          open ? "scale-100 opacity-100" : "opacity-0 scale-90"
        } transition-all overflow-hidden duration-300 ease-in-out`}
      >
        {options.map((option, index: number) => (
          <div
            onClick={() => {
              setOpen(false);
              setOption(option);
            }}
            key={`select-${index}`}
            className="hover:bg-[#00b4d8] transition-all duration-150 ease-in-out p-1 px-3 cursor-default "
          >
            <p className="text-sm">{option}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

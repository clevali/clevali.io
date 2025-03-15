"use client";
import React, { PropsWithChildren, useCallback, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverProps } from "@radix-ui/react-popover";
import { debounce } from "@/lib/utils";

interface Props extends PropsWithChildren {
  content?: React.ReactNode;
}
const delay = 200;
const MyPopover = ({ children, content, ...props }: Props & PopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMouse = useCallback(
    debounce((visible: boolean) => setIsOpen(visible), delay),
    []
  );

  return (
    <Popover open={isOpen} {...props}>
      <PopoverTrigger
        onMouseEnter={() => handleMouse(true)}
        onMouseLeave={() => handleMouse(false)}
      >
        {children}
      </PopoverTrigger>
      <PopoverContent
        onMouseEnter={() => handleMouse(true)}
        onMouseLeave={() => handleMouse(false)}
      >
        {content}
      </PopoverContent>
    </Popover>
  );
};

export default MyPopover;

"use client";

import * as React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { MenuIcon } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// import { SLOGAN, WEBSITE } from "@/constants";
import { cn } from "@/lib/utils";
import { baseConfig } from "@/constant/base-config";
import { useIsMount } from "@/hooks/use-is-mount";

// import { navItems } from "./config";

export const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const isMounted = useIsMount();
  if (!isMounted) {
    return <></>;
  }
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant={"outline"}
          size={"icon"}
          aria-label="菜单"
          className={cn("sm:hidden")}
        >
          <MenuIcon className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>{baseConfig.authors}</SheetTitle>
          <SheetDescription>{baseConfig.motto}</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 pt-8">
          {baseConfig.navigationItems.map((el) => (
            <Link
              key={el.href}
              href={el.href}
              className={cn(
                buttonVariants({
                  variant: pathname === el.href ? "default" : "ghost",
                }),
                "text-md px-4 py-2 flex gap-2 items-center !justify-start w-full"
              )}
              onClick={() => {
                setOpen(false);
              }}
            >
              {el.title}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

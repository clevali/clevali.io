"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScroll, useThrottle } from "ahooks";
import { cn } from "@/lib/utils";
import { MobileNav } from "./navbar-mobile";
import { baseConfig, route } from "@/constant/base-config";
import { ThemeSwitch } from "./theme-switch";
import { useIsMount } from "@/hooks/use-is-mount";
import { Avatar } from "./avatar";
import { GithubIcon } from "@/assets";
import { Button } from "./ui/button";

export const Navbar = () => {
  const scroll = useScroll(() => document);
  const pathname = usePathname();
  const [previousScrollTop, setPreviousScrollTop] = React.useState(0);
  const throttledPreviousScrollTop = useThrottle(previousScrollTop, {
    wait: 500,
  });

  const [isHideHeader, setIsHideHeader] = React.useState(false);
  const throttledIsHideHeader = useThrottle(isHideHeader, { wait: 500 });

  React.useEffect(() => {
    const _top = scroll?.top ?? 0;

    if (_top - throttledPreviousScrollTop < 0) {
      // 向上滚动时，显示导航栏
      setIsHideHeader(false);
    } else {
      setIsHideHeader(true);
    }

    if (_top) {
      setPreviousScrollTop(_top);
    }
  }, [scroll?.top]);

  const isMounted = useIsMount();
  if (!isMounted) {
    return <></>;
  }
  return (
    <header
      className={cn(
        "w-full sticky top-0 backdrop-blur transition-all border-x-0  flex justify-center z-10",
        throttledPreviousScrollTop > 60 &&
          "bg-background/50 border-b border-border/50",
        {
          "-translate-y-20":
            throttledPreviousScrollTop > 300 ? throttledIsHideHeader : false,
        }
      )}
    >
      <div className="flex h-16 w-full items-center p-4 sm:p-8 sm:max-w-screen-md lg:max-w-screen-xl transition-all">
        <Link
          href={route.home}
          className={cn("mr-4 hidden sm:flex sm:items-center")}
          aria-label={baseConfig.authors}
        >
          <Avatar />
          <span className="ml-2 text-base font-semibold text-primary">
            {baseConfig.authors}
          </span>
        </Link>
        <div className="mr-8 hidden h-16 flex-1 items-center justify-end text-base font-medium sm:flex">
          {baseConfig.navigationItems.map((el) => (
            <Link
              href={el.href}
              key={el.href}
              className={cn(
                "font-normal text-sm text-muted-foreground transition-colors px-4 py-2",
                "hover:font-semibold hover:text-primary ",
                pathname === el.href && "font-semibold text-primary"
              )}
            >
              {el.title}
            </Link>
          ))}
        </div>
        <MobileNav />
        <div className="flex-1 flex justify-center sm:hidden">
          <Link href={route.home} aria-label={baseConfig.authors}>
            <Avatar />
          </Link>
        </div>

        <div className="flex items-center justify-end gap-2 sm:flex-none">
          <Button
            variant="outline"
            className="px-3"
            onClick={() => {
              window.open(baseConfig.openUrl, "_blank");
            }}
          >
            <GithubIcon />
          </Button>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};

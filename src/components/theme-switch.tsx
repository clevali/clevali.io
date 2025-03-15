"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button, ButtonProps } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { flushSync } from "react-dom";
import { useIsMount } from "@/hooks/use-is-mount";
export function ThemeSwitch({
  className,
  ...props
}: React.PropsWithChildren<
  ButtonProps & React.RefAttributes<HTMLButtonElement>
>) {
  const { theme, setTheme, systemTheme } = useTheme();
  const ref = React.useRef(null);
  const isMount = useIsMount();
  React.useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      theme === "dark" ? "/style/prism-dark.css" : "/style/prism-light.css";
    document.head.appendChild(link);

    // 清理函数，在组件卸载或主题变化时移除之前的 CSS
    return () => {
      document.head.removeChild(link);
    };
  }, [theme]);

  const currentTheme = React.useMemo(() => {
    if (theme === "system") {
      return systemTheme;
    }
    return theme;
  }, [theme, systemTheme]);
  // 在 SSR 时不渲染,防止水合错误
  if (!isMount) return null;
  return (
    <Button
      className={cn("flex items-center px-3", className)}
      variant="outline"
      ref={ref}
      id="airplane-mode"
      onClick={async (e) => {
        // 获取点击位置
        const x = e.clientX;
        const y = e.clientY;
        // 计算半径
        const tagetRadius = Math.hypot(
          Math.max(x, window.innerWidth - x),
          Math.max(y, window.innerHeight - y)
        );
        await document.startViewTransition(() => {
          flushSync(() => {
            setTheme(currentTheme === "light" ? "dark" : "light");
          });
        }).ready;
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0% at ${x}px ${y}px)`,
              `circle(${tagetRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 800,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      }}
      {...props}
    >
      <div className=" flex justify-center items-center transition-all duration-500">
        {currentTheme === "light" ? <Moon /> : <Sun />}
      </div>
    </Button>
  );
}

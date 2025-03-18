/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseConfig } from "@/constant/base-config";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

//https://patorjk.com/software/taag/#p=display&f=ANSI%20Shadow&t=clevali
const logo = `
           /$$                               /$$ /$$
          | $$                              | $$|__/
  /$$$$$$$| $$  /$$$$$$  /$$    /$$ /$$$$$$ | $$ /$$
 /$$_____/| $$ /$$__  $$|  $$  /$$/|____  $$| $$| $$
| $$      | $$| $$$$$$$$ \  $$/$$/  /$$$$$$$| $$| $$
| $$      | $$| $$_____/  \  $$$/  /$$__  $$| $$| $$
|  $$$$$$$| $$|  $$$$$$$   \  $/  |  $$$$$$$| $$| $$
 \_______/|__/ \_______/    \_/    \_______/|__/|__/
                                                    
                                                   `;
const style = `
background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
color: transparent;
-webkit-background-clip: text;
`;
console.log(`%c${logo}`, style);
console.log(`%c作者：${baseConfig.authors}`, style);
console.log("%c感谢你访问我的网站。", style);
console.log("喜欢的话，帮忙点个赞", "https://github.com/clevali/clevali.io");

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const debounce = <
  T extends (...args: any[]) => any,
  This = ThisParameterType<T>
>(
  fn: T,
  delay = 300
) => {
  let timer: NodeJS.Timeout | null = null;
  return function (
    this: This,
    ...args: Parameters<T>
  ): ReturnType<T> | undefined {
    if (timer) clearTimeout(timer);
    let result: ReturnType<T> | undefined;
    timer = setTimeout(() => {
      result = fn.apply(this, args);
    }, delay);
    return result;
  };
};

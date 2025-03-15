/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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

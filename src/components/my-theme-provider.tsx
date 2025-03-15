"use client";
import { ThemeProvider, ThemeProviderProps } from "next-themes";
import { FC } from "react";

const MyThemeProvider: FC<ThemeProviderProps> = ({ children, ...props }) => {
  return (
    <ThemeProvider attribute="class" enableSystem {...props}>
      {children}
    </ThemeProvider>
  );
};

export default MyThemeProvider;

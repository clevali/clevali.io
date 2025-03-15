import type { Metadata } from "next";
import { baseConfig } from "@/constant/base-config";
import MyThemeProvider from "@/components/my-theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: baseConfig.title,
  description: baseConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <MyThemeProvider>{children}</MyThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}

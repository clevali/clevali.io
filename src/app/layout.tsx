import type { Metadata } from "next";
import { baseConfig } from "@/constant/base-config";
import MyThemeProvider from "@/components/my-theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: baseConfig.title,
  description: baseConfig.description,
  metadataBase: baseConfig.metadataBase,
  keywords: baseConfig.keywords,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: baseConfig.title,
    description: baseConfig.description,
    siteName: baseConfig.title,
    locale: "zh_CN",
    type: "website",
    url: baseConfig.url,
  },
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
      {process.env.NODE_ENV === "production" && (
        // 谷歌分析工具，需要改成你的id
        // https://analytics.google.com/analytics/web/?authuser=0#/provision/create
        <GoogleAnalytics gaId="xxxxxx" />
      )}
    </html>
  );
}

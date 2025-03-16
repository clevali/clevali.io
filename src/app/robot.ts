import { baseConfig } from "@/constant/base-config";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/"],
    },
    sitemap: "https://clevali.cn/sitemap.xml",
    host: baseConfig.url,
  };
}

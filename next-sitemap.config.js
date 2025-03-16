module.exports = {
  siteUrl: "https://clevali.cn",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: [
    "/admin*", // 排除管理后台
    "/api*", // 排除API路由
    "/sitemap.xml",
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api"],
      },
    ],
  },
  transform: async (config, path) => {
    console.log("config, path", path);
    // 博客文章
    if (path.startsWith("/blog/")) {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }
    // 处理首页、关于页等
    if (["/", "/about", "/yearBlogs"].includes(path)) {
      return {
        loc: path,
        changefreq: "daily",
        priority: 1.0, // 首页优先级最高
        lastmod: new Date().toISOString(),
      };
    }
    return null;
  },
};

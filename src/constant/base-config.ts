import { BaseConfig, SocialItemType } from "@/types/base-config";
import { Home, Inbox, Search } from "lucide-react";

export const route = {
  home: "/",
  yearBlogs: "/yearBlogs",
  about: "/about",
  tagBlogs: "/tagBlogs",
};
export const baseConfig: BaseConfig = {
  title: "clavali's blog",
  name: "blog | 前端 | 开发者",
  description:
    "我会在这里记录我的成长，以及分享我收集到的一些资料总结等，努力 💪 成为一个好的工程师~",
  apologize: "",
  motto: "只要开始追赶，就已经走在胜利的路上",
  keywords: ["clevali", "blog", "前端", "nextjs", "学习笔记", "程序员"],
  authors: "clevali",
  openUrl: "https://github.com/clevali/clevali.io",
  email: "1454468023@qq.com",
  authorsCN: "两眼半",
  authorsUrl: "https://github.com/clevali",
  links: [
    {
      href: "https://github.com/clevali",
      text: "github",
      icon: "GithubIcon",
      type: SocialItemType.link,
    },
    {
      href: "wechat",
      text: "微信",
      icon: "WechatIcon",
      type: SocialItemType.picture,
    },
    {
      href: "https://space.bilibili.com/170936622",
      text: "Bilibili",
      icon: "BilibiliIcon",
      type: SocialItemType.link,
    },
    {
      href: "1454468023@qq.com",
      text: "邮箱",
      icon: "EmailIcon",
      type: SocialItemType.text,
    },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  navigationItems: [
    { href: route.home, title: "首页", icon: Home },
    { href: route.yearBlogs, title: "博客", icon: Inbox },
    { href: route.about, title: "关于我", icon: Search },
  ],
  footerItems: [{ href: "/", title: "首页" }],
  locale: "zh-CN",
};

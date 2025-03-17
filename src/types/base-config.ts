import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface BaseConfig {
  title: string;
  name: string;
  authorsCN: string;
  description: string;
  apologize: string;
  motto: string;
  url: string;
  email: string;
  keywords: string[];
  authors: string;
  authorsUrl?: string;
  openUrl: string;
  links: SocialItem[];
  navigationItems: navigationItem[];
  footerItems: navigationItem[];
  metadataBase: URL;
  themeColors?: string | ThemeColor[];
  defaultNextTheme?: string;
  icons: {
    icon: string;
    shortcut?: string;
    apple?: string;
  };

  locale: string;
  moreItems: MoreItem;
}
export type AuthorsConfig = {
  name: string;
  url: string;
  twitter?: string;
};

export type navigationItem = {
  title: string;
  href: string;
  icon?: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  menu?: boolean;
};
export type ThemeColor = {
  media: string;
  color: string;
};
export type SocialItem = {
  text: string;
  href: string;
  hide?: boolean;
  icon: string;
  type: SocialItemType;
};
export enum SocialItemType {
  picture = "picture",
  link = "link",
  text = "text",
}

export type MoreItem = Record<string, navigationItem[]>;

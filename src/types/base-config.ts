import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface BaseConfig {
  title: string;
  name: string;
  authorsCN: string;
  description: string;
  apologize: string;
  motto: string;
  email: string;
  keywords: string[];
  authors: string;
  authorsUrl?: string;
  links: SocialItem[];
  navigationItems: navigationItem[];
  footerItems: navigationItem[];
  icons: {
    icon: string;
    shortcut?: string;
    apple?: string;
  };
  locale: string;
}

export type navigationItem = {
  title: string;
  href: string;
  icon?: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  menu?: boolean;
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

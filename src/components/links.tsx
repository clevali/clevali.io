import { baseConfig } from "@/constant/base-config";
import Link from "next/link";
import React from "react";
import * as iconList from "@/assets/index";
import { MyTooltip } from "./my-tootip";
import MyPopover from "./my-popover";
import WchatImg from "@/assets/media/wechat.webp";
import Image, { StaticImageData } from "next/image";
import { makeBlurDataURL } from "@/lib/images";
import { SocialItem, SocialItemType } from "@/types/base-config";
import MyTextContainer from "./my-text-container";

const imgConfig: Record<string, StaticImageData> = {
  wechat: WchatImg,
};

const Links = () => {
  return (
    <div className="flex ">
      {baseConfig.links.map((item) => {
        const iconConfig: Record<
          string,
          (props: iconList.IconProps) => React.JSX.Element
        > = iconList;
        const PerIcon = iconConfig[item.icon as keyof typeof iconConfig];
        const children = (
          <PerIcon className="text-3xl text-zinc-400 transition group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200" />
        );
        const renderConfig: Record<SocialItemType, React.ReactNode> = {
          [SocialItemType.picture]: renderPicture({
            item,
            children,
          }),
          [SocialItemType.link]: renderLinkOrText({ item, children }),
          [SocialItemType.text]: renderLinkOrText({ item, children }),
        };

        const renderContent = renderConfig[item.type];
        return (
          <div key={item.href} className="mr-4 hover:scale-125 duration-500">
            {renderContent}
          </div>
        );
      })}
    </div>
  );

  function renderLinkOrText({
    item,
    children,
  }: {
    item: SocialItem;
    children: React.JSX.Element;
  }) {
    const isLink = item.type === SocialItemType.link;
    return (
      <MyTooltip key={item.href} content={item.text}>
        <Link
          href={item.href}
          target="_blank"
          onClick={(e) => {
            if (!isLink) e.preventDefault();
          }}
        >
          {isLink ? (
            children
          ) : (
            <MyTextContainer text={item.href}>{children}</MyTextContainer>
          )}
        </Link>
      </MyTooltip>
    );
  }

  function renderPicture({
    item,
    children,
  }: {
    item: SocialItem;
    children: React.JSX.Element;
  }) {
    return (
      <MyPopover
        content={
          <Image
            src={imgConfig[item.href]}
            alt={item.text}
            unoptimized
            placeholder="blur"
            blurDataURL={makeBlurDataURL(16, 16)}
            style={{
              width: "100%",
              height: "auto",
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          />
        }
      >
        {children}
      </MyPopover>
    );
  }
};

export default Links;

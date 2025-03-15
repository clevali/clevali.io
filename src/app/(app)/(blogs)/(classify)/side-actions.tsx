"use client";
import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Infinity, Tag as TagIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import AsideCard from "@/components/aside-card";
import { allTags, getClassifyBlogData } from "@/lib";
import { route } from "@/constant/base-config";
import { useIsMobile } from "@/hooks/use-mobile";

const SideActions = () => {
  const isMobile = useIsMobile();
  const { classifyData: yearData, keys: years } = getClassifyBlogData();
  return (
    <div>
      {!isMobile ? (
        <div className="secText py-4 px-2  sticky top-0">
          <AsideCard title="归档" icon={<Infinity />}>
            <Card>
              <CardContent className="p-0 overflow-hidden">
                {years.map((item, index, arr) => (
                  <Link
                    key={item}
                    href={`${route.yearBlogs}#${item}`}
                    className={cn(
                      "py-2 px-4 secText flex justify-between group cursor-pointer tag-bg",
                      index !== arr.length - 1 && "border-solid border-b-2"
                    )}
                  >
                    <span className="group-hover:scale-110 duration-500">
                      {item}
                    </span>
                    <span className=" group-hover:scale-110 duration-500">
                      {yearData[item].count}篇
                    </span>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </AsideCard>
          <div className="w-full">
            <AsideCard title="标签" icon={<TagIcon />}>
              <div className="flex flex-wrap">
                {allTags().map((item) => (
                  <Link
                    href={`${route.tagBlogs}/${item}`}
                    key={item}
                    className="border-2  border-solid p-1 px-2 mr-1 mb-1  rounded-md shadow-md cursor-pointer hover:scale-105 duration-500 tag-bg bg-white dark:bg-black"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </AsideCard>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SideActions;

import { Blog } from "contentlayer/generated";
import React, { PropsWithChildren } from "react";
import MyLink from "./my-link";

interface Props extends PropsWithChildren {
  blog?: Blog;
  isNext?: boolean;
}
const PageSkiper = ({ blog, isNext }: Props) => {
  return blog ? (
    <MyLink href={blog?.url || "javascript:void(0);"} className="w-[20vw]">
      <div className="border-solid border-2  border-gray-200 dark:border-gray-600 rounded py-2 px-4 text-xs hover:border-black dark:hover:border-white  duration-300 transition-all">
        <div className="secText">{isNext ? "下一篇" : "上一篇"}</div>
        {blog ? (
          <div className="truncate">{blog.title}</div>
        ) : (
          <div>{isNext ? "已经是最后一篇了哦" : "已经是第一篇了哦"}</div>
        )}
      </div>
    </MyLink>
  ) : (
    <div></div>
  );
};

export default PageSkiper;

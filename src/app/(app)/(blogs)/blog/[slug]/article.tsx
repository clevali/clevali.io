"use client";
import React from "react";
import { Blog } from "contentlayer/generated";
import { dayTz } from "@/lib/day-tz";
import { Calendar, Clock8 } from "lucide-react";
import Tag from "@/components/tag";
import { motion } from "framer-motion";
import { commonRenderMontion } from "@/constant/common";
import PageSkiper from "@/components/page-skiper";
import MdxContent from "@/components/mdx-content";

const Article = ({
  blog,
  preBlog,
  nextBlog,
}: {
  blog?: Blog;
  preBlog?: Blog;
  nextBlog?: Blog;
}) => {
  if (!blog) return <div>内容找不到了</div>;
  return (
    <motion.article className="w-full" {...commonRenderMontion}>
      <div className="mb-8 text-center">
        <h1 className=" font-bold px-4">{blog.title}</h1>
        <div className="mb-2 text-xs text-gray-600">
          <span className="mb-2 flex justify-center items-center">
            <Calendar
              className="inline-block m-0 p-0  text-xs mr-1"
              width="0.8215rem"
              height="0.8215rem"
            />
            <time dateTime={blog.date}>
              {dayTz(blog.date).format("YYYY-MM-DD")}
            </time>
            <span className="px-1">|</span>
            <Clock8
              className="inline-block m-0 p-0  text-xs mr-1"
              width="0.8215rem"
              height="0.8215rem"
            />
            {Math.ceil(blog.readingTime.minutes)}分钟
          </span>
          {blog.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
      <div className="js-toc-content  px-10">
        <MdxContent content={blog.body.code || ""} />
      </div>
      <div className="flex justify-between my-8 px-8 items-center">
        <PageSkiper blog={preBlog} isNext={false} />
        <PageSkiper blog={nextBlog} isNext={true} />
      </div>
    </motion.article>
  );
};

export default Article;

/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrismPlus from "rehype-prism-plus";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeExternalLinks from "rehype-external-links";

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    slug: { type: "string", required: true },
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    author: { type: "string", required: false },
    tags: { type: "list", of: { type: "string" }, required: true },
    description: { type: "string", required: false },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (blog) => `/blog/${blog.slug}`,
    },

    // 阅读时间
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
  },
}));

export default makeSource({
  contentDirPath: "blogs",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      // 为代码添加特殊样式
      // @ts-ignore
      [rehypePrismPlus, { defaultLanguage: "ts", ignoreMissing: true }],
      // 为每个 header 添加 id
      [
        rehypeSlug,
        {
          prefix: "heading-",
        },
      ],
      //为 header 添加链接
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["anchor"],
          },
        },
      ],
      // 为所有外部a标签链接添加属性
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["noopener", "noreferrer"],
        },
      ],
    ],
  },
});

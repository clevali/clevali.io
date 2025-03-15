import React from "react";
import { notFound } from "next/navigation";
import Container from "@/components/container";
import MdxContent from "@/components/mdx-content";
import { allBlogs } from "contentlayer/generated";

const About = () => {
  const blog = allBlogs.find((blog) => blog.slug === "about");
  if (!blog) notFound();

  return (
    <Container className="mt-16">
      <article className="rich-text-viewer prose ">
        <div className="mb-8 ">
          <h1 className="text-3xl font-bold">{blog.title}</h1>
        </div>
        <MdxContent content={blog.body.code || ""} />
      </article>
    </Container>
  );
};

export default About;

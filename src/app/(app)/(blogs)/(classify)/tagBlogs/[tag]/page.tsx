"use client";
import React from "react";
import ClassfyBlogList from "../../classfy-blog-list";
import { getClassifyBlogData } from "@/lib";
import { ClassifyType } from "@/types/common";
import { commonRenderMontion } from "@/constant/common";
import { motion } from "framer-motion";

const Page = ({ params }: { params: { tag: string } }) => {
  return (
    <motion.div {...commonRenderMontion}>
      <ClassfyBlogList
        {...getClassifyBlogData(
          ClassifyType.tag,
          decodeURIComponent(params.tag)
        )}
      />
    </motion.div>
  );
};

export default Page;

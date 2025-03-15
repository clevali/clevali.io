"use client";
import React from "react";
import ClassfyBlogList from "../classfy-blog-list";
import { getClassifyBlogData } from "@/lib";
import { motion } from "framer-motion";
import { commonRenderMontion } from "@/constant/common";

const Page = () => {
  return (
    <motion.div {...commonRenderMontion}>
      <ClassfyBlogList {...getClassifyBlogData()} />{" "}
    </motion.div>
  );
};

export default Page;

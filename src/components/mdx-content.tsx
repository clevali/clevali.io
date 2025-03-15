"use client";
import { componentsMap } from "@/constant/conponents-map";
import { useMDXComponent } from "next-contentlayer/hooks";
import React from "react";

const MdxContent = ({ content }: { content: string }) => {
  const NextMDXContent = useMDXComponent(content || "");
  return <NextMDXContent components={componentsMap} />;
};

export default MdxContent;

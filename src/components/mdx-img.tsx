"use client";
import React, { ImgHTMLAttributes } from "react";
import { useIsMount } from "@/hooks/use-is-mount";
import Img from "./img";

export default function MdImg(props: ImgHTMLAttributes<HTMLImageElement>) {
  const isMount = useIsMount();
  if (!isMount) {
    return <></>;
  }
  return <Img {...props} />;
}

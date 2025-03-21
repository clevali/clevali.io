"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { ImgHTMLAttributes } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Img = ({ className, ...props }: ImgHTMLAttributes<HTMLImageElement>) => {
  const { alt, src } = props;
  const isBanner = alt?.includes("banner");
  return (
    <Zoom
      zoomImg={{
        src,
        alt,
      }}
    >
      <Image
        className={cn(
          className,
          "border-solid border-gray-200 border-2 rounded-lg dark:border-gray-200 w-full",
          isBanner ? "h-auto" : "max-h-[300px] w-auto"
        )}
        width={0}
        height={0}
        sizes="100vw"
        src={src || ""}
        alt={alt || ""}
      />
    </Zoom>
  );
};

export default Img;

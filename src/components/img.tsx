"use client";
import { cn } from "@/lib/utils";
import React, { ImgHTMLAttributes, useEffect, useRef, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Img = ({ className, ...props }: ImgHTMLAttributes<HTMLImageElement>) => {
  const { alt, src } = props;
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "200px", // 在图片距离视口200px时开始加载
      }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  const isBanner = alt?.includes("banner");
  const renderClass = cn(
    className,
    "border-solid border-gray-200 border-2 rounded-lg dark:border-gray-200",
    isBanner ? "w-full h-auto" : "max-h-[300px]"
  );

  return (
    <div ref={containerRef}>
      {isVisible ? (
        <Zoom
          zoomImg={{
            src,
            alt,
          }}
        >
          <img loading="lazy" className={renderClass} {...props} />
        </Zoom>
      ) : (
        <div className={renderClass}></div>
      )}
    </div>
  );
};

export default Img;

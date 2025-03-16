"use client";

import { cn } from "@/lib/utils";
import "@/style/tocbot.css";
import { motion, useScroll } from "framer-motion";
import { HTMLAttributes, useEffect } from "react";
import { init, destroy } from "tocbot";

export default function Toc({
  className,
  ...props
}: React.PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  const { scrollY } = useScroll();
  useEffect(() => {
    init({
      tocSelector: ".js-toc",
      contentSelector: ".js-toc-content",
      headingSelector: "h1, h2, h3, h4, h5, h6",
      linkClass: "toc-link",
      activeListItemClass: "is-active-li",
      listClass: "toc-list",
      listItemClass: "toc-list-item",
      collapseDepth: 6,
      scrollSmooth: true,
      scrollSmoothDuration: 420,
      scrollSmoothOffset: -10,
      enableUrlHashUpdateOnScroll: true,
      headingsOffset: -200,
    });

    return () => {
      destroy();
    };
  }, [scrollY]);

  return (
    <aside className="prose-slate mr-2 hidden md:block max-w-[200px]">
      <div
        className={cn("toc-container top-20 w-full sticky", className)}
        {...props}
      >
        <motion.ul
          className="js-toc group pointer-events-auto text-zinc-500 max-h-[80vh] min-h-[200px] overflow-y-auto scrollbar w-full"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                when: "beforeChildren",
                staggerChildren: 0.08,
                delay: 0.255,
                type: "spring",
                stiffness: 150,
                damping: 20,
              },
            },
          }}
        />
      </div>
    </aside>
  );
}

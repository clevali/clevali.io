import { cn } from "@/lib/utils";
import React from "react";

const IndexContainer = ({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("pb-4", className)}>{children}</div>;
};

export default IndexContainer;

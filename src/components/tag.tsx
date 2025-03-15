import { cn } from "@/lib/utils";
import React from "react";
import { Badge, BadgeProps } from "@/components/ui/badge";

const Tag = ({
  children,
  className,
  disColor,
  ...props
}: React.PropsWithChildren<
  BadgeProps & {
    disColor?: boolean;
  }
>) => {
  return (
    <Badge
      variant="outline"
      className={cn(
        className,
        " dark:bg-neutral-950 mr-1 mb-1 shadow-md text-gray-600 dark:text-gray-400",
        !disColor && "bg-slate-100"
      )}
      {...props}
    >
      {children}
    </Badge>
  );
};

export default Tag;

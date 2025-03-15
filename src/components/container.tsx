import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
  children,
  className,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div
      {...props}
      className={cn("p-4 sm:p-10  flex justify-center", className)}
    >
      {children}
    </div>
  );
};

export default Container;

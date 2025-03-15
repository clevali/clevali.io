import React, { PropsWithChildren } from "react";

const MdxCode = (props: PropsWithChildren<{ className?: string }>) => {
  const { children, className } = props;
  return (
    <code
      className={
        className
          ? className
          : "px-2 bg-gray-100 dark:bg-[#2D2D2D]  p-1 rounded-md text-global font-bold"
      }
    >
      {children}
    </code>
  );
};

export default MdxCode;

import React, { PropsWithChildren } from "react";

const Blockquote = ({
  children,
  ...props
}: PropsWithChildren & React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => {
  return (
    <blockquote
      className="border-l-4 border-neutral-500 border-solid bg-[#fafafa] dark:bg-[#1a1a1a] dark:text-zinc-200"
      {...props}
    >
      <div className="text-sm">{children}</div>
    </blockquote>
  );
};

export default Blockquote;

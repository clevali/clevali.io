import Link from "next/link";
import React, { PropsWithChildren } from "react";

const MyLink = ({
  children,
  ...props
}: PropsWithChildren<{
  href: string;
  className?: string;
  prefetch?: boolean | null;
  target?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}>) => {
  const { href } = props;
  return (
    <Link {...props} aria-label={`link to ${href}`}>
      {children}
    </Link>
  );
};

export default MyLink;

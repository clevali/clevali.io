import React from "react";

const AsideCard = ({
  children,
  icon,
  title,
}: React.PropsWithChildren<{
  icon: React.JSX.Element;
  title: string;
}>) => {
  return (
    <div className="w-full my-4">
      <div className="mb-1">{icon}</div>
      <div className="mb-2">{title}</div>
      {children}
    </div>
  );
};

export default AsideCard;

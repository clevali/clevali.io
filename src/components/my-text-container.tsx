"use client";
import { copyTextToClipboard } from "@/lib";
import React, { PropsWithChildren } from "react";

const MyTextContainer = ({
  children,
  text,
}: {
  text: string;
} & PropsWithChildren) => {
  return (
    <div
      onClick={() => {
        copyTextToClipboard(text);
      }}
    >
      {children}
    </div>
  );
};

export default MyTextContainer;

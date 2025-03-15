"use client";
import { getOneSentenceAction, OneSentenceData } from "@/actions/hitokoto";
import { CircleHelp } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MyPopover from "./my-popover";

const OneSentence = () => {
  const [state, setState] = useState<OneSentenceData | undefined>();
  useEffect(() => {
    getOneSentence();
  }, []);
  return (
    <div className="flex justify-center items-center">
      {state?.hitokoto || "用代码表达言语的魅力，用代码书写山河的壮丽。"}

      <MyPopover
        content={
          <div className="text-xs p-2 rounded-md duration-300 transition-all">
            文案能力接入了一言：
            <Link
              className="font-bold"
              href="https://hitokoto.cn/"
              target="_blank"
            >
              https://hitokoto.cn/
            </Link>
          </div>
        }
      >
        <CircleHelp
          className="inline-block m-0 p-0 ml-2"
          width="0.8215rem"
          height="0.8215rem"
        />
      </MyPopover>
    </div>
  );
  async function getOneSentence() {
    const res = await getOneSentenceAction();
    setState(res);
    return res;
  }
};

export default OneSentence;

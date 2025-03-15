import React from "react";
import BLogList from "./blog-list";
import { ClassifyData } from "@/types/common";

const ClassfyBlogList = ({
  keys,
  classifyData,
}: {
  keys: string[];
  classifyData: ClassifyData;
}) => {
  return (
    <div>
      {keys.map((item) => (
        <div key={item}>
          <h2>
            <a id={item}>{item}</a>
          </h2>
          <BLogList blogs={classifyData[item].list} />
        </div>
      ))}
    </div>
  );
};

export default ClassfyBlogList;

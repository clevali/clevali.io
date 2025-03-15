import React from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Search as SeachIcon } from "lucide-react";
import { Button } from "./ui/button";

const Search = ({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  return (
    <div className="flex justify-center items-center">
      <Input
        className={cn(className, "pl-")}
        placeholder="输入关键词搜索"
        {...props}
      />
      <Button type="submit">
        <SeachIcon />
      </Button>
    </div>
  );
};

export default Search;

import Blockquote from "@/components/mdx-blockquote";
import MdxCode from "@/components/mdx-code";
import MdImg from "@/components/mdx-img";
import { MDXTable } from "@/components/mdx-table";

// 定义自定义组件映射
export const componentsMap = {
  blockquote: Blockquote,
  img: MdImg,
  table: MDXTable,
  code: MdxCode,
};

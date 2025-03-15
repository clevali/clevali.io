import { ClassifyData, ClassifyType } from "@/types/common";
import { Blog, allBlogs as metaList } from "contentlayer/generated";
import { dayTz } from "./day-tz";
import { toast } from "sonner";
export const allBlogs: Blog[] = metaList.filter(
  (blog) => blog.slug !== "about"
);

/**
 * 复制文本到剪贴板。
 * @param text - 要复制到剪贴板的文本。
 */
export function copyTextToClipboard(text: string) {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("复制成功", {
          position: "top-center",
        });
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  } else {
    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    toast.success("复制成功", {
      position: "top-center",
    });
  }
}

/**
 * 数组去重。
 * @param arr - 要去重的数组。
 */
export function uniq(arr: string[]) {
  return [...new Set(arr)];
}
export const allTags = () => {
  const countMap = allBlogs.reduce((pre: Record<string, number>, cur) => {
    for (const key of cur.tags || []) {
      if (!pre[key]) {
        pre[key] = 0;
      }
      pre[key]++;
    }
    return pre;
  }, {});
  return Object.keys(countMap).sort((a, b) => countMap[b] - countMap[a]);
};
/**
 * 根据type生成不同的分类数据
 * @param type - 分类类型
 * @param tag - 分类标签，当类型为tag时候必传
 */
export function getClassifyBlogData(
  type = ClassifyType.year,
  tag?: string
): {
  keys: string[];
  classifyData: ClassifyData;
} {
  const keys: string[] = [];
  const classifyData = allBlogs
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    .reduce((pre: ClassifyData, cur) => {
      if (type === ClassifyType.tag && !tag) {
        throw new Error("tag is required");
      }
      if (type === ClassifyType.tag && tag && !cur.tags.includes(tag)) {
        return pre;
      }
      const key =
        type === ClassifyType.year ? dayTz(cur.date).year() : (tag as string);
      keys.push(String(key));
      if (!pre[key]) {
        pre[key] = {
          count: 0,
          list: [],
        };
      }
      pre[key].count++;
      pre[key].list.push(cur);
      return pre;
    }, {});

  return {
    classifyData,
    keys:
      type === ClassifyType.year
        ? uniq(keys).sort((a, b) => Number(b) - Number(a))
        : uniq(keys),
  };
}

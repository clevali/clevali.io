import { Blog } from "contentlayer/generated";

export type ClassifyData = Record<
  string,
  {
    count: number;
    list: Blog[];
  }
>;

export enum ClassifyType {
  year = "year",
  tag = "tag",
}

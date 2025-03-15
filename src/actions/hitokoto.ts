"use server";
// 简单加个缓存，避免频繁请求
let cache: OneSentenceData | undefined;
export async function getOneSentenceAction() {
  if (cache) {
    return cache;
  }
  try {
    const resp = await fetch("https://v1.hitokoto.cn?c=d&c=k", {
      next: {
        revalidate: 3600,
      },
    });
    if (resp.status !== 200) {
      return;
    }
    const data: OneSentenceData = await resp.json();
    cache = data;
    return data;
  } catch (error) {
    console.error("error", error);
  }
}

export interface OneSentenceData {
  id: number;
  uuid: string;
  hitokoto: string;
  type: string;
  from: string;
  from_who: string;
  creator: string;
  creator_uid: number;
  reviewer: number;
  commit_from: string;
  created_at: string;
  length: number;
}

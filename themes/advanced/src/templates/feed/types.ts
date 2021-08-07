import { FeedPageMetaFromJson } from "../../types";

export type PageContext = {
  pageCount: number;
  pageIndex: number;
  feedType: string;
  feedId?: string;
  feedPageMeta: FeedPageMetaFromJson;
};

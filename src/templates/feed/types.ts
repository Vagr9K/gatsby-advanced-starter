import { FeedPageMetaFromJson } from "../../types";

export type PageContext = {
  limit: number;
  skip: number;
  pageCount: number;
  pageIndex: number;
  feedType: string;
  feedId: string;
  feedPageMeta: FeedPageMetaFromJson;
};

import { MoebooruPost } from "./index";
export declare type MoebooruTagType = "artist" | "character" | "series" | "attribute";
export interface MoebooruTagCategorySearch {
    tag: string;
    type: MoebooruTagType;
    image: string | null;
    description: string | null;
    posts: MoebooruPost[];
    postCount: string;
    cutenessAvg: string;
}
export interface MoebooruTagSearch {
    tag: string;
    type: MoebooruTagType;
    image: string | null;
    description: string | null;
    aliases: string[];
    postCount: string;
    imageCount: string;
    aliasCount: string;
}
export interface MoebooruTagCount {
    tag: string;
    count: string;
}
export interface MoebooruTag {
    tag: string;
    type: MoebooruTagType;
    image: string | null;
    description: string | null;
}

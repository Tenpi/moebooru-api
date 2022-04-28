export declare type MoebooruPostSort = "date" | "reverse date" | "drawn" | "reverse drawn" | "cuteness" | "reverse cuteness" | "favorites" | "reverse favorites";
export declare type MoebooruCategorySort = "cuteness" | "reverse cuteness" | "posts" | "reverse posts" | "alphabetic" | "reverse alphabetic";
export declare type MoebooruTagSort = "image" | "reverse image" | "aliases" | "reverse aliases" | "posts" | "reverse posts" | "alphabetic" | "reverse alphabetic";
export declare type MoebooruCommentSort = "date" | "reverse date";
export declare type MoebooruType = "image" | "animation" | "video" | "comic";
export declare type MoebooruRestrict = "safe" | "questionable" | "explicit";
export declare type MoebooruStyle = "2d" | "3d" | "pixel" | "chibi";
export interface MoebooruSearchParams {
    query?: string;
    type?: "all" | MoebooruType;
    restrict?: "all" | MoebooruRestrict;
    style?: "all" | MoebooruStyle;
    sort?: MoebooruPostSort;
}
export interface MoebooruRandomParams {
    type?: "all" | MoebooruType;
    restrict?: "all" | MoebooruRestrict;
    style?: "all" | MoebooruStyle;
}
export interface MoebooruCategoryParams {
    query?: string;
    sort?: MoebooruCategorySort;
}
export interface MoebooruTagParams {
    query?: string;
    sort?: MoebooruTagSort;
}
export interface MoebooruCommentParams {
    query?: string;
    sort?: MoebooruCommentSort;
}

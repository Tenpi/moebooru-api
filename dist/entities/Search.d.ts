import api from "../API";
import { MoebooruSearchParams, MoebooruPost, MoebooruRandomParams, MoebooruCategoryParams, MoebooruTagCategorySearch, MoebooruTagSearch, MoebooruCommentParams, MoebooruTagParams, MoebooruTagCount, MoebooruCommentSearch } from "../types";
export declare class Search {
    private readonly api;
    constructor(api: api);
    /**
     * Searches for posts with a query.
     */
    posts: (params?: MoebooruSearchParams) => Promise<MoebooruPost[]>;
    /**
     * Get random posts.
     */
    random: (params?: MoebooruRandomParams) => Promise<MoebooruPost[]>;
    /**
      * Get artists.
      */
    artists: (params?: MoebooruCategoryParams) => Promise<MoebooruTagCategorySearch[]>;
    /**
      * Get characters.
      */
    characters: (params?: MoebooruCategoryParams) => Promise<MoebooruTagCategorySearch[]>;
    /**
      * Get series.
      */
    series: (params?: MoebooruCategoryParams) => Promise<MoebooruTagCategorySearch[]>;
    /**
      * Get tags.
      */
    tags: (params?: MoebooruTagParams) => Promise<MoebooruTagSearch[]>;
    /**
      * Get comments.
      */
    comments: (params?: MoebooruCommentParams) => Promise<MoebooruCommentSearch[]>;
    /**
      * Get suggestions.
      */
    suggestions: (query?: string) => Promise<MoebooruTagCount[]>;
}

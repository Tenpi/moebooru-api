import api from "../API";
import { MoebooruPost, MoebooruComment, MoebooruThirdParty } from "../types";
export declare class Post {
    private readonly api;
    constructor(api: api);
    /**
     * Get post.
     */
    get: (postID: number) => Promise<MoebooruPost>;
    /**
     * Get post comments.
     */
    comments: (postID: number) => Promise<MoebooruComment[]>;
    /**
     * Get third party posts.
     */
    thirdParty: (postID: number) => Promise<MoebooruThirdParty[]>;
    /**
     * Get parent post.
     */
    parent: (postID: number) => Promise<MoebooruThirdParty>;
}

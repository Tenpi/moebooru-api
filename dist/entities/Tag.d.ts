import api from "../API";
import { MoebooruTag } from "../types";
export declare class Tag {
    private readonly api;
    constructor(api: api);
    /**
     * List tags.
     */
    list: (tags?: string[]) => Promise<MoebooruTag[]>;
    /**
     * Get tag counts.
     */
    counts: (tags?: string[]) => Promise<any>;
}

import api from "../API";
import { MoebooruUser, MoebooruPost } from "../types";
export declare class User {
    private readonly api;
    constructor(api: api);
    /**
     * Get user.
     */
    get: (username: string) => Promise<MoebooruUser>;
    /**
     * Get favorites, if public.
     */
    favorites: (username: string) => Promise<MoebooruPost[]>;
    /**
     * Get uploads
     */
    uploads: (username: string) => Promise<MoebooruPost[]>;
}

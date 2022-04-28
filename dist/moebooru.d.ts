import api from "./API";
import { Search, User, Post, Tag } from "./entities/index";
export default class Moebooru {
    api: api;
    search: Search;
    user: User;
    post: Post;
    tag: Tag;
    constructor();
}
export * from "./entities/index";
export * from "./types/index";

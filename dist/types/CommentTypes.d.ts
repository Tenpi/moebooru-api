import { MoebooruMiniPost } from "./index";
export interface MoebooruCommentSearch {
    commentID: number;
    postID: number;
    username: string;
    comment: string;
    postDate: string;
    editedDate: string;
    image: string | null;
    post: MoebooruMiniPost;
}
export interface MoebooruComment {
    commentID: number;
    postID: number;
    username: string;
    comment: string;
    postDate: string;
    editedDate: string;
    image: string | null;
}

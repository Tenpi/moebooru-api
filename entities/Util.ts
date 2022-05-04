import api from "../API"
import {MoebooruPost, MoebooruImage, MoebooruUser} from "../types"

export class Util {
    public constructor(private readonly api: api) {}

    /**
     * Get post link.
     */
     public postLink = (post: MoebooruPost) => {
        if (!post) return ""
        return `https://moebooru.moe/post/${post.postID}`
    }

    /**
     * Get image link.
     */
     public imageLink = (image: MoebooruImage) => {
        if (!image) return ""
        return `https://moebooru.moe/${image.type}/${image.postID}/${image.filename}`
    }

    /**
     * Get user link.
     */
    public userLink = (user: MoebooruUser) => {
        if (!user) return ""
        return `https://moebooru.moe/user/${user.username}`
    }
}
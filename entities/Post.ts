import api from "../API"
import {MoebooruSearchParams, MoebooruUser, MoebooruPost, MoebooruComment, MoebooruThirdParty} from "../types"

export class Post {
    public constructor(private readonly api: api) {}

    /**
     * Get post.
     */
     public get = async (postID: number) => {
        const response = await this.api.get(`/post`, {postID})
        return response as Promise<MoebooruPost>
    }

    /**
     * Get post comments.
     */
     public comments = async (postID: number) => {
        const response = await this.api.get(`/post/comments`, {postID})
        return response as Promise<MoebooruComment[]>
    }

    /**
     * Get third party posts.
     */
     public thirdParty = async (postID: number) => {
        const response = await this.api.get(`/post/thirdparty`, {postID})
        return response as Promise<MoebooruThirdParty[]>
    }

    /**
     * Get parent post.
     */
     public parent = async (postID: number) => {
        const response = await this.api.get(`/post/parent`, {postID})
        return response as Promise<MoebooruThirdParty>
    }
}
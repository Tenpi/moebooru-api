import api from "../API"
import {Util} from "./Util"
import {MoebooruSearchParams, MoebooruUser, MoebooruPost, MoebooruComment, MoebooruThirdParty} from "../types"

export class Post {
    private util = new Util(this.api)
    public constructor(private readonly api: api) {}

    /**
     * Get post.
     */
     public get = async (postID: number) => {
        const response = await this.api.get(`/post`, {postID}) as MoebooruPost
        response.url = this.util.postLink(response)
        for (let i = 0; i < response.images.length; i++) {
            if (!response.images[i]) break
            response.images[i].url = this.util.imageLink(response.images[i])
        }
        return response 
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
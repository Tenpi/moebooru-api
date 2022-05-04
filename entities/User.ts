import api from "../API"
import {MoebooruSearchParams, MoebooruUser, MoebooruPost} from "../types"
import {Util} from "./Util"

export class User {
    private util = new Util(this.api)
    public constructor(private readonly api: api) {}

    /**
     * Get user.
     */
     public get = async (username: string) => {
        const response = await this.api.get(`/user`, {username}) as MoebooruUser
        response.url = this.util.userLink(response)
        return response
    }

    /**
     * Get favorites, if public.
     */
     public favorites = async (username: string) => {
        const response = await this.api.get(`/user/favorites`, {username}) as MoebooruPost[]
        for (let i = 0; i < response.length; i++) {
            response[i].url = this.util.postLink(response[i])
            for (let j = 0; j < response[i].images.length; j++) {
                if (!response[i].images[j]) break
                response[i].images[j].url = this.util.imageLink(response[i].images[j])
            }
        }
        return response
    }

    /**
     * Get uploads
     */
     public uploads = async (username: string) => {
        const response = await this.api.get(`/user/uploads`, {username}) as MoebooruPost[]
        for (let i = 0; i < response.length; i++) {
            response[i].url = this.util.postLink(response[i])
            for (let j = 0; j < response[i].images.length; j++) {
                if (!response[i].images[j]) break
                response[i].images[j].url = this.util.imageLink(response[i].images[j])
            }
        }
        return response
    }
}
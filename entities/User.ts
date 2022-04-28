import api from "../API"
import {MoebooruSearchParams, MoebooruUser, MoebooruPost} from "../types"

export class User {
    public constructor(private readonly api: api) {}

    /**
     * Get user.
     */
     public get = async (username: string) => {
        const response = await this.api.get(`/user`, {username})
        return response as Promise<MoebooruUser>
    }

    /**
     * Get favorites, if public.
     */
     public favorites = async (username: string) => {
        const response = await this.api.get(`/user/favorites`, {username})
        return response as Promise<MoebooruPost[]>
    }

    /**
     * Get uploads
     */
     public uploads = async (username: string) => {
        const response = await this.api.get(`/user/uploads`, {username})
        return response as Promise<MoebooruPost[]>
    }
}
import api from "../API"
import {MoebooruTag, MoebooruTagCount} from "../types"

export class Tag {
    public constructor(private readonly api: api) {}

    /**
     * List tags.
     */
     public list = async (tags?: string[]) => {
        const response = await this.api.get(`/tag/list`, {tags})
        return response as Promise<MoebooruTag[]>
    }

    /**
     * Get tag counts.
     */
     public counts = async (tags?: string[]) => {
        const response = await this.api.get(`/tag/counts`, {tags})
        return response as Promise<MoebooruTagCount[]>
    }
}
import api from "../API"
import {Util} from "./Util"
import {MoebooruSearchParams, MoebooruPost, MoebooruRandomParams, 
MoebooruCategoryParams, MoebooruTagCategorySearch, MoebooruTagSearch,
MoebooruCommentParams, MoebooruTagParams, MoebooruTagCount, MoebooruCommentSearch} from "../types"

export class Search {
    private util = new Util(this.api)
    public constructor(private readonly api: api) {}

    /**
     * Searches for posts with a query.
     */
     public posts = async (params?: MoebooruSearchParams) => {
         if (!params) params = {} as any
         if (!params.query) params.query = ""
         if (!params.type) params.type = "all"
         if (!params.restrict) params.restrict = "all"
         if (!params.style) params.style = "all"
         if (!params.sort) params.sort = "date"
        const response = await this.api.get(`/search/posts`, params) as MoebooruPost[]
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
     * Get random posts.
     */
     public random = async (params?: MoebooruRandomParams) => {
        if (!params) params = {} as any
        if (!params.type) params.type = "all"
        if (!params.restrict) params.restrict = "all"
        if (!params.style) params.style = "all"
       const response = await this.api.get(`/search/random`, params) as MoebooruPost[]
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
     * Get artists.
     */
    public artists = async (params?: MoebooruCategoryParams) => {
        if (!params) params = {} as any
        if (!params.query) params.query = ""
        if (!params.sort) params.sort = "alphabetic"
       const response = await this.api.get(`/search/artists`, params)
       return response as Promise<MoebooruTagCategorySearch[]>
   }

   /**
     * Get characters.
     */
    public characters = async (params?: MoebooruCategoryParams) => {
        if (!params) params = {} as any
        if (!params.query) params.query = ""
        if (!params.sort) params.sort = "alphabetic"
       const response = await this.api.get(`/search/characters`, params)
       return response as Promise<MoebooruTagCategorySearch[]>
   }

   /**
     * Get series.
     */
    public series = async (params?: MoebooruCategoryParams) => {
        if (!params) params = {} as any
        if (!params.query) params.query = ""
        if (!params.sort) params.sort = "alphabetic"
       const response = await this.api.get(`/search/series`, params)
       return response as Promise<MoebooruTagCategorySearch[]>
   }

   /**
     * Get tags.
     */
    public tags = async (params?: MoebooruTagParams) => {
        if (!params) params = {} as any
        if (!params.query) params.query = ""
        if (!params.sort) params.sort = "alphabetic"
       const response = await this.api.get(`/search/tags`, params)
       return response as Promise<MoebooruTagSearch[]>
   }

   /**
     * Get comments.
     */
    public comments = async (params?: MoebooruCommentParams) => {
        if (!params) params = {} as any
        if (!params.query) params.query = ""
        if (!params.sort) params.sort = "date"
       const response = await this.api.get(`/search/comments`, params)
       return response as Promise<MoebooruCommentSearch[]>
   }

   /**
     * Get suggestions.
     */
    public suggestions = async (query?: string) => {
       const response = await this.api.get(`/search/suggestions`, {query})
       return response as Promise<MoebooruTagCount[]>
   }

}
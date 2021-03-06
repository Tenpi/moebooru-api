import {MoebooruPost} from "./index"

export type MoebooruTagType = "artist" | "character" | "series" | "tag"

export interface MoebooruTagCategorySearch {
    tag: string
    type: MoebooruTagType
    image: string | null
    description: string | null
    posts: MoebooruPost[]
    postCount: string
    cutenessAvg: string
}

export interface MoebooruTagSearch {
    tag: string
    type: MoebooruTagType
    image: string | null
    description: string | null
    aliases: string[]
    postCount: string
    imageCount: string
    aliasCount: string
}

export interface MoebooruTagCount {
    tag: string 
    count: string
}

export interface MoebooruTag {
    tag: string
    type: MoebooruTagType
    image: string | null
    description: string | null
}
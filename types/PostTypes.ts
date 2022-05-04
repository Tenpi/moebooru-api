import {MoebooruType, MoebooruRestrict, MoebooruStyle} from "./index"

export interface MoebooruPost {
    postID: number
    uploader: string | null
    updater: string | null
    type: MoebooruType
    restrict: MoebooruRestrict
    style: MoebooruStyle
    thirdParty: boolean
    drawn: string
    uploadDate: string
    updatedDate: string
    title: string
    translatedTitle: string
    artist: string
    link: string
    commentary: string
    translatedCommentary: string
    images: MoebooruImage[]
    tags: string[],
    favoriteCount: string
    cutenessAvg: string   
    url: string
}

export interface MoebooruImage {
    imageID: number
    postID: number
    type: string
    filename: string
    width: number
    height: number
    size: number
    order: number
    hash: string
    url: string
}

export interface MoebooruMiniPost {
    type: MoebooruType
    restrict: MoebooruRestrict
    style: MoebooruStyle
    images: MoebooruImage[]
}

export interface MoebooruThirdParty {
    thirdPartyID: number
    postID: number
    parentID: number
    post: MoebooruMiniPost
}
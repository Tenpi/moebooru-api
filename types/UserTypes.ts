export interface MoebooruUser {
    username: string
    joinDate: string
    bio: string
    emailVerified: boolean
    publicFavorites: boolean
    image: string | null
    url: string
}
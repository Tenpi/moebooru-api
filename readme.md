<div align="left">
  <p>
    <img src="https://moebooru.moe/assets/purple/logo.png" width="500" />
  </p>
  <p>
    <a href="https://nodei.co/npm/moebooru/"><img src="https://nodei.co/npm/moebooru.png" /></a>
  </p>
</div>

### Moebooru API

This is a wrapper around the [Moebooru](https://moebooru.moe) API. Only the read-only endpoints are currently supported.

### Insall
```ts
npm install moebooru
```

#### Searching for posts, tags, and comments
```ts
import Moebooru from "moebooru"
const moebooru = new Moebooru()

async function useAPI() {
    /*You can easily search for nearly everything under the search class.*/
    const posts = await moebooru.search.posts({query: "post"})
    const artists = await moebooru.search.artists({query: "artist"})
    const characters = await moebooru.search.characters({query: "characters"})
    const series = await moebooru.search.series({query: "series"})
    const tags = await moebooru.search.tags({query: "tag"})
    const comments = await moebooru.search.comments({query: "comment"})
}
```

#### Common Types

<details>
<summary>MoebooruPost</summary>

```ts
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
}

```
</details>

<details>
<summary>MoebooruCommentSearch</summary>

```ts
export interface MoebooruCommentSearch {
    commentID: number
    postID: number
    username: string
    comment: string
    postDate: string
    editedDate: string
    image: string | null
    post: MoebooruMiniPost
}
```
</details>

<details>
<summary>MoebooruTagSearch</summary>

```ts
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
```
</details>
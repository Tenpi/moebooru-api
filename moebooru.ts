import api from "./API"
import {Search, User, Post, Tag} from "./entities/index"

export default class Moebooru {
    public api = new api()
    public search = new Search(this.api)
    public user = new User(this.api)
    public post = new Post(this.api)
    public tag = new Tag(this.api)
    public constructor() {}
}

module.exports.default = Moebooru
export * from "./entities/index"
export * from "./types/index"

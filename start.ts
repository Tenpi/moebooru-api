import Moebooru from "./moebooru"

require("dotenv").config();
(async () => {
    const moebooru = new Moebooru()
    const posts = await moebooru.search.posts()
    console.log(posts)
})()

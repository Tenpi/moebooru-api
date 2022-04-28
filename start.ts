import Moebooru from "./moebooru"

require("dotenv").config();
(async () => {
    const moebooru = new Moebooru()
    const posts = await moebooru.tag.counts()
    console.log(posts)
})()

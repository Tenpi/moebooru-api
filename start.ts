import Moebooru from "./moebooru"

require("dotenv").config();
(async () => {
    const moebooru = new Moebooru()
    console.log(moebooru)
})()

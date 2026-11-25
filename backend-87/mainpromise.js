import fs from "fs/promises"

let a = await fs.readFile("rishabh.txt")

let b = await fs.appendFile("rishabh.txt", "\n\n\n\nthis is amazing promise")
console.log(a.toString(), b)
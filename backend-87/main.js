const fs = require("fs")
// const fs = require("fs/promises")
 
console.log("starting")
// fs.writeFileSync("rishabh.txt", "rishabh is a good boy")

fs.writeFile("rishabh2.txt", "rishabh is a good boy2", ()=>{
    console.log("done")
    fs.readFile("rishabh2.txt", (error, data)=>{
        console.log(error, data.toString())
    })
})

fs.appendFile("rishabh.txt", "rishabhrobo", (e, d)=>{
    console.log(d)
})

console.log("ending")
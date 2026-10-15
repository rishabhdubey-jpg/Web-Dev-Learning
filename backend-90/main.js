const express = require("express")
const app = express()
const port = 3000
const blog = require('./routes/blog.js')
const fs = require("fs")

// app.use(express.static("public"))

app.use('/blog', blog)

// Middleware 1 - Logger for our Application 
app.use((req, res, next) => {
    console.log("req.headers")
    req.rishabh = "I'm Rishabh Bhayii"
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}\n`)
    res.send("Hacked by Middleware 1")
    next()
})

// Middleware 2
app.use((req, res, next) => {
    console.log('m2')
    req.rishabh = "I'm Rohan bhayii"
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!!')
})

app.get('/about', (req, res) => {
    res.send('Hello about!' + req.rishabh)
})

app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
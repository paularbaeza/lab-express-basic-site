const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.send('Hello World!')
  })


app.get("/home", (req, res ) => {

    res.sendFile(__dirname + "/views/home.html")

})

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about.html")
})

app.get("/works", (req, res) => {
    res.sendFile(__dirname + "/views/works.html")
})

app.get("/gallery", (req,res) => {
    res.sendFile(__dirname + "/views/gallery.html")
})

app.get("*", (req, res) => {
    res.send("Andeva jipicolgao??")
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
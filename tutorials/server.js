const express = require('express')
const app = express()

app.use(logger)
app.set("view engine", "ejs")

app.get("/", (req, res, next) => {
    console.log("Here")
    // res.send("Hi")
    // res.sendStatus(500)
    // res.status(500)
    // res.json({"message" : "Error"})
    // res.download("server.js")
    res.render("index", { text: "World" })
})

const userRouter = require("./routes/users")

app.use("/users", userRouter)

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)
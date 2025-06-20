// import express from "express"
// import bodyParser from "body-parser"
// const router = express.Router()

// const api = express()
// const port = 3000

// // Add headers before the routes are defined
// api.use(function (req, res, next) {
//   // Website you wish to allow to connect
//   res.setHeader("Access-Control-Allow-Origin", "*")

//   // Request methods you wish to allow
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE")

//   // Request headers you wish to allow
//   res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type")

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader("Access-Control-Allow-Credentials", true)

//   // Pass to next layer of middleware
//   next()
// })

// api.use(bodyParser.json())

// api.get("/get-started", (req, res) => {
//   res.send(JSON.stringify({ message: "Salut!" }))
// })

// const lists = []
// api.get("/kanban", (req, res) => {
//   res.send(JSON.stringify(lists))
// })

// api.post("/kanban/add-new-list", (req, res) => {
//   const { name } = req.body
//   lists.push({ name: name, tasks: [] })
// })

// api.post("/kanban/add-new-task", (req, res) => {
//   const { columnId, name } = req.body
//   lists[columnId].tasks.push({ name })
// })

// api.delete("/kanban/delete-list", (req, res) => {
//   const { id } = req.body
//   lists.splice(id, 1)
// })

// api.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
////////////////////////////////////////////////////////////////
import express from "express"
import bodyParser from "body-parser"
import { kanbanRouter } from "./routing/list.router.js"
import { generalRouter } from "./routing/general.router.js"
import { aboutYouRouter } from "./routing/aboutYou.router.js"
import { authRouter } from "./routing/auth.router.js"
import { temp2Router } from "./routing/temp2.router.js"

import cors from "cors"

const api = express()
const port = 3000

api.use(bodyParser.json())

api.use(
  cors({
    origin: "http://localhost:5173", // sau true pentru toate originile în dev
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
  })
)

//Add headers before the routes are defined
api.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*")

  // Request methods you wish to allow
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE")

  // Request headers you wish to allow
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type")

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true)

  // Pass to next layer of middleware
  next()
})

api.use(generalRouter)
api.use("/status2", kanbanRouter)

api.get("/status2", (req, res) => {
  res.send("API is running.")
})

api.use("/about-you", aboutYouRouter)

api.use("/auth", authRouter)

api.use("/temp2", temp2Router)

api.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

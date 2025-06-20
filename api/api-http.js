// import http from "http"

// const hostname = "0.0.0.0"
// const port = 3000

// const server = http.createServer((req, res) => {
//   const headers = {
//     "Access-Control-Allow-Origin": "*"
//   }

//   console.log("Headers ", req.rawHeaders)
//   //   res.statusCode = 200
//   // res.setHeader("Content-Type", "text/plain")
//   res.setHeader("Content-Type", "application/json")
//   res.writeHead(200, headers)
//   res.end(
//     JSON.stringify({
//       name: "Radu",
//       age: "30"
//     })
//   )
// })

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
// })

import http from "http"

const hostname = "0.0.0.0"
const port = 3000

const server = http.createServer((req, res) => {
  const headers = {
    "Access-Control-Allow-Origin": "*"
    // "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    // "Access-Control-Max-Age": 2592000, // 30 days
    // /** add other headers as per requirement */
  }

  // res.statusCode = 200;
  console.log("Headers", req.rawHeaders)
  res.setHeader("Content-Type", "application/json")
  res.writeHead(200, headers)
  res.end(
    JSON.stringify({
      name: "Timmy",
      age: 21
    })
  )
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

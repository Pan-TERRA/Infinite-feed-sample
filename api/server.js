const jsonServer = require('json-server')
const path = require('path')
const server = jsonServer.create()
const db = require(path.join(__dirname, '../db.json'))
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

server.use(router)

module.exports = (req, res) => {
  server(req, res)
}
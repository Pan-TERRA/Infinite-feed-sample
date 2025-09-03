const db = require('../db.json')

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  const page = parseInt(req.query._page) || 1
  const limit = parseInt(req.query._limit) || 10
  const start = (page - 1) * limit
  const end = start + limit

  const posts = db.posts.slice(start, end)
  
  res.setHeader('X-Total-Count', db.posts.length.toString())
  res.json(posts)
}
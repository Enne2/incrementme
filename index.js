
const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000
app.use(cors())

var impressions = {};
app.get('/', (req, res) => {
  console.log(req.url)
  impressions[req.params.url] = impressions[req.params.url] || 0;
  impressions[req.params.url] += 1
  res.send(JSON.stringify(impressions[req.params.url]))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
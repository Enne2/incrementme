const fs = require("fs");
const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000
app.use(cors())

var impressions =  JSON.parse(fs.readFileSync('data.json', 'utf8'));
app.get('/', (req, res) => {
  console.log(req.url)
  var url = req.query.url.split("?").shift()
  console.log(url)
  impressions[url] = impressions[url] || 0;
  impressions[url] += 1
  res.send(JSON.stringify(impressions[url]))
})

app.listen(port, () => {
  console.log(`Port: ${port}`)
})

setInterval(() => {fs.writeFileSync('data.json', JSON.stringify(impressions))}, 10000);
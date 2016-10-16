var http = require('http')
var express = require('express')

app = express()

app.use(express.static('public'))

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.get('/myFirstApi', (req, res) =>
  res.send('Hello')
)

app.listen(6969)

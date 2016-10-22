var http = require('http')
var express = require('express')

app = express()

app.use(express.static('public'))

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.get('/board', (req, res) =>
  res.send(['Croute', 'LOL'])
)

app.listen(6969)

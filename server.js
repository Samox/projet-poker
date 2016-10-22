var http = require('http')
var express = require('express')

var cards = require('cards');

app = express()

app.use(express.static('public'))

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.get('/board', (req, res) =>
  res.send(boardGame)
)

var deck = new cards.PokerDeck();
deck.shuffleAll();

var boardGame = [{color: 'heart', number: '7'},{color: 'spades', number: 'K'},{color: 'diamonds', number: 'Q'}]

app.listen(6969)

// create a deck of 52 cards
// use a prototype not a class to
// create new cards and decks?
function makeDeck() {
  var numOfCards = 52;
  var values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  var suits = ['spade', 'club', 'heart', 'dimond'];
  var cards = [];
  var card = { suit: "", value: "" }
  for (i = 0; i < values.length; i++) {
    for (j = 0; j < suits.length; j++) {
      card = { value: values[i], suit: suits[j] };
      cards.push(card);
    }
  }
  var deck = {
    cards: cards,
    numOfCards: numOfCards
  }
  return deck;
}

deck = makeDeck();
console.log(deck);
// //function dealCards(number){
// //}



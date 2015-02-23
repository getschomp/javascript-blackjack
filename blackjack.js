$(function(){
    function shuffle(o){
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
  };

  // create a deck of 52 cards
  // the deck should have a shuffle and a deal function
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

    //define a shuffle method for deck object
    deck.shuffle = function() {
      this.cards = shuffle(this.cards);
    }

    //define a deal method for deck object
    deck.deal = function() {
      return deltCard = cards.pop();
    }

    return deck;
    // todo:create a card constructor outside this function
  }


  function playBlackJack(){
    deck = makeDeck();
    deck.shuffle();
    deck.deal();
    console.log(deck);
  }

  playBlackJack();
});





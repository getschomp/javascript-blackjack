$(function(){
    function shuffle(o){
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
  };

  // create a deck of 52 cards
  // the deck should have a shuffle and a deal function
  function makeDeck() {
    var numOfCards = 52;
    var ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    var suits = ['spade', 'club', 'heart', 'dimond'];
    var cards = [];
    var card = { suit: "", rank: "" }
    for (i = 0; i < ranks.length; i++) {
      for (j = 0; j < suits.length; j++) {
        card = { rank: ranks[i], suit: suits[j] };
        cards.push(card);
      }
    }
    var deck = {
      cards: cards,
      numOfCards: numOfCards
    }

    // define a shuffle method for deck object
    deck.shuffle = function() {
      this.cards = shuffle(this.cards);
    }

    // define a deal method for deck object
    // subtracts a card from the deck and returns that card
    deck.deal = function(hand) {
      this.numOfCards = this.numOfCards - 1;
      var dealt = cards.pop();
      hand.cards.push(dealt);
    }

    return deck;
    // todo: create a card constructor outside this function
  }

  function makeHand() {
    var hand = {
      cards: new Array()
      }

    // counts the current value of the hand
    hand.value = function() {
      i = 0;
    }

    return hand;
  }


  function playBlackJack(){
    deck = makeDeck();
    deck.shuffle();
    playerHand = makeHand();
    deck.deal(playerHand);
    deck.deal(playerHand);
    console.log(deck);
    console.log(playerHand);
  }

  playBlackJack();

});





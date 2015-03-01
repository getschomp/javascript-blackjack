$(function(){

  // Global library functions
  // TODO: make this a method that can only be called on deck
  function shuffle(o){
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
  };

  function sumArray(array){
      var total = 0;
      $.each(array, function(index, value) {
        total += value;
      });
      return total;
    }

  // create a deck of 52 cards
  // the deck should have a shuffle and a deal function
  function Card(r, s) {
    var card = {
      rank: r,
      suit: s
    }

    card.getType = function() {
      if (this.rank == "J" || this.rank == "Q" || this.rank == "K") {
        type = "Face";
      }
      else if (this.rank == "A") {
        type = "Ace";
      }
      else {
        type = "Number";
      }
      return type;
    }

    card.type = card.getType();

    return card;
  }

  function Deck() {
    var numOfCards = 52;
    var ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    var suits = ['Spade', 'Club', 'Heart', 'Dimond'];
    var cards = [];
    for (i = 0; i < ranks.length; i++) {
      for (j = 0; j < suits.length; j++) {
        var card = new Card(ranks[i], suits[j])
        cards.push(card);
      }
    }

    //define a deck object initializer
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
    deck.deal = function(hand, times) {
      this.numOfCards = this.numOfCards - (1 * times);
      for (var i = 0; i < times; i++) {
        var dealt = cards.pop();
        hand.cards.push(dealt);
        document.write(dealt);
      }
    }

    return deck;
  }

  //creates hands
  function Hand() {
    var hand = {
      cards: new Array()
      }

    hand.logCards = function(){
      for(i=0; i< this.cards.length; i++) {
        console.log(this.cards[i])
      }
    }

    hand.card = function(number) {
      return this.cards[number];
    }


     // counts the current value of the hand(incomplete)
    hand.scores = function() {
      var score = 0;
      var scores = [];
      for (i = 0; i < this.cards.length; i++) {
        type = this.card(i).type
        if (type === "Face") {
          score = 10;
        } else if (type === "Number") {
          score = Math.floor(this.card(i).rank);
        } else if (type === "Ace") {
          score = 1;
        }
        scores.push(score);
      }
      return scores;
    }

    return hand;
  }




  function playBlackJack(){
    deck = new Deck();
    deck.shuffle();
    playerHand = new Hand();
    deck.deal(playerHand, 2);
    console.log(deck);
    playerHand.logCards();
    var playerScores = playerHand.scores();
    playerScore = sumArray(playerScores);
    console.log(playerScore);
  }

  playBlackJack();

});





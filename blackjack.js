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
        document.write("You were dealt " + dealt.rank + " " + dealt.suit + "\n");
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
    hand.score = function() {
      var score = 0;
      var scores = [];
      for (i = 0; i < this.cards.length; i++) {
        type = this.card(i).type
        if (type === "Face") {
          score = 10;
        } else if (type === "Number") {
          score = Math.floor(this.card(i).rank);
        } else if (type === "Ace") {
          if (sumArray(scores) + 11 > 21) {
            score = 1;
          }
          else {
            score = 11;
          }
        }
        scores.push(score);

      }
      return sumArray(scores);
    }

    return hand;
  }

  function showScore(){
    document.write("your score is" + playerHand.score())
  }

  // function hitOrStand() {
  //   var exit = false;
  //   var choice = prompt("Do you want to hit or Stand? (H/S) ");
  //   while(exit === false) {
  //     var score = playerHand.score;
  //     debugger;
  //     if(score >= 21){
  //       exit = true;
  //     }
  //     else if (choice === "H" && score < 21 ) {
  //       deck.deal(playerHand, 1);
  //       showScore();
  //       var choice = prompt("Do you want to hit or Stand? (H/S) ");
  //     }
  //     else if (choice === "S" && score < 21 ){
  //       document.write("you choose to stand");
  //       showScore();
  //       exit = true;
  //       var choice = prompt("Do you want to hit or Stand? (H/S) ");
  //     }
  //     else {
  //       choice = prompt("Please choose either H or S! " + "Do you want to hit or Stand? (H/S) ");
  //     }
  //   }
  // }

  function playBlackJack(){
    deck = new Deck();
    deck.shuffle();
    playerHand = new Hand();
    showScore();
    dealersHand = new Hand();
    deck.deal(playerHand, 2);
    showScore();
    console.log(deck);
    // hitOrStand();
  }

  playBlackJack();

});





class Deck {
    constructor(name){ //no parameters needed since we are going to push generated/delt cards
        this.name = name
        this.deck = []; //empty arr where we can push the created card into
        this.dealt_cards = [];  //the player's cards
    }
    generate_deck() {
        let card = (value, suit) => {
            this.name = value + " of " + suit;
            this.value = value;
            this.suit = suit;
            return {name:this.name, value:this.value, suit:this.suit}; //returns the object card
        }

        let values = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        let suits = ['Hearts','Diamonds','Spades','Clubs'];

        for (let s = 0; s < suits.length; s++){ 
            for (let v = 0; v < values.length; v++) {    
                this.deck.push(card(values[v], suits[s])); //adds the newest card object to the end of the array
                //push/return value/suit is of our card function to our deck which will return our created card object
                //loop suits then values where for each suit is attatched with a value recursively createing our deck
            }
        }
    }
    show_deck() {
        if (this.deck.length == 0) {
            console.log("Deck is not generated.");
        } else {
            for (let c = 0; c < this.deck.length; c++) {
                console.log(this.deck[c]);
            }
        }
    }
    shuffle() { //swap out each card with a random card at an index 
        let current_index = this.deck.length, temp_val, ran_index;
        while(0 != current_index){
            ran_index = Math.floor(Math.random() * current_index); //create random index and turns into a value
            current_index -= 1;
            temp_val = this.deck[current_index];
            this.deck[current_index] = this.deck[ran_index]; //replaces card
            this.deck[ran_index] = temp_val;
        }
    }
    deal() {
        let dealt_cards = this.deck.shift();
        this.dealt_cards.push(dealt_cards)
        return dealt_cards
    }
    replace(){
        this.deck.unshift(this.dealt_cards.shift())//add first value of array and back onto our deck
    }
    clear_deck(){
        this.deck = [];
    }
}

//playerHand invokes all methods from Deck
class Player extends Deck {
    constructor(playerName, name){
        super(name);
        this.playerName = playerName
        this.name = name
    }
    playerHand(){
        super.generate_deck();
        super.shuffle();
        // super.show_deck();
        this.hand = super.deal();
        console.log(this.playerName + " has the " + this.hand.name)
    }
}

const deck = new Deck();
// deck.generate_deck();
// deck.show_deck();
// deck.shuffle();
// deck.show_deck();
// console.log(deck.deal());
const player1 = new Player("Kenny");
player1.playerHand();







// Create a Card class. A card should have the following functionality:

// Each Card should have a suit ("Hearts", "Clubs", "Diamonds", "Spades")
// Each Card should have a string value (eg, "Ace", "Two", ...., "Queen", "King")
// Each Card should have a numerical value (1-13)
// Each Card should have a show method (log the card's information to the console)
// Create a Deck class. A deck should have the following functionality:

// The Deck should contain the 52 standard Cards
// The Deck should be able to shuffle
// The Deck should be able to reset
// The Deck should be able to deal a random Card
// Deal should return the Card that was dealt and remove it from the Deck
// Now create a Player class. A Player should have the following functionality:

// The Player should have a name
// The Player should have a hand (an array of cards taken from a Deck)
// The Player should be able to take a Card (use the deck.deal method)
// The Player should be able to discard a Card
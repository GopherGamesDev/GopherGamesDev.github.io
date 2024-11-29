// JavaScript source code

const CARD_VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const SUITS = ["HEARTS", "SPADES", "DIAMONDS", "CLUBS"];
const SPRITE_SCALE = 0.45;

let dealerSpace = document.getElementById("dealer");
let playerSpace = document.getElementById("player");
let startButton = document.getElementById("start");
let hitButton = document.getElementById("hit");
let standButton = document.getElementById("stand");
let betVal = document.getElementById("betVal");
let chipsDisplay = document.getElementById("chips");
let winMessage = document.getElementById("win");
let spriteSheet = new Image();
spriteSheet.src = 'archiveImages/deckofcards.jpg';

class card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
        this.facedown = true;
        this.spriteWidth = 300;
        this.spriteHeight = 420;
    }
    drawCard(canvas) {
        let context = canvas.getContext('2d');
        let spriteXY;

        if (this.facedown) {
            spriteXY = [0, 0];
        }
        else {
            spriteXY = this.getOffset();
        }

        context.drawImage(spriteSheet, spriteXY[0], spriteXY[1], this.spriteWidth, this.spriteHeight, 0, 0, this.spriteWidth, this.spriteHeight);
    }
    getOffset() {
        let xPos, yPos;
        switch (this.suit) {
            case "SPADES":
                switch (this.value) {
                    case "A":
                        xPos = 1;
                        yPos = 0;
                        break;
                    case "2":
                        xPos = 2;
                        yPos = 0;
                        break;
                    case "3":
                        xPos = 3;
                        yPos = 0;
                        break;
                    case "4":
                        xPos = 4;
                        yPos = 0;
                        break;
                    case "5":
                        xPos = 5;
                        yPos = 0;
                        break;
                    case "6":
                        xPos = 6;
                        yPos = 0;
                        break;
                    case "7":
                        xPos = 7;
                        yPos = 0;
                        break;
                    case "8":
                        xPos = 8;
                        yPos = 0;
                        break;
                    case "9":
                        xPos = 9;
                        yPos = 0;
                        break;
                    case "10":
                        xPos = 10;
                        yPos = 0;
                        break;
                    case "J":
                        xPos = 0;
                        yPos = 1;
                        break;
                    case "Q":
                        xPos = 1;
                        yPos = 1;
                        break;
                    case "K":
                        xPos = 2;
                        yPos = 1;
                        break; 
                }
                break;
            case "HEARTS":
                switch (this.value) {
                    case "A":
                        xPos = 3;
                        yPos = 1;
                        break;
                    case "2":
                        xPos = 4;
                        yPos = 1;
                        break;
                    case "3":
                        xPos = 5;
                        yPos = 1;
                        break;
                    case "4":
                        xPos = 6;
                        yPos = 1;
                        break;
                    case "5":
                        xPos = 7;
                        yPos = 1;
                        break;
                    case "6":
                        xPos = 8;
                        yPos = 1;
                        break;
                    case "7":
                        xPos = 9;
                        yPos = 1;
                        break;
                    case "8":
                        xPos = 10;
                        yPos = 1;
                        break;
                    case "9":
                        xPos = 0;
                        yPos = 2;
                        break;
                    case "10":
                        xPos = 1;
                        yPos = 2;
                        break;
                    case "J":
                        xPos = 2;
                        yPos = 2;
                        break;
                    case "Q":
                        xPos = 3;
                        yPos = 2;
                        break;
                    case "K":
                        xPos = 4;
                        yPos = 2;
                        break;
                }
                break;
            case "CLUBS":
                switch (this.value) {
                    case "A":
                        xPos = 5;
                        yPos = 2;
                        break;
                    case "2":
                        xPos = 6;
                        yPos = 2;
                        break;
                    case "3":
                        xPos = 7;
                        yPos = 2;
                        break;
                    case "4":
                        xPos = 8;
                        yPos = 2;
                        break;
                    case "5":
                        xPos = 9;
                        yPos = 2;
                        break;
                    case "6":
                        xPos = 10;
                        yPos = 2;
                        break;
                    case "7":
                        xPos = 0;
                        yPos = 3;
                        break;
                    case "8":
                        xPos = 1;
                        yPos = 3;
                        break;
                    case "9":
                        xPos = 2;
                        yPos = 3;
                        break;
                    case "10":
                        xPos = 3;
                        yPos = 3;
                        break;
                    case "J":
                        xPos = 4;
                        yPos = 3;
                        break;
                    case "Q":
                        xPos = 5;
                        yPos = 3;
                        break;
                    case "K":
                        xPos = 6;
                        yPos = 3;
                        break;
                }
                break;
            case "DIAMONDS":
                switch (this.value) {
                    case "A":
                        xPos = 7;
                        yPos = 3;
                        break;
                    case "2":
                        xPos = 8;
                        yPos = 3;
                        break;
                    case "3":
                        xPos = 9;
                        yPos = 3;
                        break;
                    case "4":
                        xPos = 10;
                        yPos = 3;
                        break;
                    case "5":
                        xPos = 0;
                        yPos = 4;
                        break;
                    case "6":
                        xPos = 1;
                        yPos = 4;
                        break;
                    case "7":
                        xPos = 2;
                        yPos = 4;
                        break;
                    case "8":
                        xPos = 3;
                        yPos = 4;
                        break;
                    case "9":
                        xPos = 4;
                        yPos = 4;
                        break;
                    case "10":
                        xPos = 5;
                        yPos = 4;
                        break;
                    case "J":
                        xPos = 6;
                        yPos = 4;
                        break;
                    case "Q":
                        xPos = 7;
                        yPos = 4;
                        break;
                    case "K":
                        xPos = 8;
                        yPos = 4;
                        break;
                }
                break;
        }

        return [300 * xPos, 420 * yPos];
    }
    flip(canvas) {
        this.facedown = (!this.facedown);
        this.drawCard(canvas);
    }
}

class deck {
    constructor() {
        this.cards = [];
        this.shuffle();
    }

    deal() {
        if (this.cards.length == 0) {
            this.shuffle();
        }
        return this.cards.pop();
    }

    shuffle() {
        this.cards = [];
        for (let value of CARD_VALUES) {
            for (let suit of SUITS) {
                this.cards.push(new card(value, suit));
            }
        }

        let m = this.cards.length, t, i;

        while (m) {
            i = Math.floor(Math.random() * m--);

            t = this.cards[m];
            this.cards[m] = this.cards[i];
            this.cards[i] = t;
        }
    }
}

class player {
    constructor(chips, div) {
        this.hand = [];
        this.total = 0;
        this.chips = chips;
        this.stand = false;
        this.highAce = false;
        this.cardSlots = [];
        this.playerDiv = div;
    }

    addCard(card, parentDiv) {
        this.hand.push(card);

        let canvas = document.createElement('canvas');
        canvas.id = "cardSlot" + this.cardSlots.length;
        canvas.width = 300 * SPRITE_SCALE;
        canvas.height = 420 * SPRITE_SCALE;

        let context = canvas.getContext('2d');
        context.imageSmoothingEnabled = false;
        context.scale(SPRITE_SCALE, SPRITE_SCALE);

        parentDiv.appendChild(canvas);

        card.drawCard(canvas);

        this.cardSlots.push(canvas);
        
        this.updateTotal(card);
    }

    clearHand() {
        this.hand = [];
        this.total = 0;
        this.stand = false;
        this.highAce = false;
        for (let canvas of this.cardSlots) {
            canvas.parentNode.removeChild(canvas);
        }
        this.cardSlots = [];
    }

    updateTotal(card) {
        switch (card.value) {
            case "2":
                this.total += 2;
                break;
            case "3":
                this.total += 3;
                break;
            case "4":
                this.total += 4;
                break;
            case "5":
                this.total += 5;
                break;
            case "6":
                this.total += 6;
                break;
            case "7":
                this.total += 7;
                break;
            case "8":
                this.total += 8;
                break;
            case "9":
                this.total += 9;
                break;
            case "10":
            case "J":
            case "Q":
            case "K":
                this.total += 10;
                break;
            case "A":
                if (this.total <= 10) {
                    this.total += 11;
                    this.highAce = true;
                }
                else {
                    this.total += 1;
                }
                break;
        }
        if (this.highAce && this.total > 21) {
            this.total -= 10;
            this.highAce = false;
        }
    }
}

class BlackjackGame{
    constructor() {
        this.dealer = new player(0, dealerSpace);
        this.player1 = new player(100, playerSpace);
        this.deck = new deck();
        this.bet = 0;
        this.win = true;
        this.drawDeck();
    }

    makeBet(num) {
        this.bet = num;
    }  

    hit(player) {
        player.addCard(this.deck.deal(), player.playerDiv);
        player.hand[player.hand.length - 1].flip(player.cardSlots[player.cardSlots.length - 1]);
    }

    stand(player) {
        player.stand = true;
    }

    isBust(player) {
        return (player.total > 21);
    }

    roundOver(player) {
        if (player.total == 21) {
            this.dealer.hand[1].flip(this.dealer.cardSlots[2]);
        }
        return (this.isBust(player) || player.stand || player.total == 21);
    }

    resolveDealer(dealer) {
        dealer.hand[1].flip(dealer.cardSlots[2]);
        while (dealer.total < 17 && !this.isBust(dealer)) {
            this.hit(dealer);
        }
    }

    isTie() {
        winMessage.innerHTML = "It's a push";
        return (this.player1.total == this.dealer.total && !this.isBust(this.player1));
    }

    isWin() {
        if (this.isBust(this.player1)) {
            return false;
        }
        else if (this.isBust(this.dealer)) {
            return true;
        }
        else {
            return (this.player1.total > this.dealer.total);
        }
    }

    resolveBet(player, win) {
        if (win) {
            winMessage.innerHTML = "You win!";
            player.chips += Number(this.bet);
            chipsDisplay.innerHTML = "Current Chips: " + player.chips;
        }
        else {
            winMessage.innerHTML = "You lose...";
            player.chips -= Number(this.bet);
            chipsDisplay.innerHTML = "Current Chips: " + player.chips;
        }

        return (player.chips > 0);
    }

    roundStart() {
        this.player1.clearHand();
        this.dealer.clearHand();
        this.drawDeck();
        this.bet = betVal.value;
        betVal.disabled = true;
        this.hit(this.player1);
        this.hit(this.dealer);
        this.hit(this.player1);
        this.dealer.addCard(this.deck.deal(), dealerSpace);
        startButton.disabled = true;
        startButton.style = "cursor: not-allowed";
        hitButton.disabled = false;
        hitButton.style = "cursor: pointer";
        standButton.disabled = false;
        standButton.style = "cursor: pointer";
        winMessage.innerHTML = "";
        if (this.player1.total == 21) {
            this.dealer.hand[1].flip(this.dealer.cardSlots[2]);
            if (!this.isTie()) {
                this.bet *= 1.5;
                this.bet = Math.ceil(this.bet);
            }
            this.roundEnd();
        }
    }

    roundEnd() {
        if (!this.isTie()) {
            this.resolveBet(this.player1, this.isWin());
        }
        this.deck.shuffle();
        betVal.disabled = false;
        startButton.disabled = false;
        startButton.style = "cursor: pointer";
        hitButton.disabled = true;
        hitButton.style = "cursor: not-allowed";
        standButton.disabled = true;
        standButton.style = "cursor: not-allowed";
        if (this.player1.chips < 1) {
            winMessage.innerHTML = "Oh no! You're out of money!";
            startButton.disabled = true;
            startButton.style = "cursor: not-allowed";
        }
    }

    drawDeck() {
        let canvas = document.createElement('canvas');
        canvas.id = "deck";
        canvas.width = 300 * SPRITE_SCALE;
        canvas.height = 420 * SPRITE_SCALE;

        let context = canvas.getContext('2d');
        context.imageSmoothingEnabled = false;
        context.scale(SPRITE_SCALE, SPRITE_SCALE);

        dealerSpace.appendChild(canvas);
        this.dealer.cardSlots.push(canvas);

        context.drawImage(spriteSheet, 0, 0, 300, 420, 0, 0, 300, 420);
    }
}


let game = new BlackjackGame();
window.onload = function () {
    chipsDisplay.innerHTML = "Current Chips: 100"
    hitButton.disabled = true;
    hitButton.style = "cursor: not-allowed";
    standButton.disabled = true;
    standButton.style = "cursor: not-allowed";
}

startButton.onclick = function () {
    chipsDisplay.innerHTML = "Current Chips: " + game.player1.chips;
    betVal.value = Math.floor(betVal.value);
    if (game.player1.chips >= betVal.value && betVal.value > 0) {
        game.roundStart();
    }
    else if (betVal.value < 1) {
        betVal.value = 1;
        winMessage.innerHTML = "You must bet at least 1 chip!";
    }
    else {
        winMessage.innerHTML = "You don't have enough chips!";
    }
}

hitButton.onclick = function () {
    game.hit(game.player1);
    if (game.roundOver(game.player1)) {
        game.roundEnd();
    }
}

standButton.onclick = function () {
    game.stand(game.player1);
    game.resolveDealer(game.dealer);
    game.roundEnd();
}
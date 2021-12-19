import Deck from "./Deck.js"
import promptSync from "prompt-sync"
import Hand from "./Hand.js"

class Blackjack {
    constructor(){
        this.dealer = new Hand()
        this.player = new Hand()
        this.gameDeck = new Deck()
    }

    dealFirstTwo(){
        this.player.addCard(this.gameDeck.deal())
        this.player.addCard(this.gameDeck.deal())
        this.dealer.addCard(this.gameDeck.deal())
        this.dealer.addCard(this.gameDeck.deal())
        console.log(`Your hand:`)
        this.player.displayHand()
    }

    getHitOrStand(){
        const prompt = promptSync()
        const hitOrStand = prompt('would you like to hit or stand?')
        if (hitOrStand.toLowerCase() === 'hit'){
            this.player.addCard(this.gameDeck.deal())
            return `Hit! ${this.player.displayHand()}`
        }else{
            return `Stand!`
        }
    }

    dealerPlays(){
        console.log(`Dealer's Turn!`)
        while (this.dealer.getHandScore() < 17){
            this.dealer.addCard(this.gameDeck.deal())
        } 
        this.dealer.displayHand()
        console.log(`Dealer's score: ${this.dealer.getHandScore()}`)
    }

    decideWinner(){
        if (this.player.getHandScore() <= 21 && this.player.getHandScore() > this.dealer.getHandScore()){
            console.log(`You win!!!!`)
        }else if (this.player.getHandScore() < 21 && this.dealer.getHandScore() <= 21 && this.dealer.getHandScore() > this.player.getHandScore()){
            console.log(`Dealer Wins!!`)
        }else if (this.player.getHandScore() === this.dealer.getHandScore()){
            console.log(`Tie!!!!`)
        }else if (this.dealer.getHandScore() > 21){
            console.log(`Dealer busted! You win!`)
        }
    }
}

export default Blackjack

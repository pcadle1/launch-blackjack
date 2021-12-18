import Deck from "./Deck.js"
import promptSync from "prompt-sync"
import Hand from "./Hand.js"

class Blackjack {
    constructor(){
        this.dealer = new Hand()
        this.player = new Hand()
        this.gameDeck = new Deck()
    }

    playGame(){
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
}

export default Blackjack

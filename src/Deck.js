import _ from 'lodash'
import Card from './Card.js'

const suits = ['♦', '♣', '♠', '♥']
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

class Deck {
    constructor() {
        this.cards = this.buildDeck()
    }

    buildDeck(){
        let myDeck = []
        suits.forEach((suit) => {
            ranks.forEach((rank) => {
                myDeck.push(new Card(rank, suit))
            })
        })
        return _.shuffle(myDeck)
    }

    deal(){
        return this.cards.pop()
    }
}

export default Deck

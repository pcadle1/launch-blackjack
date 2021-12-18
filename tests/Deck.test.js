
import _ from 'lodash'
import Card from "../src/Card.js"
import Deck from "../src/Deck.js"

// Your tests here
describe("the deck", () => {

    let testDeck
    beforeEach(() => {
        testDeck = new Deck()
    })

    it('should have 52 unique cards', () => {
        expect(testDeck.cards.length).toEqual(52)
        expect(_.uniq(testDeck.cards).length).toEqual(52)
    })

    describe('#deal', () => {
        it('should return one card', () => {
            expect(testDeck.deal()).toBeInstanceOf(Card)
            expect(testDeck.cards.length).toEqual(51)
        })
    })
})

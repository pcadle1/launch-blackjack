import Hand from "../src/Hand.js"
import Card from '../src/Card.js'

describe("the hand", () => {

    let testHand
    let card
    beforeEach(() => {
        testHand = new Hand()
        card = new Card(5, 'a')
    })

    it('should instantiate with an empty array of cards', () => {
        expect(testHand.cards).toEqual([])
    })

    describe('#getHandScore', () => {
        it('should return the total score of all the cards in the hand', () => {
            expect(testHand.getHandScore()).toEqual(0)
            testHand.addCard(card)
            expect(testHand.getHandScore()).toEqual(5)
        })
    })

    describe('#addCard', () => {
        it('should add a card to the list of cards', () => {
            testHand.addCard(card)
            expect(testHand.cards.length).toEqual(1)
            expect(testHand.cards[0]).toEqual(card)
        })
    })


})

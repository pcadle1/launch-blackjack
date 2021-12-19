
import Blackjack from "../src/Blackjack.js"
import Deck from "../src/Deck.js"


describe("Blackjack", () => {

    let testGame

    beforeEach(() => {
        testGame = new Blackjack()
    })

    describe('#dealFirstTwo', () => {
        it('should deal two cards to the player and dealer', () => {
            testGame.dealFirstTwo()
            expect(testGame.player.cards.length).toEqual(2)
            expect(testGame.dealer.cards.length).toEqual(2)
        })
        it('should have a new deck', () => {
            expect(testGame.gameDeck).toBeInstanceOf(Deck)
            expect(testGame.gameDeck.cards.length).toEqual(52)
        })
    })

    describe('#dealerPlays', () => {
        it('should deal cards to dealer until score is over 17', () => {
            testGame.dealerPlays()
            expect(testGame.dealer.getHandScore()).toBeGreaterThan(16)
        })
    })

})

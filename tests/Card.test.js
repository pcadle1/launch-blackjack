import Card from '../src/Card.js'

describe("the card", () => {

    let testCard
    let rank = 10
    let suit = '♥'

    beforeEach(()=> {
        testCard = new Card(rank, suit)
    })

    it('should be defined', () => {
        expect(testCard).toBeDefined()
    })
    it('should be instantiated with a rank', () => {
        expect(testCard.rank).toEqual(10)
    })
    it('should be instantiated with a suit', () => {
        expect(testCard.suit).toEqual('♥')
    })

    describe('#getValue', () => {
        it('should return the value of the card', () => {
            let aceCard = new Card('A', '♥')
            let faceCard = new Card('K', '♥')

            expect(testCard.getValue()).toEqual(10)
            expect(aceCard.getValue()).toEqual(11)
            expect(faceCard.getValue()).toEqual(10)
        })
    })


})

class Hand {
    constructor(){
      this.cards = []
    }

    getHandScore(){
      let sum = 0
      this.cards.forEach((card) => {
        sum += card.getValue()
      })
      return sum
    }

    addCard(card){
      this.cards.push(card)
    }

    displayHand(){
      this.cards.forEach((card) => {
        console.log(card.rankAndSuit())
      })
    }
}

export default Hand

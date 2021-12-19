class Hand {
    constructor(){
      this.cards = []
    }

    getHandScore(){
      let sum = 0
      let aceCount = 0
      this.cards.forEach((card) => {
        sum += card.getValue()
        if (card.rank === 'A'){
          aceCount++
        }
      })
      while(aceCount > 0){
        if (sum > 21){
          sum -= 10
          aceCount -= 1
        }else{
          break
        }
      }
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

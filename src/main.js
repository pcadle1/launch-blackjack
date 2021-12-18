import Blackjack from "./Blackjack.js"
import Deck from "./Deck.js"

// GAME START

const game = new Blackjack()
game.dealFirstTwo()
while(game.player.getHandScore() <= 21){
    let decision = game.getHitOrStand()
    if (game.player.getHandScore() > 21){
        console.log('BUST! You lose!')
    }else if (decision === 'Stand!'){
        game.dealerPlays()
        break
    }
}
console.log(`Your total was: ${game.player.getHandScore()}`)


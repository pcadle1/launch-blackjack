class Card {
    constructor(rank, suit){
        this.rank = rank
        this.suit = suit
        this.value = null
    }

    getValue(){
        if (typeof(this.rank) === 'number'){
            this.value = this.rank
        }else if (this.rank === 'A'){
            this.value = 11
        }else{
            this.value = 10
        }
        return this.value
    }

    rankAndSuit(){
        return `${this.rank} ${this.suit}`
    }
}

export default Card

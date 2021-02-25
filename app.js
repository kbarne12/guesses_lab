const game = {
    title:'Guess the number',
     biggestNum: 100,
     smallestNum: 1,
     prevGuessess: [],
     secretNum: null,
     play: function() {
        this.secretNum = Math.floor(Math.random() * 
          (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
          return this.secretNum

 }, 
    getGuess: function(){ 
        let guess: 
        
    while(isNan(guess) || guess<this.smallestNum || guess>this.biggestNum) {
        guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`));

     }


}
}


  
  game.getGuess()
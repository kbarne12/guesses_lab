const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    getGuess: function()
    {
      let guess;
      while(isNaN(guess) || guess<this.smallestNum || guess>this.biggestNum)
      {
        guess = parseInt(prompt('Enter a guess between ${this.smallestNum} and ${this.biggestNum} the secret num is $this.secretNum}'));
      }
      return guess;
    }

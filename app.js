const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    currentGuess: null,
    getGuess: function()
    {
      let guess;
      while(isNaN(guess) || guess<this.smallestNum || guess>this.biggestNum)
      {
        guess = parseInt(prompt('Enter a guess between ${this.smallestNum} and ${this.biggestNum} the secret num is $this.secretNum}'));
      }
      return guess;
    },
     render : function()
       {
         let lastGuess = this.prevGuesses.pop()
         this.prevGuesses.push(lastguess)
         console.log(lastGuess)
         if(lastGuess === this.secretNum)
         {
           alert('Congrats! You guessed the number in $this.prevGuesses.length}guessess!')
         }
         if(lastGuess>this.secretNum)
         {
           alert('Your guess is too high Previous Guesses ${this.prevGuesses.join(',')}')
         }
         if(lastGuess<this.secretNum)
         {
           alert('YOur guess is too low Previouse Guesses ${this.prevGuesses.join(',')}')
         }
       },
       play: function(){
         this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
         do {
            currentGuess = this.getGuess()
            this.prevGuesses.push(currentGuess)
            this.render();
            if(currentGuess==this.secretNum)
            {
              return;
           }
         } while (true)
       },
      }
      game.play()
      console.log(game.play())
     
    

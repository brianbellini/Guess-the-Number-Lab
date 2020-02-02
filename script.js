const game = {                  //Game object start
// Parameters
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  
// Methods
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    

    alert(this.secretNum);
      
    let guess;

     do {
      guess = this.getGuess()
      this.prevGuesses.push(guess); 
      this.render(guess);
    } while (guess != this.secretNum)

    return;

  },
  getGuess: function() {
    let tryAgain = '';
    let currentGuess;
    
     do {
      currentGuess = prompt(`${tryAgain}Enter a guess between ${this.smallestNum} and ${this.biggestNum}`);

      if (isNaN(currentGuess)) {    //If not convertable to num
      tryAgain = `That wasn't a number, try again.
      `;
      } else {
        tryAgain = `That wasn't between ${this.smallestNum} and ${this.biggestNum} try again.
        `
      }

      if (currentGuess === 'quit') {
        currentGuess = this.secretNum;
      }

      //While not number or too small or too big
     } while ((isNaN(currentGuess) || ((currentGuess < this.smallestNum) || (currentGuess > this.biggestNum)) ));
     return parseInt(currentGuess);       //Convert to number
  },

  render: function(guess) {

    let alertMessage = (guess === this.secretNum) ? `Congrats! You guessed the number in ${this.prevGuesses.length} guesses!` : `Your guess is too ${guess < this.secretNum ? 'low' : 'high'}
    Previous guesses: ${this.prevGuesses.join(', ')}`

    alert(alertMessage);
  },
  
};        //End of Object

// Main
//game.play()
class GuessingGame {

  constructor(number) {
    this.number = number;
    this.middle;
    this.guessNumber;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.middle = Math.floor((this.max + this.min) / 2);
    if(this.number > this.middle) {
      this.min = this.middle;
    } else  {
      this.max = this.middle;
    }

    this.guessNumber = Math.ceil(Math.random() * (this.max - this.min) + this.min);
    if(this.number === this.guessNumber) {
      return this.guessNumber;
    }
    else {
      if (this.guessNumber > this.number) {
        this.lower();
      }
      else {
        this.greater();
      }
    }
  }

  lower() {
    this.max = this.guessNumber;
    this.guess();
  }

  greater() {
    this.min = this.guessNumber;
    this.guess();
  }
}

module.exports = GuessingGame;

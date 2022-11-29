class BaseballReferee {
  #ball;
  #strike;

  constructor(randomNumber) {
    this.randomNumber = randomNumber;
    this.#ball = 0;
    this.#strike = 0;
  }

  ballCount(userInput, randomNumber) {
    randomNumber.forEach((number, index) => {
      if(userInput.includes(number.toString()) && number.toString() !== userInput[index]) {
        this.#ball += 1;
      }
    })

    return this.#ball;
  }

  strikeCount(userInput, randomNumber) {
    randomNumber.forEach((number, index) => {
      if(number.toString() === userInput[index]) {
        this.#strike += 1;
      }
    })

    return this.#strike;
  }

  compare(userInput) {
    const ball = this.ballCount(userInput, this.randomNumber);
    const strike = this.strikeCount(userInput, this.randomNumber);
    if(strike === 3) return true;
    if(strike === 0) return `${ball}볼`;
    if(ball === 0) return `${strike}스트라이크`;
    if(strike === 0 && ball === 0) return `낫싱`;

    return `${ball}볼 ${strike}스트라이크`;
  }
}

module.exports = BaseballReferee;
class BaseballReferee {
  #ball
  #Strike;

  constructor(userInput, randomNumber) {
    this.userInput = userInput;
    this.randomNumber = randomNumber;
    this.#ball = 0;
    this.#strike = 0;
  }

  ballCount(userInput, randomNumber) {
    randomNumber.forEach((number, index) => {
      if(userInput.includes(number) && number !== userInput[index]) {
        this.#ball += 1;
      }
    })

    return this.#ball;
  }

  strikeCount(userInput, randomNumber) {
    randomNumber.forEach((number, index) => {
      if(userInput.includes(number) && number === userInput[index]) {
        this.#Strike += 1;
      }
    })

    return this.#Strike;
  }

  compare() {
    const ball = this.ballCount(this.userInput, this.randomNumber);
    const strike = this.strikeCount(this.userInput, this.randomNumber);
    if(strike === 3) return '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료';
    if(strike === 0) return `${ball}볼`;
    if(ball === 0) return `${strike}스트라이크`;
    if(strike === 0 && ball === 0) return `낫싱`;

    return `${ball}볼 ${strike}스트라이크`;
  }
}
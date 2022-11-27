class BaseballReferee {
  #userInput;
  #randomNumber;

  constructor(userInput, randomNumber) {
    this.#userInput = userInput;
    this.#randomNumber = randomNumber;
  }

  ballCount(userInput, randomNumber) {
    let ballCount = 0;
    randomNumber.forEach((number, index) => {
      if(userInput.includes(number) && number !== userInput[index]) {
        ballCount += 1;
      }
    })

    return ballCount;
  }

  strikeCount(userInput, randomNumber) {
    let strikeCount = 0;
    randomNumber.forEach((number, index) => {
      if(userInput.includes(number) && number === userInput[index]) {
        strikeCount += 1;
      }
    })

    return strikeCount;
  }

  compare(ballCount, strikeCount) {
    ballCount = this.ballCount(this.#userInput, this.#randomNumber);
    strikeCount = this.strikeCount(this.#userInput, this.#randomNumber);
    if(strikeCount === 3) return '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료';
    if(strikeCount === 0) return `${ballCount}볼`;
    if(ballCount === 0) return `${strikeCount}스트라이크`;
    if(strikeCount === 0 && ballCount === 0) return `낫싱`;

    return `${ballCount}볼 ${strikeCount}스트라이크`;
  }
}
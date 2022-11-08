class BaseBallCounter {
  static calculateResult(userInput, answer) {
    const inputArray = userInput.split("").map(Number);
    const answerArray = answer;
    const ball = this.countBall(inputArray, answerArray);
    const strike = this.countStrike(inputArray, answerArray);

    if (ball === 0 && strike === 0) {
      return "낫싱";
    }
    if (ball === 0) {
      return `${strike}스트라이크`;
    }
    if (strike === 0) {
      return `${ball}볼`;
    }

    return `${ball}볼 ${strike}스트라이크 `;
  }

  static countBall(userInput, answer) {
    let ball = 0;
    userInput.forEach((userInput, index) => {
      if (answer.includes(userInput) && userInput !== answer[index]) {
        ball++;
      }
    });
    return ball;
  }

  static countStrike(userInput, answer) {
    let strike = 0;
    userInput.forEach((userInput, index) => {
      if (userInput === answer[index]) {
        strike++;
      }
    });
    return strike;
  }
}

module.exports = BaseBallCounter;

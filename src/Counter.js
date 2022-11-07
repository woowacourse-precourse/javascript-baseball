class Counter {
  ball(userInput, computerNums) {
    let ball = 0;
    const correctAnswerArr = computerNums.split('');
    correctAnswerArr.map((number, index) => {
      if (number !== userInput[index] && userInput.includes(number)) {
        ball += 1;
      }
    });
    return ball;
  }

  strike(userInput, computerNums) {
    let strike = 0;
    const correctAnswerArr = computerNums.split('');
    correctAnswerArr.map((number, index) => {
      if (number === userInput[index]) {
        strike += 1;
      }
    });
    return strike;

  }
}

module.exports = Counter;
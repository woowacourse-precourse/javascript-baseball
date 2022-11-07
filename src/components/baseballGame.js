const { Console, Random } = require("@woowacourse/mission-utils");
const { NUMBER, MESSAGE } = require('../constant/baseballGame');

class BaseballGame{
  
  startMessage() {
    Console.print(MESSAGE.START);
  }

  getBall(answer, inputNumber){
    let ball = 0;
    
    [...inputNumber].forEach((number, index) => {
      if(number !== answer[index] && answer.includes(number)){
        ball++;
      }
    });

    return ball;
  }

  getStrike(answer, inputNumber){
    let strike = 0;
    
    [...inputNumber].forEach((number, index) => {
      if(number === answer[index]) {
        strike++;
      }
    });

    return strike;
  }

  createAnswer() {
    const answer = [];

    while (answer.length < NUMBER.DIGIT) {
      const number = Random.pickNumberInRange(NUMBER.MINIMUM_RANGE, NUMBER.MAXIMUM_RANGE);

      if (!answer.includes(number)) {
        answer.push(number);
      }
    }

    return answer.join('');
  }

  inputNumber(answer) {
    Console.readLine(MESSAGE.INPUT, (inputNumber) => {
      this.validateInputNumber(inputNumber);
      this.resultMessage(answer, inputNumber);
    });
  }

}

module.exports = BaseballGame;

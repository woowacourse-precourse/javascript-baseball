const { Console, Random } = require("@woowacourse/mission-utils");
const { NUMBER, MESSAGE } = require('../constant/baseballGame');

class BaseballGame{
  
  startMessage() {
    Console.print(MESSAGE.START);
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

}

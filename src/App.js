const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.answer = this.getAnswer();
    this.userInput = this.readInput();
    this.count = this.getCount(this.answer, this.userInput);
    MissionUtils.Console.print(this.getHint(this.count));
  }

  getAnswer() {
    let answer = [];

    while (answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!answer.includes(number)) {
        answer.push(number);
      }
    }

    return answer;
  }

  readInput() {
    let userInput;

    MissionUtils.Console.readLine('숫자를 입력해 주세요 : ', (input) => {
      userInput = Array.from(input, Number);
    });

    return userInput;
  }

  getCount(answer, userInput) {
    let count = {
      ball: 0,
      strike: 0,
    };

    userInput.forEach((number, index) => {
      const findIndex = answer.findIndex((element) => element === number);

      if (findIndex === index) {
        count.strike += 1;
      } else if (findIndex !== -1) {
        count.ball += 1;
      }
    });

    return count;
  }

  getHint(count) {
    let hint = '';

    if (count.ball > 0) {
      hint = `${count.ball}볼`;
    }
    if (count.strike > 0) {
      hint += ` ${count.strike}스트라이크`;
    }
    if (hint === '') {
      hint = '낫싱';
    }

    return hint.trimStart();
  }

  play() {}
}

module.exports = App;

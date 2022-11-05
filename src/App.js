const MissionUtils = require('@woowacourse/mission-utils');

class App {
  #computerAnswer = '';

  #userInput = '';

  constructor() {
    this.message = '숫자 야구 게임을 시작합니다.';
  }

  #makeComputerAnswer() {
    const answer = [];
    while (answer.length < 3) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(num)) {
        answer.push(num);
      }
    }
    this.#computerAnswer = answer;
  }

  #calcScore() {
    let strikeCount = 0;
    let ballCount = 0;
    this.#computerAnswer.forEach((comAnswer, index) => {
      if (comAnswer === this.#userInput[index]) {
        strikeCount += 1;
      } else if (this.#computerAnswer.includes(this.#userInput[index])) {
        ballCount += 1;
      }
    });
    return [strikeCount, ballCount];
  }

  #init() {
    this.#makeComputerAnswer();
  }

  play() {
    MissionUtils.Console.print(this.message);
    this.#init();
  }
}

const app = new App();
app.play();

module.exports = App;

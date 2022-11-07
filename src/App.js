const MissionUtils = require('@woowacourse/mission-utils');
const validateInput = require('./validateInput');

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

  #gameEnd() {
    MissionUtils.Console.print(
      '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료'
    );
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (answer) => {
        if (Number(answer) === 1) {
          this.#init();
        } else if (Number(answer) === 2) {
          MissionUtils.Console.print('프로그램을 종료합니다.');
          MissionUtils.Console.close();
        } else {
          throw Error('잘못된 입력입니다. 프로그램을 종료합니다.');
        }
      }
    );
  }

  #getResult(strikeCount, ballCount) {
    if (strikeCount === 3) {
      this.#gameEnd();
    } else if (strikeCount === 0 && ballCount === 0) {
      MissionUtils.Console.print('낫싱');
      this.#tryToSolve();
    } else if (strikeCount === 0 && ballCount !== 0) {
      MissionUtils.Console.print(`${ballCount}볼`);
      this.#tryToSolve();
    } else if (strikeCount !== 0 && ballCount === 0) {
      MissionUtils.Console.print(`${strikeCount}스트라이크`);
      this.#tryToSolve();
    } else {
      MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
      this.#tryToSolve();
    }
  }

  #tryToSolve() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
      validateInput(userInput);
      this.#userInput = [...userInput].map((input) => Number(input));
      const [strikeCount, ballCount] = this.#calcScore();
      this.#getResult(strikeCount, ballCount);
    });
  }

  #init() {
    this.#makeComputerAnswer();
    this.#tryToSolve();
  }

  play() {
    MissionUtils.Console.print(this.message);
    this.#init();
  }
}

const app = new App();
app.play();

module.exports = App;

const MissionUtils = require("@woowacourse/mission-utils");

class App {

  #answer;
  strike;
  ball;
  result;

  constructor() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.computerRandomNumber();
  };

  computerRandomNumber() {
    this.#answer = [];
    while (this.#answer < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.#answer.includes(NUMBER)) {
        this.#answer.push(NUMBER);
      }
    }
  };

  checkUserInput(input) {
    if (!Number(input)) {
      throw new Error('숫자로 입력해주세요.');
    }

    if (input.length !== 3) {
      throw new Error('3자리 숫자로 입력해주세요.');
    }
  };

  checkStrikeAndBall(input) {
    const splittedInputValue = input.toString().split('').map(Number);
    this.strike = 0;
    this.ball = 0;

    this.#answer.forEach((num, idx) => {
      if (num === splittedInputValue[idx]) {
        this.strike += 1;
      } else if (splittedInputValue.includes(num)) {
        this.ball += 1;
      }
    });
  };

  gameClear(input) {
    if (Number(input) === 1) {
      this.computerRandomNumber();
      this.play();
    } else if (Number(input) === 2) {
      MissionUtils.Console.print("게임 종료");
      MissionUtils.Console.close();
    } else throw Error('예기치못한 오류가 발생되었습니다.');
  };

  checkResultScore() {
    if (this.strike === 3 && this.ball === 0) {
      this.result = `${this.strike}스트라이크`;
      MissionUtils.Console.print(this.result);
      MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (input) => {
        this.gameClear(input);
      });
    }
  };

  checkScore() {
    if (this.strike === 0 && this.ball === 0) {
      this.result = '낫싱';
    } else if (!this.ball === 0) {
      this.result = `${this.ball}볼`;
    } else if (!this.strike === 0) {
      this.result = `${this.strike}스트라이크`;
    }
  };

  resultPrint() {
    this.checkResultScore();
    this.checkScore();
    MissionUtils.Console.print(this.result);
    this.play();
  };

  play() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      this.checkUserInput(input);
      this.checkStrikeAndBall(input);
      this.resultPrint();
    });
  };
}

const app = new App();
app.play();

module.exports = App;

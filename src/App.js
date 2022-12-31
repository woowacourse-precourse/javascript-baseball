const MissionUtils = require('@woowacourse/mission-utils');

const { Console, Random } = MissionUtils;

class App {
  #playerNumber;

  #computerNumber;

  isStrike = (num, i) => this.#computerNumber[i] === num;

  isBall = (num, i) =>
    this.#computerNumber[i] !== num && this.#computerNumber.includes(num);

  isValid = (answer) => answer.length === 3 && Number.isInteger(+answer);

  constructor() {
    this.#playerNumber = '';
    this.#computerNumber = '';
    this.result = {};
  }

  comNumberInit() {
    this.#computerNumber = '';
    while (this.#computerNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.#computerNumber.includes(number))
        this.#computerNumber += `${number}`;
    }
    this.#computerNumber = [...this.#computerNumber];
  }

  playerInput() {
    Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      if (!this.isValid(answer)) {
        throw new Error('잘못된 입력입니다..');
      }

      this.playGame(answer);
    });
  }

  playGame(answer) {
    this.#playerNumber = [...answer];
    this.result = {};

    this.#playerNumber.forEach((num, i) => {
      if (this.isStrike(num, i)) {
        this.result.strike = this.result.strike + 1 || 1;
      }
      if (this.isBall(num, i)) {
        this.result.ball = this.result.ball + 1 || 1;
      }
    });

    this.printResultText();
    this.continueGame();
  }

  printResultText() {
    let resultText = '';
    if (this.result.ball > 0) {
      resultText += `${this.result.ball}볼 `;
    }

    if (this.result.strike > 0) {
      resultText += `${this.result.strike}스트라이크 `;
    }

    if (!this.result.ball && !this.result.strike) {
      resultText = '낫싱';
    }

    MissionUtils.Console.print(resultText);
    if (this.result.strike === 3) {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    } else {
      this.playerInput();
    } // 반복
  }

  continueGame() {
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (answer) => {
        if (answer === '1') {
          this.comNumberInit();
          this.playerInput(); // 재귀
        }
        if (answer === '2') {
          MissionUtils.Console.print('게임 종료');
        }
      }
    );
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.comNumberInit();
    this.playerInput();
    MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;

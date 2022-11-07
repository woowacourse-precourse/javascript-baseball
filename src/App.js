const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this._randomNumber = undefined;
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.setRandomNumber();
    this.startGame();
  }

  startGame() {
    this.inputUserNumber();
  }

  setRandomNumber() {
    const threeNumberArray = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      9,
      3,
    );
    const randomNumber = MissionUtils.Random.shuffle(threeNumberArray);
    this._randomNumber = randomNumber;
  }

  inputUserNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (numberInput) => {
      this.checkInputCorret(numberInput);
    });
  }

  checkInputCorret(numberInput) {
    try {
      if (!/[1-9]{3}/.test(numberInput)) {
        throw new Error('입력이 1 ~ 9로 이루어진 3자리 숫자가 아닙니다.');
      }
      const numberInputSet = new Set(numberInput.split(''));
      if (numberInputSet.size < 3) {
        throw new Error('입력이 서로 다른 3자리 숫자가 아닙니다.');
      }
      this.judgeInput(numberInput);
    } catch (e) {
      MissionUtils.Console.print(`잘못된 입력입니다. ${e.message}`);
      this.endGame();
    }
  }

  judgeInput(numberInput) {
    const strikeCount = this.calcStrike(numberInput);
    const ballCount = this.calcBall(numberInput);
    let output = '';
    if (ballCount === 0 && strikeCount === 0) output = '낫싱';
    if (ballCount > 0) output += `${ballCount}볼 `;
    if (strikeCount > 0) output += `${strikeCount}스트라이크`;

    MissionUtils.Console.print(output.trim());
    if (strikeCount === 3) {
      this.checkRestartOrExit();
    } else {
      this.startGame();
    }
  }

  calcStrike(numberInput) {
    let strikeCount = 0;
    this._randomNumber.forEach((randomNumberEach, idx) => {
      if (randomNumberEach === parseInt(numberInput[idx], 10)) {
        strikeCount += 1;
      }
    });
    return strikeCount;
  }

  calcBall(numberInput) {
    let ballCount = 0;
    for (let i = 0; i < 3; i += 1) {
      const findIndexofInput = this._randomNumber.indexOf(
        parseInt(numberInput[i], 10),
      );
      if (findIndexofInput !== -1 && findIndexofInput !== i) {
        ballCount += 1;
      }
    }
    return ballCount;
  }

  checkRestartOrExit() {
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (userInput) => {
        if (userInput === '1') this.play();
        else if (userInput === '2') this.endGame();
      },
    );
  }

  static endGame() {
    MissionUtils.Console.print('숫자 야구 게임을 종료합니다.');
    MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;

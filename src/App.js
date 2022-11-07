const MissionUtils = require('@woowacourse/mission-utils');
class App {
  constructor() {
    this.computerRandomNumbers = this.generateComputerRandomNumbers();
  }
  play() {
    this.printStartMessage();
    this.getUserInput();
  }
  printStartMessage() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }
  generateComputerRandomNumbers() {
    let ComputerRandomNumbers = new Set();

    while (ComputerRandomNumbers.size !== 3) {
      ComputerRandomNumbers.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    return [...ComputerRandomNumbers].join('');
  }
  isValidInputNumbers(number) {
    let noDuplication = new Set([...number]);

    if (number < 100 || number >= 1000) {
      return false;
    } else if ((number + '').includes('0')) {
      return false;
    } else if (noDuplication.size !== number.length) {
      return false;
    } else return true;
  }
  getUserInput() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
      if (this.isValidInputNumbers(userInput)) {
        this.ballStrikeCount(this.computerRandomNumbers, userInput);
      } else {
        throw new Error('조건에 맞는 수를 입력하세요!');
      }
    });
  }
  ballStrikeCount(computerInput, userInput) {
    let ballCount = 0;
    let strikeCount = 0;

    for (let i = 0; i < computerInput.length; i++) {
      if (computerInput[i] === userInput[i]) {
        strikeCount++;
      }
    }
    for (let number of computerInput) {
      if (userInput.includes(number)) {
        ballCount++;
      }
    }
    ballCount -= strikeCount;

    let gameResult = this.getGameResult(strikeCount, ballCount);

    MissionUtils.Console.print(gameResult);

    if (strikeCount !== 3) {
      this.getUserInput();
    } else {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.resumeOrQuitGame();
    }
  }
  getGameResult(strikeCount, ballCount) {
    if (strikeCount && ballCount) {
      return `${ballCount}볼 ${strikeCount}스트라이크`;
    } else if (strikeCount && !ballCount) {
      return `${strikeCount}스트라이크`;
    } else if (!strikeCount && ballCount) {
      return `${ballCount}볼`;
    } else {
      return '낫싱';
    }
  }
  resumeOrQuitGame() {
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
      (answer) => {
        if (answer === '1') {
          this.computerRandomNumbers = this.generateComputerRandomNumbers();
          this.getUserInput();
        } else if (answer === '2') {
          MissionUtils.Console.close();
        } else {
          throw new Error('1 혹은 2를 입력하세요!');
        }
      }
    );
  }
}

const app = new App();
app.play();

module.exports = App;

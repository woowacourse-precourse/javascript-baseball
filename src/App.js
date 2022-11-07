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
    const ComputerRandomNumbers = new Set();

    while (ComputerRandomNumbers.size !== 3) {
      ComputerRandomNumbers.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    return [...ComputerRandomNumbers].join('');
  }

  isValidInputNumbers(number) {
    const noDuplication = new Set([...number]);

    if (number < 100 || number >= 1000) {
      return false;
    }
    if (`${number}`.includes('0')) {
      return false;
    }
    if (noDuplication.size !== number.length) {
      return false;
    }
    return true;
  }

  getUserInput() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
      if (this.isValidInputNumbers(userInput)) {
        return this.ballStrikeCount(this.computerRandomNumbers, userInput);
      }
      throw new Error('조건에 맞는 수를 입력하세요!');
    });
  }

  ballStrikeCount(computerInput, userInput) {
    let ballCount = 0;
    let strikeCount = 0;

    for (let i = 0; i < computerInput.length; i += 1) {
      if (computerInput[i] === userInput[i]) {
        strikeCount += 1;
      }
    }
    for (const number of computerInput) {
      if (userInput.includes(number)) {
        ballCount += 1;
      }
    }
    ballCount -= strikeCount;

    const gameResult = this.getGameResult(strikeCount, ballCount);

    MissionUtils.Console.print(gameResult);

    if (strikeCount !== 3) {
      this.getUserInput();
    }

    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    this.resumeOrQuitGame();
  }

  getGameResult(strikeCount, ballCount) {
    if (strikeCount && ballCount) {
      return `${ballCount}볼 ${strikeCount}스트라이크`;
    }
    if (strikeCount && !ballCount) {
      return `${strikeCount}스트라이크`;
    }
    if (!strikeCount && ballCount) {
      return `${ballCount}볼`;
    }
    return '낫싱';
  }

  resumeOrQuitGame() {
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
      (answer) => {
        if (answer === '1') {
          this.computerRandomNumbers = this.generateComputerRandomNumbers();
          return this.getUserInput();
        }
        if (answer === '2') {
          return MissionUtils.Console.close();
        }
        throw new Error('1 혹은 2를 입력하세요!');
      }
    );
  }
}

const app = new App();
app.play();

module.exports = App;

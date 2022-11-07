const MissionUtils = require('@woowacourse/mission-utils');
const MESSAGE = require('./message.js');
const ERROR = require('./error.js');

class App {
  constructor() {
    this.count = '';
    this.input;
    this.countResult;
  }
  play() {
    this.printMessage(MESSAGE.START);
    this.count = this.generateCount(this.generateRandomList());
    this.getUserInput();
  }

  replay() {
    this.count = this.generateCount(this.generateRandomList());
    this.getUserInput();
  }

  printMessage(message) {
    MissionUtils.Console.print(message);
  }

  generateCount(numberList) {
    return numberList.reduce((acc, cur) => acc + cur, '');
  }

  generateRandomList() {
    const result = [];
    while (result.length < 3) {
      const n = MissionUtils.Random.pickNumberInRange(1, 9, 3);
      if (!result.includes(n)) {
        result.push(n);
      }
    }
    return result;
  }

  getUserInput() {
    MissionUtils.Console.readLine(
      '숫자를 입력해주세요 : ',
      this.handleGame.bind(this)
    );
  }

  handleGame(answer) {
    this.input = this.vaildInput(answer);
    this.countResult = this.decideCount(this.count, this.input);
    this.printMessage(this.makeCountMessage(this.countResult));
    if (this.countResult.strikeCount !== 3) {
      this.getUserInput();
    } else {
      this.printMessage(MESSAGE.WIN);
      this.printMessage(MESSAGE.RESTART);
      this.inputSignal();
    }
  }

  handleRestart(answer) {
    if (answer === '1') {
      this.replay();
    } else if (answer === '2') {
      MissionUtils.Console.close();
    } else {
      throw new Error(ERROR.INVAILD_INPUT);
    }
  }
  inputSignal() {
    MissionUtils.Console.readLine('', this.handleRestart.bind(this));
  }

  vaildInput(input) {
    if (!this.isVaildNumberFormat(input)) {
      throw new Error(ERROR.INVAILD_FORMAT);
    }
    if (this.isDuplicate(input)) {
      throw new Error(ERROR.DUPLICATE_NUMBER);
    }
    return input;
  }
  isVaildNumberFormat(target) {
    return /^[1-9]{3}$/.test(target);
  }

  isDuplicate(target) {
    const charList = target.split('');
    const firstLetter = charList.shift();
    return (
      charList.includes(firstLetter) ||
      charList.reduce((acc, cur) => acc === cur)
    );
  }

  decideCount(computerCount, userCount) {
    let strikeCount = this.decideStrikeCount(computerCount, userCount);
    let ballCount = this.decideBallCount(computerCount, userCount);

    return { strikeCount, ballCount };
  }

  decideStrikeCount(computerCount, userCount) {
    let count = 0;
    for (let i = 0; i < computerCount.length; i++) {
      if (computerCount[i] === userCount[i]) {
        count++;
      }
    }
    return count;
  }

  decideBallCount(computerCount, userCount) {
    let count = 0;
    for (let i = 0; i < computerCount.length; i++) {
      if (
        userCount.includes(computerCount[i]) &&
        computerCount[i] !== userCount[i]
      ) {
        count++;
      }
    }
    return count;
  }

  makeCountMessage(counts) {
    if (counts.strikeCount === 0 && counts.ballCount === 0) {
      return '낫싱';
    }
    if (counts.strikeCount === 0) {
      return `${counts.ballCount}볼`;
    }
    if (counts.ballCount === 0) {
      return `${counts.strikeCount}스트라이크`;
    }
    return `${counts.ballCount}볼 ${counts.strikeCount}스트라이크`;
  }
}

module.exports = App;

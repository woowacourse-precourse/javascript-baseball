// FIXME: 비표준 모듈 시스템을 사용하고 있음
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    this.initializeNumber();
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    let isGameOn = true;
    let tempCountForTest = 1;
    while (tempCountForTest < 3) {
      this.readLineNumberOfPlayer();
      isGameOn = false;
      tempCountForTest += 1;
    }
  }

  baseballNumber = [];
  initializeNumber() {
    this.baseballNumber = [];
    while (this.baseballNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      this.pushNumberIntoBaseballNumber(number);
    }
  }

  pushNumberIntoBaseballNumber(number) {
    if (!this.baseballNumber.includes(number)) {
      this.baseballNumber.push(number);
    }
  }

  readLineNumberOfPlayer() {
    let numberOfBalls = 0;
    let numberOfStrikes = 0;

    MissionUtils.Console.readLine('숫자를 입력해주세요 :', (guessedBaseballNumber) => {
      [numberOfBalls, numberOfStrikes] = this.checkingBallsAndStrikes(guessedBaseballNumber);
    })
    MissionUtils.Console.print(`${numberOfBalls}, ${numberOfStrikes}`);
  }

  checkingBallsAndStrikes(guessedBaseballNumber) {
    const iteratorOfGuessedNumber = guessedBaseballNumber[Symbol.iterator]();
    const iteratorOfBaseballNumber = this.baseballNumber[Symbol.iterator]();
    
    let charGuessedNumber = iteratorOfGuessedNumber.next();
    let digitBaseballNumber = iteratorOfBaseballNumber.next();

    let numberOfBalls = 0;
    let numberOfStrikes = 0;

    while (!charGuessedNumber.done && !digitBaseballNumber.done) {
      const digitGuessedNumber = parseInt(charGuessedNumber.value, 10);
      numberOfStrikes += this.return1IfSame(digitGuessedNumber, digitBaseballNumber.value);
      numberOfBalls += this.return1IfIncludes(this.baseballNumber, digitGuessedNumber);
      
      charGuessedNumber = iteratorOfGuessedNumber.next();
      digitBaseballNumber = iteratorOfBaseballNumber.next();
    }
    numberOfBalls -= numberOfStrikes;
    return [numberOfBalls, numberOfStrikes];
  }
  
  return1IfSame(comparitiveValueLeft, comparitiveValueRight) {
    if (comparitiveValueLeft === comparitiveValueRight) {
      return 1
    }
    return 0
  }

  return1IfIncludes(targetArray, targetValue) {
    if (targetArray.includes(targetValue)) {
      return 1
    }
    return 0
  }
}

module.exports = App;

// FIXME: 비표준 모듈 시스템을 사용하고 있음
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.baseballNumber;
    this.initializeNumber();
    this.isGameOn = true;
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    let countForTest = 0;
    while (this.isGameOn) {
      this.guessBaseBallNumber();

      countForTest += 1;
      if (countForTest > 10) {
        break;
      }
    }
  }

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

  guessBaseBallNumber() {
    let numberOfBalls;
    let numberOfStrikes;
    [numberOfBalls, numberOfStrikes] = this.readLineNumberOfPlayer();

    this.printResultOfGuess(numberOfBalls, numberOfStrikes);
    const isfinished = this.isCorrect(numberOfStrikes);
    if (isfinished) {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.isGameOn = false;
    }
  }

  readLineNumberOfPlayer() {
    let numberOfBalls;
    let numberOfStrikes;

    MissionUtils.Console.readLine('숫자를 입력해주세요 :', (guessedBaseballNumber) => {
      this.isValidGuess(guessedBaseballNumber);
      [numberOfBalls, numberOfStrikes] = this.checkingBallsAndStrikes(guessedBaseballNumber);
    })
    return [numberOfBalls, numberOfStrikes];
  }

  isValidGuess(guess) {
    if (guess.match(/[^1-9]/g)) {
      throw '숫자가 아닌 값을 입력하였습니다.';
    }
    if (guess.length > 3) {
      throw '3자리를 초과하는 숫자를 입력하였습니다.';
    }
    if (guess.length < 3) {
      throw '3자리 미만의 숫자를 입력하였습니다.';
    }
    if (guess.match(/([1-9])\1+/g)) {
      throw '중복되는 숫자를 입력하였습니다.';
    }
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

  printResultOfGuess(numberOfBalls, numberOfStrikes) {
    let stringBalls = '';
    let stringStrikes = '';
    if (numberOfBalls) {
      stringBalls = `${numberOfBalls}볼 `;
    }
    if (numberOfStrikes) {
      stringStrikes = `${numberOfStrikes}스트라이크`;
    }
    if (numberOfBalls || numberOfStrikes) {
      MissionUtils.Console.print(`${stringBalls}${stringStrikes}`);
      return;
    }
    MissionUtils.Console.print(`낫싱`);
    return;
  }

  isCorrect(numberOfStrikes) {
    const numberOfStrikesToBeFinished = 3;
    if (numberOfStrikes === numberOfStrikesToBeFinished) {
      return true;
    }
    return false;
  }
}

module.exports = App;

const { Console, Random } = require('@woowacourse/mission-utils');

class App {
  computerNumber;

  constructor() {
    this.setComputerNumber();
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  play() {
    Console.readLine('숫자를 입력해주세요 : ', (userGuess) => {
      if (!this.isValidGuess(userGuess)) {
        throw new Error('--- *서로다른 세자리 자연수를 입력해주세요 ---');
      }
      this.progress(userGuess);
    });
  }

  progress(userGuess) {
    const { strike, ball } = this.calcHit(this.computerNumber, userGuess);
    Console.print(this.createResultMessage(strike, ball));

    if (strike === 3) {
      this.gameOver();
    } else {
      this.play();
    }
  }

  gameOver() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (keyPress) => {
      switch (keyPress) {
        case '1':
          this.replay();
          return;
        case '2':
          this.quit();
          return;
        default:
          throw new Error('--- *1 또는 2를 입력해주세요  ---');
      }
    });
  }

  replay() {
    this.setComputerNumber();
    this.play();
  }

  quit() {
    Console.close();
  }

  setComputerNumber() {
    this.computerNumber = this.createComputerNumber();
  }

  createComputerNumber() {
    const computerNumber = new Set();

    while (computerNumber.size < 3) {
      computerNumber.add(Random.pickNumberInRange(1, 9));
    }

    return [...computerNumber];
  }

  isValidGuess(guessNumber) {
    if (guessNumber.length !== 3) {
      return false;
    }
    if (new Set(guessNumber).size !== 3) {
      return false;
    }
    if (!/^[1-9]{3}$/.test(guessNumber)) {
      return false;
    }
    return true;
  }

  calcHit(computerNumber, userGuess) {
    return userGuess.split('').map(Number).reduce((acc, curr, idx) => {
      if (curr === computerNumber[idx]) {
        acc.strike += 1;
        return acc;
      }
      if (computerNumber.indexOf(curr) > -1) {
        acc.ball += 1;
        return acc;
      }
      return acc;
    }, { strike: 0, ball: 0 });
  }

  createResultMessage(strike, ball) {
    if (ball === 0 && strike === 0) {
      return '낫싱';
    }
    if (ball === 0 && strike > 0) {
      return `${strike}스트라이크`;
    }
    if (ball > 0 && strike === 0) {
      return `${ball}볼`;
    }
    if (ball > 0 && strike > 0) {
      return `${ball}볼 ${strike}스트라이크`;
    }
    throw new Error('비정상적인 결과 입니다.');
  }
}

module.exports = App;

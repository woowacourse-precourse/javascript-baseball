const { Console, Random } = require('@woowacourse/mission-utils');

class App {
  constructor() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  play() {
    Console.readLine('숫자를 입력해주세요 : ', (userGuess) => {
      if (!this.isValidGuess(userGuess)) {
        throw new Error('--- *서로다른 세자리 자연수를 입력해주세요 ---');
      }
    });
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
}

module.exports = App;

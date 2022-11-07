const { Console, Random } = require('@woowacourse/mission-utils');

class Game {
  constructor() {
    this.answer;
  }

  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.answer = this.generateThreeDigitNumber();
    this.pitchNumber();
  }

  generateThreeDigitNumber() {
    const threeDigitNumber = [];
    while (threeDigitNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!threeDigitNumber.includes(number)) {
        threeDigitNumber.push(number);
      }
    }

    return threeDigitNumber;
  }

  pitchNumber() {
    Console.readLine('숫자를 입력해주세요 : ', (inputStr) => {
      const guess = this.isValidInput(inputStr);
      const { ball, strike } = this.judgeBallStrike(guess, this.answer);
      this.printHint(ball, strike);
      if (strike !== 3) this.pitchNumber();
    });
  }

  isValidInput(inputStr) {
    const inputArr = [...inputStr].map(Number);
    const inputSet = new Set(inputArr);
    if (!/^[1-9]{3}$/.test(inputStr) || inputSet.size !== 3) {
      throw new Error(
        '각 자리가 1부터 9까지 서로 다른 수로 이루어진 3자리 수를 입력하세요.'
      );
    }

    return inputArr;
  }

  judgeBallStrike(guess, answer) {
    let ball = 0;
    let strike = 0;

    const isBall = (guessNumber) => {
      return answer.includes(guessNumber);
    };

    const isStrike = (guessNumber) => {
      return guess.indexOf(guessNumber) === answer.indexOf(guessNumber);
    };

    guess.map((guessNumber) => {
      if (isBall(guessNumber)) {
        if (isStrike(guessNumber)) strike += 1;
        else ball += 1;
      }
    });

    return { ball, strike };
  }

  printHint(ball, strike) {
    if (ball === 0 && strike === 0) Console.print('낫싱');
    if (ball > 0 && strike === 0) Console.print(`${ball}볼`);
    if (ball === 0 && strike > 0) Console.print(`${strike}스트라이크`);
    if (ball > 0 && strike > 0) Console.print(`${ball}볼 ${strike}스트라이크`);
  }
}

module.exports = Game;

const { Console, Random } = require('@woowacourse/mission-utils');
const { GAME_SETTING, RESULT } = require('./utils/constants');
const { MIN_NUMBER, MAX_NUMBER, NUMBER_COUNT } = GAME_SETTING;
const { NOTHING, BALL, STRIKE } = RESULT;

class App {
  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.playGame();
  }

  playGame() {
    const computer = this.createUniqueNumbers(MIN_NUMBER, MAX_NUMBER, NUMBER_COUNT);
    this.guess(computer);
  }

  createUniqueNumbers(start, end, count) {
    const numberSet = new Set();

    while (numberSet.size !== count) {
      const number = Random.pickNumberInRange(start, end);
      if (!numberSet.has(number)) numberSet.add(number);
    }

    return [...numberSet];
  }

  guess(computer) {
    Console.readLine('숫자를 입력해주세요 : ', (input) => {
      if (!this.validateUserGuess(input)) {
        throw new Error(
          `${MIN_NUMBER}부터 ${MAX_NUMBER}까지 서로 다른 ${NUMBER_COUNT}자리 숫자를 입력해주세요.`
        );
      }

      const player = Array.from(input, Number);
      const result = this.getResult(computer, player);
      Console.print(result);

      if (result !== `${NUMBER_COUNT}${STRIKE}`) {
        this.guess(computer);
      } else {
        Console.print(`${NUMBER_COUNT}개의 숫자를 모두 맞히셨습니다! 게임 종료`);
        this.askPlayAgain();
      }
    });
  }

  validateUserGuess(input) {
    if (input.length !== NUMBER_COUNT) return false;

    const inputNumbers = Array.from(input, Number);
    if (inputNumbers.some((number) => !Number.isInteger(number))) return false;
    if (inputNumbers.some((number) => number < MIN_NUMBER || number > MAX_NUMBER)) return false;

    const inputNumberSet = new Set(inputNumbers);
    if (inputNumberSet.size !== NUMBER_COUNT) return false;

    return true;
  }

  countExist(computer, player) {
    const computerSet = new Set(computer);
    const exists = player.filter((guess) => computerSet.has(guess));
    return exists.length;
  }

  countStrike(computer, player) {
    const strikes = player.filter((guess, i) => guess === computer[i]);
    return strikes.length;
  }

  getResult(computer, player) {
    const exist = this.countExist(computer, player);
    const strike = this.countStrike(computer, player);
    const ball = exist - strike;

    if (exist === 0) {
      return `${NOTHING}`;
    } else if (strike === 0) {
      return `${ball}${BALL}`;
    } else if (ball === 0) {
      return `${strike}${STRIKE}`;
    }

    return `${ball}${BALL} ${strike}${STRIKE}`;
  }

  askPlayAgain() {
    Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    Console.readLine('', (input) => {
      switch (input) {
        case '1':
          return this.playGame();
        case '2':
          return Console.close();
        default:
          throw new Error('게임을 종료합니다.');
      }
    });
  }
}

module.exports = App;

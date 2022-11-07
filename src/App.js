// modules
const { Console } = require('@woowacourse/mission-utils');
const InputError = require('./InputError');
const ValidationError = require('./ValidationError');
const Computer = require('./Computer');
const Judge = require('./Judge');

// constants
const { GAME_SETTING, RESULT } = require('./utils/constants');
const { MIN_NUMBER, MAX_NUMBER, NUMBER_COUNT } = GAME_SETTING;
const { STRIKE } = RESULT;

class App {
  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.playGame();
  }

  playGame() {
    const computer = Computer.createUniqueNumbers(MIN_NUMBER, MAX_NUMBER, NUMBER_COUNT);
    this.guess(computer);
  }

  guess(computer) {
    Console.readLine('숫자를 입력해주세요 : ', (input) => {
      try {
        this.validateUserGuess(input);
      } catch (err) {
        if (err instanceof ValidationError) {
          const message = `${MIN_NUMBER}부터 ${MAX_NUMBER}까지 서로 다른 ${NUMBER_COUNT}자리 숫자를 입력해주세요.`;
          throw new InputError(message, err);
        } else {
          throw err;
        }
      }

      const player = Array.from(input, Number);
      const result = Judge.getResult(computer, player);
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
    const inputNumbers = Array.from(input, Number);
    const inputNumberSet = new Set(inputNumbers);

    if (input.length !== NUMBER_COUNT) {
      throw new ValidationError('3자리만 입력하세요.');
    }
    if (inputNumbers.some((number) => !Number.isInteger(number))) {
      throw new ValidationError('숫자만 입력하세요.');
    }
    if (inputNumbers.some((number) => number < MIN_NUMBER || number > MAX_NUMBER)) {
      throw new ValidationError(`${MIN_NUMBER}부터 ${MAX_NUMBER}까지의 숫자만 입력하세요.`);
    }
    if (inputNumberSet.size !== NUMBER_COUNT) {
      throw new ValidationError('서로 다른 숫자만 입력하세요.');
    }
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
          throw new InputError('게임을 종료합니다.');
      }
    });
  }
}

module.exports = App;

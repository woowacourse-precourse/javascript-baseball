const { Random, Console } = require("@woowacourse/mission-utils");
const { NUMBERS, MESSAGES, RESULT } = require('../src/Constructor')
class App {

  generateRandomNums(min, max, length) {
    const randoms = Random.pickUniqueNumbersInRange(min, max, length);
    return Random.shuffle(randoms);
  }

  isValidNumberInput(userInput) {
    if (userInput.length !== NUMBERS.REQUIRED_LENGHT) {
      return false;
    }

    if (!parseInt(userInput)) {
      return false;
    }

    const set = new Set([...userInput])
    if (set.size !== userInput.length) {
      return false;
    }
    
    return true;
  }

  isValidEndInput(userInput) {
    const isInteger = parseInt(userInput);
    if (!isInteger) {
      return false;
    }
    return userInput == NUMBERS.RESTART_GAME || userInput == NUMBERS.END_GAME;
  }

  countBallAndStrike(computer, inputNumbers) {
    let ball = 0;
    let strike = 0;
    inputNumbers.forEach((number, index) => {
      if (number === computer[index]) strike += 1;
      else if (computer.includes(number)) ball += 1;
    });
    return { ball, strike };
  }

  printResult(ball, strike) {
    if (ball === 0 && strike === 0) {
      return Console.print(RESULT.NOTHING);
    }
    if (ball > 0 && strike > 0) {
      return Console.print(`${ball}${RESULT.BALL} ${strike}${RESULT.STRIKE}`);
    }
    if (ball > 0) {
      return Console.print(`${ball}${RESULT.BALL}`);
    }
    if (strike > 0) {
      return Console.print(`${strike}${RESULT.STRIKE}`);
    }
  }
    
  play() {
    try {
      const computer = this.generateRandomNums(NUMBERS.RANDOM_MIN, NUMBERS.RANDOM_MAX, NUMBERS.REQUIRED_LENGHT);
      Console.print(MESSAGES.START);
    } catch {
      this.error();
    }
  }
}

module.exports = App;

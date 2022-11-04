const { Random, Console } = require("@woowacourse/mission-utils");
const { NUMBERS, MESSAGES, RESULT } = require('../src/Constructor')
class App {

  generateRandomNums(min, max, length) {
    const computer = [];
    while (computer.length < length) {
      const number = Random.pickNumberInRange(min, max);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
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

  success() {
    Console.print(`${MESSAGES.SUCCESS} ${MESSAGES.END}`);
    Console.readLine(MESSAGES.RESTART, (answer) => {
    if (!this.isValidEndInput(answer)) {
      return this.throwError();
    }
    
    if (parseInt(answer) === NUMBERS.RESTART_GAME) {
      return this.play();
    }
    if (parseInt(answer) === NUMBERS.END_GAME) {
      Console.print(MESSAGES.END);
      return Console.close();
    }
    
    return this.throwError();
    })
  }

  game(computer) {
    Console.readLine(MESSAGES.INPUT_NUMBER, (input) => {
      if (!this.isValidNumberInput(input)) {
        return this.throwError();
      }
      
      const inputNumbers = [...input].map(number => parseInt(number));
      const { ball, strike } = this.countBallAndStrike(computer, inputNumbers);
      this.printResult(ball, strike);
      
      if (strike !== 3) {
        return this.game(computer);
      } 
      return this.success();
    }
  )}
    
  play() {
    const computer = this.generateRandomNums(NUMBERS.RANDOM_MIN, NUMBERS.RANDOM_MAX, NUMBERS.REQUIRED_LENGHT);
    Console.print(MESSAGES.START);
    this.game(computer);
  }

  throwError() {
    Console.close();
    throw new Error();
  }
}

module.exports = App;

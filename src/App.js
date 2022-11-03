const { Random, Console } = require("@woowacourse/mission-utils");
const { NUMBERS, MESSAGES, RESULT } = require('../src/Constructor')
class App {
  result = {
    ball: 0,
    strike: 0
  }

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
    return number === NUMBERS.RESTART_GAME || number === NUMBERS.END_GAME;
  }
  
  play() {
    const computer =  this.generateRandomNums(NUMBERS.RANDOM_MIN, NUMBERS.RANDOM_MAX, NUMBERS.REQUIRED_LENGHT);
    Console.print(MESSAGES.START);
    Console.readLine(MESSAGES.INPUT_NUMBER, (input) => {
    })
  }
}

module.exports = App;

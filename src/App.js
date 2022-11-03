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
    const regex = new RegExp(`[${NUMBERS.RANDOM_MIN}-${NUMBERS.RANDOM_MAX}]*${NUMBERS.REQUIRED_LENGHT}`);

    if (!regex.test(userInput)) {
      return false
    }

    const set = new Set([...userInput])
    if (set.size !== userInput.length) {
      return false;
    }
    
    return true;
  }
  
  play() {
    const computer =  this.generateRandomNums(NUMBERS.RANDOM_MIN, NUMBERS.RANDOM_MAX, NUMBERS.REQUIRED_LENGHT);
    Console.print(MESSAGES.START);
    Console.readLine(MESSAGES.INPUT_NUMBER, (input) => {
    })
  }
}

module.exports = App;

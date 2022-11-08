const { Random, Console } = require('@woowacourse/mission-utils');
const MESSAGES = require('./Constants');

const generateRandomNumber = () => {
  return Random.pickUniqueNumbersInRange(1, 9, 3);
}

const inputNumber = () => {
  return new Promise(resolve => 
    Console.readLine(MESSAGES.INPUT, (number) => {
      resolve(number);
  }))
}

const gameTool = {
  generateRandomNumber,
  inputNumber,
}

module.exports = gameTool;
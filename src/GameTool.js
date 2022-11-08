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

const isValidateNumber = (input) => {
  let result = true;
  const regexp = /^[1-9]*$/;
  [...input].forEach(item => {
    result = regexp.test(item) && result;
  })
  return result && (input.length === 3) && ([...new Set(input.split(""))].length === 3);
}

const gameTool = {
  generateRandomNumber,
  inputNumber,
  isValidateNumber,
}

module.exports = gameTool;
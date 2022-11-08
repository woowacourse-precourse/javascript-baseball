const { Random, Console } = require('@woowacourse/mission-utils');
const MESSAGES = require('./Constants');

const generateRandomNumber = () => {
  return Random.pickUniqueNumbersInRange(1, 9, 3).join('');
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

const checkBaseballCount = (answer, input) => {
  let strike = 0;
  let ball = 0;
  for(let i = 0; i < 3; i++){
    if(answer[i] === input[i]) strike += 1;
    else if(answer.includes(input[i])) ball += 1;
  }
  return {strike: strike, ball: ball};
}

const printBaseballCount = (strike, ball) => {
  if(ball > 0 && strike > 0){
    Console.print(`${ball}볼 ${strike}스트라이크`);
  } else if(ball > 0){
    Console.print(`${ball}볼`);
  } else if(strike > 0){
    Console.print(`${strike}스트라이크`);
  } else {
    Console.print('낫싱')
  }
  return;
}

const gameTool = {
  generateRandomNumber,
  inputNumber,
  isValidateNumber,
  checkBaseballCount,
  printBaseballCount,
}

module.exports = gameTool;
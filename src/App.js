const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  };

  play() {
    let randomNumber = [];
    randomNumber = createRandom();
  }
}

function createRandom() {
  let randomNumber = [];
  let tempForRandom;
  let userInput;

  while (randomNumber.length < 3) {
    tempForRandom = MissionUtils.Random.pickNumberInRange(1,9);
    randomNumber.push(tempForRandom);
  } 

  return randomNumber;
}

function checkUserInput(userInput) {
  let userInput;

  userInput = input('숫자를 입력해주세요 : ');
  if (userInput.length !== 3) {
    throw new Error();
  }
  let userInputStr = userInput.split("");
  userInput = userInputStr.map((val) => Number(val));

  return userInput;
}

function input(text) {
  let result = 0;
  MissionUtils.Console.readLine('입력', (answer) => {
    MissionUtils.Console.print(`${text}${answer}`);
    result = answer;
  });

  return result;
}

module.exports = App;
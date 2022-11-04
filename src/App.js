const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  };

  play() {
    let randomNumber = [];
    let userInput;

    randomNumber = createRandom();
    

    while (true) {
      let strike = 0;
      let ball = 0;


      userInput = checkUserInput();
      let strikeAndBall = baseballGame(randomNumber, userInput);
      strike = strikeAndBall[0];
      ball = strikeAndBall[1];

      let result = check3Strike(strike, ball);
      if (result[0] === 'break')
        break;
      else if (result[0] === 'restart')
        randomNumber = result[1];
    }
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

function checkUserInput() {
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

function baseballGame(randomNumber, userInput) {
  let strike = 0;
  let ball = 0;

  for (let val of userInput) {
    if (randomNumber.indexOf(val) === -1)
      continue;
    else if (randomNumber.indexOf(val) === userInput.indexOf(val) && randomNumber.indexOf(val) !== -1)
      strike += 1;
    else if (randomNumber.indexOf(val) !== userInput.indexOf(val) && randomNumber.indexOf(val) !== -1)
      ball += 1;
  }
  return [strike, ball];
}

function check3Strike(strike, ball) {
  if (strike === 3) {
    MissionUtils.Console.print(`${strike}스트라이크`);
    MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
    userInput = input('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
    userInput = Number(userInput);
    if (userInput === 1) {
      let randomNumber = [];
      randomNumber = createRandom();
      console.log(`========= ${randomNumber}`)
      return ['restart', randomNumber];
    }
    else if (userInput === 2) {
      MissionUtils.Console.print('게임 종료');
      return ['break'];
    }
  }
  else if (strike > 0 && ball > 0) {
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    return ['not a 3 strike'];
  }
  else if (strike > 0 && ball <= 0) {
    MissionUtils.Console.print(`${strike}스트라이크`);
    return ['not a 3 strike'];
  }
  else if (strike <= 0 && ball > 0) {
    MissionUtils.Console.print(`${ball}볼`);
    return ['not a 3 strike'];
  }
  else {
    MissionUtils.Console.print(`낫싱`);
    return ['not a 3 strike'];
  }
}

module.exports = App;
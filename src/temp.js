const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  };

  play() {
    let randomNumber = [];
    let tempForRandom;
    let userInput;
    
    while (randomNumber.length < 3) {
      tempForRandom = MissionUtils.Random.pickNumberInRange(1,9);
      randomNumber.push(tempForRandom);
    }
    
    while (true) {
      let strike = 0;
      let ball = 0;

      userInput = input('숫자를 입력해주세요 : ');
      if (userInput.length !== 3) {
        throw new Error();
      }
      let userInputStr = userInput.split("");
      userInput = userInputStr.map((val) => Number(val));

      for (let val of userInput) {
        if (randomNumber.indexOf(val) === -1)
          continue;
        else if (randomNumber.indexOf(val) === userInput.indexOf(val) && randomNumber.indexOf(val) !== -1)
          strike += 1;
        else if (randomNumber.indexOf(val) !== userInput.indexOf(val) && randomNumber.indexOf(val) !== -1)
          ball += 1;
      }

      if (strike === 3) {
        MissionUtils.Console.print(`${strike}스트라이크`);
        MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
        userInput = input('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
        userInput = Number(userInput);
        if (userInput === 1) {
          randomNumber = [];
          tempForRandom = [];
          while (randomNumber.length < 3) {
            tempForRandom = MissionUtils.Random.pickNumberInRange(1,9);
            randomNumber.push(tempForRandom);
          }
          continue;
        }
        else if (userInput === 2) {
          MissionUtils.Console.print('게임 종료');
          break;
        }
      }
      else if (strike > 0 && ball > 0) {
        MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`)
      }
      else if (strike > 0 && ball <= 0) {
        MissionUtils.Console.print(`${strike}스트라이크`)
      }
      else if (strike <= 0 && ball > 0) {
        MissionUtils.Console.print(`${ball}볼`)
      }
      else {
        MissionUtils.Console.print(`낫싱`)
      }
    }
  }

}


function input(text) {
  let result = 0;
  MissionUtils.Console.readLine('입력', (answer) => {
    MissionUtils.Console.print(`${text}${answer}`);
    result = answer;
  });

  return result;
}

function baseball(answer) {
  let strike = 0;
  let ball = 0;

  const userInput = answer.split("");
  for (let val of userInput) {
    if (randomNumber.indexOf(val) != -1)
      continue;
    else if (randomNumber.indexOf(val) === userInput.indexOf(val))
      strike += 1;
    else if (randomNumber.indexOf(val) !== userInput.indexOf(val))
      ball += 1;
  }

  return [strike, ball];
};



module.exports = App;


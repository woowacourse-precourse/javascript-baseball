const MissionUtils = require("@woowacourse/mission-utils");
const { input, checklength } = require("./Common");

function createRandom() {
    let randomNumber = [];
    let tempForRandom;
  
    while (randomNumber.length < 3) {
      tempForRandom = MissionUtils.Random.pickNumberInRange(1,9);
      randomNumber.push(tempForRandom);
    } 
    return randomNumber;
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
      let result = success();
      console.log(result)
      return result;
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

function success() {
    let userInput;
    let verification;
    let str = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n';
    
    userInput = input(str);
    verification = checklength(str, userInput);

    if (verification === true) {
        userInput = Number(userInput);
        if (userInput === 1) {
            let randomNumber = [];
            randomNumber = createRandom();
            return ['restart', randomNumber];
        }
        else if (userInput === 2) {
            MissionUtils.Console.print('게임 종료');
            return ['break'];
        }
    }
}

exports.createRandom = createRandom;
exports.baseballGame = baseballGame;
exports.check3Strike = check3Strike;
exports.success = success;
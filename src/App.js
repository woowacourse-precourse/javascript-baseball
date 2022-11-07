const MissionUtils = require("@woowacourse/mission-utils");
const { createRandom, baseballGame, check3Strike } = require("./function/Computer");
const { checkUserInput } = require("./function/User");

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

      let inputresult = checkUserInput();
      if (inputresult[0] === false)
        throw new Error();
      else if (inputresult[0] === true)
        userInput = inputresult[1];
    
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

module.exports = App;
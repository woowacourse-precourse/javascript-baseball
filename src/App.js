const MissionUtils = require("@woowacourse/mission-utils");
const playGame = require('./game/playGame');
const makeComputerRandNums = require('./input/computerInput')

class App {
  constructor() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.')
  }

  play() {
    const computerRandNumsArray = makeComputerRandNums();
    playGame(computerRandNumsArray)
  }
}

module.exports = App;

const app = new App();
app.play();
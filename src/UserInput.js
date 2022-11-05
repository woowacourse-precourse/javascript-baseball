const MissionUtils = require("@woowacourse/mission-utils");
const CheckInput = require("./CheckInput");
const PrintScore = require("./PrintScore");
const ScoreCount = require("./ScoreCount");
const App = require("./App");

const UserInput = (RandomNumber) => {
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
    CheckInput(input);
    GameSystem(input, RandomNumber);
  });
}

const GameSystem = (input, ComputerNumber) => {
  let [strike, ball, none] = ScoreCount(input, ComputerNumber);
  PrintScore(strike, ball, none);
  
  if (strike === 3) {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    App.RegameorEnd();
  }
  else{
    UserInput(ComputerNumber);
  }
}

module.exports = UserInput;
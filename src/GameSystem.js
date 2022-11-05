const PrintScore = require("./PrintScore");
const ScoreCount = require("./ScoreCount");

const GameSystem = (input, ComputerNumber) => {
  let [strike, ball, none] = ScoreCount(input, ComputerNumber);
  PrintScore(strike, ball, none);
  
  if (strike === 3) {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료')
  }
  else{
    UserInput(ComputerNumber);
  }
}

module.exports = GameSystem;
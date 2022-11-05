const MissionUtils = require("@woowacourse/mission-utils");

function startGame(){
  // 1. 게임 시작
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
}

function makeProblem(NUMBER_LENGTH){
  // 2. 문제 생성
  let problemNumbers = [];
  let problem = 0;
  let tempNumber;
  while (problemNumbers.length < NUMBER_LENGTH){
    tempNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if(!problemNumbers.includes(tempNumber)){
      problemNumbers.push(tempNumber);
      problem += 10**(problemNumbers.length-1)*tempNumber;
    }
  }
  return problem;
}

class App {
  play() {
    //1. 게임 시작
    startGame();

    // 2. 문제 생성
    const NUMBER_LENGTH = 3;
    const problem = makeProblem(NUMBER_LENGTH);
    
  }
}

module.exports = App;

const app = new App();
app.play();
const MissionUtils = require("@woowacourse/mission-utils");

function startGame(){
  // 1. 게임 시작
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
}

function makeProblem(NUMBER_LENGTH){
  // 2. 문제 생성
  const problemNumberList = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, NUMBER_LENGTH);
  let problem = 0;
  problemNumberList.forEach((problemNumber, index)=>{
    problem += 10**index*problemNumber;
  })
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
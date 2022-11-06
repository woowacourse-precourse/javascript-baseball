const MissionUtils = require("@woowacourse/mission-utils");

function startGame(){
  // 1. 게임 시작
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
}

function makeProblem(NUMBER_LENGTH){
  // 2. 문제 생성
  const problemNumberList = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, NUMBER_LENGTH);
  return problemNumberList;
}

function IsStrike(answer, problem){
  // 4. 결과 계산 - 스트라이크 검사
  let strike_count = 0;
  const strikeResultList = problem.map((problemNumber, idx)=>{
    if(String(problemNumber)===answer[idx]){
      strike_count += 1;
      return 0;
    }
    return problemNumber;
  })
  MissionUtils.Console.print(`${strike_count}스트라이크`)
  return strikeResultList;
}

function IsBall(answer, problem){
  // 4. 결과 계산 - 볼 검사
  let ball_count = 0;
  const ballResultList = problem.map((problemNumber)=>{
    if([...answer].includes(String(problemNumber))){
      ball_count+= 1;
      return 0;
    }
    return problemNumber;
  })
  MissionUtils.Console.print(`${ball_count}볼`)
  return ballResultList;
}

function getResults(problem){
  // 3. 숫자 입력 받기
  MissionUtils.Console.readLine("숫자를 입력해 주세요. :", (input)=>{
    const answer = input;
    // 4. 결과 계산
    const strikeResult = IsStrike(answer, problem);
    const ballResult = IsBall(answer, strikeResult);
    MissionUtils.Console.print(ballResult);
  })
}



class App {
  play() {
    //1. 게임 시작
    startGame();

    // 2. 문제 생성
    const NUMBER_LENGTH = 3;
    let problem = makeProblem(NUMBER_LENGTH);
    
    getResults([1,2,3]);
  }
}

module.exports = App;

const app = new App();
app.play();
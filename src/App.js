const MissionUtils = require("@woowacourse/mission-utils");

function startMessage(){//시작 문구 출력
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
}

function playGame(){ //문제 생성 - 게임 종료 옵션
  const NUMBER_LENGTH = 3;
  const problem = makeProblem(NUMBER_LENGTH);
  playOneRound(problem);
}

function makeProblem(NUMBER_LENGTH){//문제 생성 함수
  const problemNumberList = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, NUMBER_LENGTH);
  return problemNumberList;
}

function playOneRound(problem){//한 라운드 함수
  MissionUtils.Console.readLine("숫자를 입력해 주세요. : ", (input)=>{
    const answer = input;
    const result = makeResult(answer, problem);
    const [ball_count, strike_count] = result;
    showResult(ball_count, strike_count);
    if(strike_count!==3){
      return playOneRound(problem);
    }
    quitOptions();
  })
}

function makeResult(answer, problem){//결과 계산 함수
  let ball_count = 0;
  let strike_count = 0;
  problem.forEach((problemNumber, idx)=>{
    if([...answer].includes(String(problemNumber))){
      ball_count += 1;
    }
    if(String(problemNumber)===answer[idx]){
      strike_count += 1;
    }
  })
  ball_count -= strike_count;
  const result = [ball_count, strike_count];
  return result;
}

function showResult(ball_count, strike_count){//결과 출력 함수
  if (ball_count+strike_count===0){
    MissionUtils.Console.print('낫싱');
    return;
  }
  let resultPrint = '';
  if (ball_count){
    resultPrint += `${ball_count}볼 `
  }
  if (strike_count){
    resultPrint += `${strike_count}스트라이크`
  }
  MissionUtils.Console.print(resultPrint);
}

function quitOptions(){
  MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
  MissionUtils.Console.readLine("",(input)=>{
    switch(input){
      case '1':
        playGame();
      case '2':
        MissionUtils.Console.close();
    }
  })
}

class App {
  play() {
    startMessage();
    playGame();
  }
}

module.exports = App;
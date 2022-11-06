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

function makeResult(answer, problem){
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

function showResult(ball_count, strike_count){
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

function isSuccess(strike_count){
  return strike_count===3;
}

function getResults(problem){
  // 3. 숫자 입력 받기
  MissionUtils.Console.readLine("숫자를 입력해 주세요. :", (input)=>{
    const answer = input;
    // 4. 결과 계산
    const result = makeResult(answer, problem);
    const [ball_count, strike_count] = result;
    // 5. 결과 출력
    showResult(ball_count, strike_count);
    // 6. 결과 반영
    if(!isSuccess(strike_count)){
      return getResults(problem);
    }
    MissionUtils.Console.close(); // 결과 반영 제대로 되었는지 테스트
    // 3 스트라이크 -> 콘솔 close
  })
}



class App {
  play() {
    //1. 게임 시작
    startGame();

    // 2. 문제 생성
    const NUMBER_LENGTH = 3;
    let problem = makeProblem(NUMBER_LENGTH);

    getResults(problem);
  }
}

module.exports = App;

const app = new App();
app.play();
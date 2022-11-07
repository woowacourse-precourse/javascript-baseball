const MissionUtils = require("@woowacourse/mission-utils");

function initBaseballGame(){
  const NUMBER_LENGTH = 3;
  const computerNumbers = makeComputerNumbers(NUMBER_LENGTH);
  playOneRound(computerNumbers);
}

function makeComputerNumbers(NUMBER_LENGTH){
  const computerNumbers = new Set([]);
  while ([...computerNumbers].length < NUMBER_LENGTH){
    computerNumbers.add(MissionUtils.Random.pickNumberInRange(1,9));
  }
  return [...computerNumbers];
}

function playOneRound(computerNumbers){
  MissionUtils.Console.readLine("숫자를 입력해 주세요. : ", (userNumbers)=>{
    if(userNumbers.length>3){
      throw '길이 초과'
    }
    const [ball, strike] = countBallAndStrike(userNumbers, computerNumbers);
    showResult(ball, strike);
    if(strike!==3){
      return playOneRound(computerNumbers);
    }
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    quitOptions();
  })
}


function countBallAndStrike(userNumbers, computerNumbers){//결과 계산 함수
  const strike = computerNumbers.reduce((count,computerNumber,index)=>(
    count+(String(computerNumber)===userNumbers[index])
  ), 0)
  const ball = computerNumbers.reduce((count, computerNumber)=>(
    count+([...userNumbers].includes(String(computerNumber)))
  ), 0) - strike;
  return [ball, strike];
}

function showResult(ball, strike){//결과 출력 함수
  if (ball + strike ===0){
    MissionUtils.Console.print('낫싱');
    return;
  }
  let resultPrint = '';
  if(ball){
    resultPrint += `${ball}볼 `;
  }
  if(strike){
    resultPrint += `${strike}스트라이크`
  }
  MissionUtils.Console.print(resultPrint);
}

function quitOptions(){
  MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
  MissionUtils.Console.readLine("",(input)=>{
    if(input === '1'){
      initBaseballGame();
    }
    else if(input === '2'){
      MissionUtils.Console.close();
    }
  })
}

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    initBaseballGame();
  }
}

module.exports = App;
// const app = new App();
// app.play(); 
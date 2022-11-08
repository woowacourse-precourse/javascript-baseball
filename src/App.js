const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor(){
    this.computerInputNum = []
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.computerInputRandomNum();
    this.userInputRandomNum();
  }

  computerInputRandomNum(){
    this.computerInputNum = []
    let comNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3)
    if(this.computerInputNum.length = 3){
     this.computerInputNum.push(comNum);
    }
  }

  userInputRandomNum(){
    MissionUtils.console.readLine('숫자를 입력 해주세요 : ', (answer) => {
    this.checkError(answer)
    this.collectAnswer(answer)
   })
  }

  checkError(answer){
    const answerCheck = answer.toString().split('').map(Number)
    if(answerCheck.length !== 3) throw '숫자의 길이는 3자리 이하이여야 합니다.'
    if(answerCheck !== /^[1-9]+$/) throw '1~9 사이의 값 중에서 고르세요.'
    if(isNaN(answerCheck)) throw '숫자가 아닙니다.'
    duplicatedNum = answerCheck.map((el,i) => {
      if(el[i] === el[i+1]) throw '숫자가 중복 됐습니다.'
    })
  }

  collectAnswer(answer){
    userAnswer = answer.toString().split('').map(Number)
    checkStrike = 0;
    checkBall = 0;
    for(let i=0; i < userAnswer.length; i++){
      if(this.computerInputNum[i] === userAnswer[i]) checkStrike++
      else if(this.computerInputNum[i].includes(userAnswer)) checkBall++
    }
    this.getAnswer(checkStrike, checkBall)
  }
  
  getAnswer(checkStrike, checkBall){
    if(checkStrike !== 0) MissionUtils.Console.print(`${checkStrike} : Strike`);
    if(checkBall !== 0) MissionUtils.Console.print(`${checkBall} : Ball`);
    if(checkStrike === 0 && checkBall === 0) MissionUtils.Console.print('낫싱');
  }
}

module.exports = App;






/* 필요 기능 목록

입력 정보
1. 컴퓨터의 랜덤으로 3개의 숫자를 입력받는 기능
  구성에 필요 데이터 정보
 - 1~9 중 랜덤 3자리를 불러와야 함.
 - 숫자가 연속되면 안 됨.

2. 사용자가 3자리 숫자를 입력할 수 있는 기능
  구성에 필요 데이터 정보
 - 0을 포함하지 않아야 함.
 - 세자리 숫자를 입력 받아야 함.
 - 같은 숫자가 연속되지 않아야 함.


출력 정보   
1. 컴퓨터와 값을 비교하는 기능
  구성에 필요 데이터 정보
 - 컴퓨터 배열과 사용자의 배열중 같은 자리의 값이 같은 값이라면 '스트라이크' 출력
 - '' 같은 값만 존재하면 '볼' 출력
 - 같은 값이 존재하지 않는다면 '낫싱'을 출력

2. 3개의 숫자를 모두 맞추게 됐을 때 기능
  구성에 필요 데이터 정보
 - 3 스트라이크 : 3개의 숫자를 모두 맞히셨습니다! 게임종료 출력
 - 다시 게임 시작 문구 출력 : "숫자 야구 게임을 시작합니다."
*/
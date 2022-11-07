const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor(){
    this.computerInputNum = []
    this.userInputNum = []
  }
}

module.exports = App;

function computerInputRandomNum(){
  this.computerInputNum = []
  let comNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3)
  if(this.computerInputNum.length = 3){
   this.computerInputNum.push(comNum);
   return computerInputNum
  }
}




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
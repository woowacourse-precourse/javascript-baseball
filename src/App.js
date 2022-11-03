const MissionUtils = require('@woowacourse/mission-utils');

//console.log(MissionUtils.Random.pickNumberInList([1, 2, 3]));
console.log(MissionUtils.Random.pickUniqueNumbersInRange(1, 10, 3));
//랜덤으로 지정해 3숫자 변수에 저장
//숫자를 선택해주세요 하고 사용자가 3개의 숫자 입력
//결과 출력 하고 -> 못맞췄으면 다시 숫자 3개 입력하게 or 맞췄으면 계속/끝 1,2 입력하게
//끝(2) 선택하면 종료
//다시(1) 선택하면 숫자다시 랜덤으로 지정하고 처음부터
MissionUtils.Console.readLine('닉네임을 입력해주세요.', (answer) => {
  console.log(`닉네임: ${answer}`);
  if (answer) {
    MissionUtils.Console.close();
  }
});
// 이름 입력시 종료

class App {
  play() {}
}

module.exports = App;

/*
일단 어렵게 생각하지말고 
*/

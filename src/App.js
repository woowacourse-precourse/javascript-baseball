const MissionUtils = require('@woowacourse/mission-utils');

//console.log(MissionUtils.Random.pickNumberInList([1, 2, 3]));
// console.log(MissionUtils.Random.pickUniqueNumbersInRange(1, 10, 3));
//랜덤으로 지정해 3숫자 변수에 저장
//숫자를 선택해주세요 하고 사용자가 3개의 숫자 입력
//결과 출력 하고 -> 못맞췄으면 다시 숫자 3개 입력하게 or 맞췄으면 계속/끝 1,2 입력하게
//끝(2) 선택하면 종료
//다시(1) 선택하면 숫자다시 랜덤으로 지정하고 처음부터
// MissionUtils.Console.readLine('닉네임을 입력해주세요.', (answer) => {
//   console.log(`닉네임: ${answer}`);
//   if (answer) {
//     MissionUtils.Console.close();
//   }
// });
// 이름 입력시 종료

/* 
0. npm start 시 app.play 실행
1. 컴퓨터가 숫자 정하기
2. 사용자한테 숫자 입력하라고 하기
3. 사용자 숫자 받기
4. 사용자 숫자 계산
5. 리턴값 출력
5-1. 틀리면 그에 맞는 결과 출력
5-2. 맞추면 '3개의 숫자를 모두 맞히셨습니다! 게임 종료'
5-3. 또 '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.' 출력
6. 1하면 다시 반복, 2하면 종료
*/

class App {
  play() {
    this.print('숫자 야구 게임을 시작합니다.');
    this.setNumber();
    this.selectNumber();
  }
  print(str) {
    return MissionUtils.Console.print(str);
  }
  setNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 10, 3);
  }
  selectNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      const check = /[^0-9]/g;
      console.log(check.test(answer));
      if (!(answer.length === 3) || check.test(answer)) {
        // 숫자가 아니거나, 글자수가 3보다 적고 크면 thow문 사용하여 예외 처리
        this.gameOver();
      } else {
        console.log('하이1');
      }
    });
  }

  gameOver() {
    return MissionUtils.Console.close();
  }
}
const app = new App();
app.play();

module.exports = App;

/*
일단 어렵게 생각하지말고 
*/

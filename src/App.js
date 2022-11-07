const MissionUtils = require("@woowacourse/mission-utils");

class App{
  comRandomNumber(){ //컴퓨터 랜덤 숫자 정하기 함수
    const comNum = [];
    while (comNum.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!comNum.includes(number)) {
        comNum.push(number);
      }
    }
    MissionUtils.Console.print(comNum);
  }

  gameStartNotice(){ //게임 시작 알림
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  gameStart(){ //게임 시작
    MissionUtils.Console.readLine('숫자를 입력해주세요', (number) => {
      const usrNum = [...number];
      
      if(usrNum){
      
      } else { //숫자 맞힘
        MissionUtils.Console.close();
        MissionUtils.Console.print('3스트라이크');
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (reOrEnd) => {
          if(reOrEnd == 1){
            //재시작
          } else if(reOrEnd == 2){
            //종료
          } else {
            //예외처리
          }
        });
      }
    });
  }

  play() { 
    this.comRandomNumber();
    this.gameStartNotice();
  }
}


module.exports = App;

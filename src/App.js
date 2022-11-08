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


  getGameResult(){ //스트라이크, 볼 계산
    MissionUtils.Console.readLine('숫자를 입력해주세요', (number) => {
      let strike = 0;
      let ball = 0;
      let nothing = 0;

      let usrNum = [...number];

      for(let i = 0; i < usrNum.length; i++){
        if(comNum.includes(u[i])){
          if(usrNum[i] == comNum[i]){
            strike ++;
          } else {
            ball ++;
          }
        } else {
          nothing++;
        }
      }
    });
    MissionUtils.Console.close();    
  }

  printGameResult(){ //게임 결과 출력
    if(strike == 3){
      MissionUtils.Console.print('3스트라이크');

    } else if(strike > 0 && strike < 3 && ball ==0){
      MissionUtils.Console.print('%d스트라이크', strike);
    } else if(ball > 0 && ball <= 3 && strike == 0){
      MissionUtils.Console.print('%d볼', ball);
    } else if(strike == 2 && ball == 1){
      MissionUtils.Console.print('%d스트라이크 %d볼', strike, ball);
    } else if(nothing == 3){
      MissionUtils.Console.print('낫싱');
    }
  }


  gameStart(){ //게임 시작
    this.getGameResult();
    this.printGameResult();
    
  }

  play() { 
    this.comRandomNumber();
    this.gameStartNotice();
    this.gameStart();
  }
}


module.exports = App;

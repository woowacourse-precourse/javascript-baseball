const MissionUtils = require("@woowacourse/mission-utils");

class App{
  constructor(){ //변수 선언
    this.comNum = [];
    this.strike = 0;
    this.ball = 0;
    this.nothing = 0;
  }
  
  comRandomNumber(){ //컴퓨터 랜덤 숫자 정하기 함수
    
    while (this.comNum.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.comNum.includes(number)) {
        this.comNum.push(number);
      }
    }
    MissionUtils.Console.print(this.comNum);
  }

  gameStartNotice(){ //게임 시작 알림
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  getGameResult(){ //스트라이크, 볼 계산
    MissionUtils.Console.readLine('숫자를 입력해주세요', (number) => {
      let usrNum = [...number];

      for(let i = 0; i < usrNum.length; i++){
        if(this.comNum.includes(usrNum[i])){
          if(usrNum[i] == this.comNum[i]){
            this.strike ++;
          } else {
            this.ball ++;
          }
        } else {
          this.nothing++;
        }
      }
    });
    MissionUtils.Console.close();    
  }

  printGameResult(){ //게임 결과 출력
    if(this.strike == 3){
      MissionUtils.Console.print('3스트라이크');
      this.restartOrEnd();
    } else if(this.strike > 0 && this.strike < 3 && this.ball ==0){
      MissionUtils.Console.print('%d스트라이크', this.strike);
    } else if(this.ball > 0 && this.ball <= 3 && this.strike == 0){
      MissionUtils.Console.print('%d볼', this.ball);
    } else if(this.strike == 2 && this.ball == 1){
      MissionUtils.Console.print('%d스트라이크 %d볼', this.strike, this.ball);
    } else if(this.nothing == 3){
      MissionUtils.Console.print('낫싱');
    }
  }

  restartOrEnd(){ //게임 종료 시 재시작 또는 종료
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (number) => {
      if(number == 1){
        this.play();
      } else if(number == 2){
        MissionUtils.Console.close();
      } else {
        //예외처리
      }
    });
    MissionUtils.Console.close();
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

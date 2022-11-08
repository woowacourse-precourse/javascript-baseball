const MissionUtils = require("@woowacourse/mission-utils");

class App{
  constructor(){ //변수 선언
    this.comNum = [];
    this.usrNum =[];
    this.strike = 0;
    this.ball = 0;
    this.nothing = 0;
  }
  
  play() { //게임 시작
    this.comRandomNumber();
    this.gameStartNotice();
    this.getUsrNumber();
    this.getGameResult();
    this.printGameResult();
  }

  comRandomNumber(){ //컴퓨터 랜덤 숫자 정하기
    while (this.comNum.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.comNum.includes(number)) {
        this.comNum.push(number);
      }
    }
    console.log(this.comNum);
    return this.comNum;
  }

  gameStartNotice(){ //게임 시작 알림
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  getUsrNumber(){ //사용자 수 입력 받기
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answers) => {
      this.usrNum = this.usrNumberInputCheck(answers); 
      
      console.log(this.usrNum);
      //this.getGameResult();
    });
  }

  usrNumberInputCheck(number){ //사용자 수 입력 예외 처리
    let setNumber = new Set(number);
    if((number).length != 3){
      throw new Error('3자리 수가 아닙니다.');
    } else if(setNumber.size != 3){
      throw new Error('서로 다른 수가 아닙니다.');
    } else if(Math.sign(number[0]) != 1 || Math.sign(number[1]) != 1 || Math.sign(number[2]) != 1){
      throw new Error('양수가 아닙니다.');
    }
  }

  getGameResult(){ //스트라이크, 볼 계산 
    for(let i = 0; i < 3; i++){
      if(this.comNum.includes(this.usrNum[i])){
        if(this.usrNum[i] == this.comNum[i]){
          this.strike++;
        } else {
          this.ball++;
        }
      } else {
        this.nothing++;
      }
    }  
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
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (number) => {
      if(number == 1){
        return this.play();
      } else if(number == 2){
        return MissionUtils.Console.close();
      } else {
        throw new Error('잘못된 입력값입니다.');
      }
    });
    MissionUtils.Console.close();
  }

}


module.exports = App;

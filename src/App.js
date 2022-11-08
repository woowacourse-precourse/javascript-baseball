const MissionUtils = require("@woowacourse/mission-utils");

class App{
  constructor(){ //변수 선언
    this.comNum = [];
    this.usrNum =[];
  }
  
  play() { //게임 시작
    this.comRandomNumber();
    this.gameStartNotice();
    this.getUsrNumber();
  }

  comRandomNumber(){ //컴퓨터 랜덤 숫자 정하기
    while (this.comNum.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.comNum.includes(number)) {
        this.comNum.push(number);
      }
    }
    //console.log("ComNum: " + this.comNum);
  }

  gameStartNotice(){ //게임 시작 알림
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  getUsrNumber(){ //사용자 수 입력 받기
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answers) => {
      this.usrNum = answers;
      this.usrNumberInputCheck(this.usrNum); 
      
      //console.log("getUsrNumber: " + this.usrNum);
      
    });
    this.getGameResult();
  }

  usrNumberInputCheck(number){ //사용자 수 입력 예외 처리
    //console.log("usrNumberInputCheck: " + number);
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
    let strike = 0;
    let ball = 0;

    for(let i = 0; i < 3; i++){
      if(this.comNum[i] == this.usrNum[i]){
        strike += 1;
      } else if(this.comNum.includes(parseInt(this.usrNum[i]))){
        ball += 1;
      }
    } 
    //console.log("getGameResult: " + strike, ball);
    this.printGameResult(strike, ball);
  }

  printGameResult(strike, ball){ //게임 결과 출력
    if(strike == 3){
      MissionUtils.Console.print(strike + '스트라이크');
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.restartOrEnd();
    }else if(strike == 0 && ball == 0 ){
      MissionUtils.Console.print('낫싱');
      this.getUsrNumber();
    } else if(strike == 0 && ball > 0){
      MissionUtils.Console.print(ball + '볼');
      this.getUsrNumber();
    } else if(strike > 0 && ball == 0){
      MissionUtils.Console.print(strike + '스트라이크');
      this.getUsrNumber();
    } else {
      MissionUtils.Console.print(strike + '스트라이크 ' + ball + '볼');
      this.getUsrNumber();
    }
  }

  restartOrEnd(){ //게임 종료 시 재시작 또는 종료
    this.comNum = [];
    this.usrNum = [];
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (gameSig) => {
      if(gameSig === "1"){
        this.play();
      } else if(gameSig === "2"){
        MissionUtils.Console.print("게임 종료");
        MissionUtils.Console.close();
      }
    });
  }
}


module.exports = App;

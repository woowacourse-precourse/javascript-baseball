// const readline = require("readline");
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      return this.InsertNumber(answer)
    });
  }
  InsertNumber(answer){//숫자를 받아옴
    let insertAnswer = [];
    for (let i=0;i<answer.length;i++){
      insertAnswer.push(Number(answer[i]));
    }
    let computer = this.RandomNumber();//컴퓨터 숫자 받아옴
    return this.ComparedWith(insertAnswer,computer);
  }
  RandomNumber(){
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  ComparedWith(userNum,comNum){
    let strike = this.StringFunc(userNum,comNum);
    let ball = this.BallFunc(userNum,comNum);
    let result="";
    if ( strike == 3){
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료")
      MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.")
      MissionUtils.Console.readLine('', (answer) => {
        if( answer == "1"){
          return this.play();
        }else if(answer == "2") {
          MissionUtils.Console.print("게임 종료");
          MissionUtils.Console.close();
        }
      });
    }else{
      if(strike == null && ball == null){
        console.log("낫싱");
        MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
          return this.InsertNumber(answer)
        });
        return;
      }
      if(strike > 0){
        let st = strike+"스트라이크"+" ";
        result += st;
      } 
      if(ball > 0){
        let bl = ball+"볼";
        result += bl;
      } 
      console.log(result);
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
        return this.InsertNumber(answer)
      });
    }
  }
  StringFunc(user,com){//스트라이커 검사기
    let result = 0;
    for(let i = 0; i<user.length;i++){
      if(user[i] == com[i]){
        result += 1;
      }
    }
    if(result != 0 ){
      return result;
    } 
  }
  BallFunc(user,com){//볼검사기
    // console.log("user",user);
    // console.log("com",com);
    let result = 0;
    for(let i = 0; i<user.length;i++){
      // console.log(user[i]);
      if(user[i] == com[i]){//숫자가 같은자리면 넘어가고 
        continue;
      }
      if(com.includes(user[i]) == true){
        result += 1
      }
    }

    if(result != 0 ){
      return result;
    }
  }
}

module.exports = App;

const app = new App();
app.play();
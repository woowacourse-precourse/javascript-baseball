const MissionUtils = require("@woowacourse/mission-utils");
class App {
  constructor(){
    this.computer = [];
    this.user = [];
  }

  // 컴퓨터 수 셋팅 
  setComputer(){
    this.computer = [];
    while (this.computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }
  }

  // 유저의 수 셋팅
  setUser(){
    this.user = [];
    try {
      MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => { 
        // 유저의 수 검증
        answer = fn_userNumberCheck(answer);
        
        for(var i = 0 ; i < answer.length ; i++){
          this.user.push(Number(answer[i]));
        }
        
        // 게임 시작
        this.gameStart();
      });
    } catch (error) {
      MissionUtils.Console.print("ERROR : " + error);
      MissionUtils.Console.print("게임이 종료됩니다.");
      MissionUtils.Console.close();
      throw error;
      //return false;
    }
  }

  gameStart(){
    var computer = this.computer;
    var user = this.user;

    var result = [0, 0, 0]; // B, S, N
    user.forEach( (unum, i) => {
      var tmpIdx = computer.indexOf(unum);
      if(tmpIdx == i){
        // 스트라이크
        result[1] += 1;
      } else if (tmpIdx > -1){
        // 볼
        result[0] += 1;
      } else {
        // 없음
        result[2] += 1;
      }
    })
    
    var finish = false;
    if(result[1] == 3){
      finish = true;
    }

    if(finish){
      MissionUtils.Console.print("3스트라이크");
      this.gameEnd();
    } else {
      var printResult = "";
      printResult += result[0] != 0 ? result[0] + "볼" : "";
      printResult += result[1] != 0 ? result[1] + "스트라이크" : "";
      printResult += result[2] == 3 ? "낫싱" : "";
      MissionUtils.Console.print(printResult);
      this.setUser();
    }

  }

  gameEnd(){
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.", (answer) => { 
      answer = Number(answer);
      if(answer == 1){
        // 새로 시작 
        this.play();
      } else if (answer == 2) {
        // 종료 
        MissionUtils.Console.print("게임이 종료됩니다.");
        MissionUtils.Console.close();
      } else {
        MissionUtils.Console.close();
        //throw "잘못 누르셨습니다. 게임이 종료됩니다.";
      }
    });
  }

  play() {
    // 컴퓨터의 수 선택
    this.setComputer();

    // 사용자의 수 선택 
    this.setUser();
  }
}

function fn_userNumberCheck(inputNum){
  let numCheck = new NumberCheck(inputNum);

  numCheck.isThreeWord();
  numCheck.isContainsBlank();
  numCheck.isNumber();
  numCheck.isDuple();

  usersNumbers = inputNum;
  return inputNum;
}

class NumberCheck{
  constructor(input){
    this.input = input;
  }

  // 예외처리 1. 길이가 3이 아닐 때s
  isThreeWord(){
    if(this.input.length != 3){
      throw new Error("3자리 숫자가 아닙니다.");
    }
  }

  // 사용자의 수 예외처리 2 - 공백이 포함되면 예외발생
  isContainsBlank(){
    var inputStr = this.input;
    if(inputStr.indexOf(" ") > -1){
      throw new Error("공백을 입력했습니다.");
    }
  }

  // 사용자의 수 예외처리 3 - 숫자가 아니면 예외발생
  isNumber(){
    var regexp = /^[1-9]+$/g;
    if(!regexp.test(this.input)){
      throw new Error("숫자가 아닙니다.");
    }
  }

  // 사용자의 수 예외처리 5 - 중복된 수가 있는 경우
  isDuple(){
    var thisInput = this.input;
    var inputArr = Array.from(this.input);
    var inputSet = new Set(inputArr);

    if(thisInput.length != inputSet.size){
      throw new Error("중복된 숫자가 있습니다.");
    }
  }
}

MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
const app = new App();
app.play();

module.exports = App;
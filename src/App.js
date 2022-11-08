const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const computer = [];
    let strike = 0;
    let ball = 0;
    let nothing = 0;
    let userNum = '';

    // 컴퓨터가 랜덤한 숫자 3개를 만드는 함수
    function createComputerNumber() {
      while (computer.length < 3) {
        let number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }
    }

    // 유저가 숫자를 입력하게 만들고, 입력한 값이 제대로 된 값인지 확인하는 함수
    function getUserInput() {
      MissionUtils.Console.readLine("숫자를 입력해주세요.", (answer) => {
        if (answer.length > 3) {
          throw "다시 입력해주세요.";
        }else if (answer.includes(0)){
          throw "다시 입력해주세요.";
        }else if (Number.isNaN(Number(answer))){
          throw "다시 입력해주세요.";
        }else if (new Set(answer).size!==3){
          throw "다시 입력해주세요.";
        }
        userNum = answer;
      });
    }

    // 컴퓨터 숫자와 유저 숫자를 비교하는 함수
    function compareNumber(){
      strike = 0;
      ball = 0;
      nothing = 0;
      for (let ind = 0; ind < 3; ind++){
        if (userNum[ind] == computer[ind]){
          strike += 1;
        }else if (userNum.includes(computer[ind])){
          ball += 1;
        }else {
          nothing += 1;
        }
      }
    }
  }
}

module.exports = App;

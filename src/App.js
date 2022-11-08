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
  }
}

module.exports = App;

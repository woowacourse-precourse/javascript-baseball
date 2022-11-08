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

    // 게임 결과를 체크하는 함수
    function checkGameResult() {
      getUserInput();
      compareNumber();
      // 정답일 경우
      if (strike === 3) {
        MissionUtils.Console.print("3스트라이크");
        return;
      } else if (nothing === 3) {
        MissionUtils.Console.print("낫싱");
      } else if (ball > 0 && strike > 0) {
        MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
      } else if (ball > 0 && strike === 0){
        MissionUtils.Console.print(`${ball}볼`);
      } else if (ball === 0 && strike > 0){
        MissionUtils.Console.print(`${strike}스트라이크`);
      }
      return checkGameResult();
    }

    // 정답을 맞췄을 경우 다시 게임을 시작하거나 종료할수 있도록 숫자를 입력받고 확인하는 함수
    function replayGame() {
      MissionUtils.Console.readLine(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
        (replayOrStopNumber) => {
          if (Number(replayOrStopNumber) === 1) {
            computer.splice(0, computer.length);
            createComputerNumber();
            checkGameResult();
            replayGame();
          } else if (Number(replayOrStopNumber) === 2) {
            MissionUtils.Console.print("게임 종료");
            return MissionUtils.Console.close();
            // 유저가 1 또는 2와 다른 것을 입력한다면 다시 입력할 수 있도록 하는 if문
          }else if (Number(replayOrStopNumber) !== 1 || Number(replayOrStopNumber) !== 2){
            return replayGame();
          }
        }
      );
    }

    createComputerNumber();
    checkGameResult();
    replayGame();
  }
}

module.exports = App;

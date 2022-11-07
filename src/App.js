const MissionUtils = require("@woowacourse/mission-utils");
const START_MESSAGE="숫자 야구 게임을 시작합니다."
const INPUT_MESSAGE="숫자를 입력해주세요 :"
const ERORR_MESSAGE="잘못된 입력입니다."
class App {
  play() {
    MissionUtils.Console.print(START_MESSAGE);
    this.getComputerNumber();
  }
  getComputerNumber() {
    const computer = [];
    while (computer.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);
      number = number.toString();
      if (!computer.includes(number)) computer.push(number);
    }
    MissionUtils.Console.print(computer);
    this.playerInput(computer);
  }
  playerInput(computer) {
    MissionUtils.Console.readLine(INPUT_MESSAGE, (input) => {
      if (this.playerNumberCheck(input)) this.countBallStrike(computer, input);
    });
  }
  playerNumberCheck(input) {
    if (input.length !== 3) {
      throw new Error(ERORR_MESSAGE);
    }
    if (new Set(input).size !== 3) {
      throw new Error(ERORR_MESSAGE);
    }
    return true;
  }
  countBallStrike(computer, input) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < input.length; i++) {
      if (computer.includes(input[i])) {
        ball += 1;
      }
      if(computer[i]===input[i]){
        strike += 1;
      }
    }
    ball=ball-strike;
    this.result(computer, strike, ball);
  }
  result(computer, strike, ball) {
    if (strike === 3) {
      MissionUtils.Console.print(`${strike}스트라이크`);
      MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
      return this.restartOrEnd();
    }
    if (strike === 0 && ball === 0) {
      MissionUtils.Console.print("낫싱");
      return this.playerInput(computer);
    } 
    else if (strike === 0 && ball !== 0) {
      MissionUtils.Console.print(`${ball}볼`);
      return this.playerInput(computer);
    } 
    else if (strike !== 0 && ball === 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
      return this.playerInput(computer);
    } 
    else {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
      return this.playerInput(computer);
    }
  }
  restartOrEnd() {
    MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",(restart) => {
      if (restart == 1) {
        return this.getComputerNumber();
      } 
      else if (restart == 2) {
        MissionUtils.Console.close();
      } 
      else {
        throw new Error(ERORR_MESSAGE);
      }
    });
  }
}

const app = new App();
app.play();

module.exports = App;
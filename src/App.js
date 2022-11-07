const MissionUtils = require("@woowacourse/mission-utils");

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
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    MissionUtils.Console.print(computer);
    this.playerInput(computer);
  }
  playerInput(computer) {
    MissionUtils.Console.readLine("숫자를 입력해 주세요 :", (input) => {
      if (this.playerNumberCheck(input)) {
        this.countBallStrike(computer, input);
      }
    });
  }
  playerNumberCheck(input) {
    if (input.length !== 3) {
      throw new Error("잘못된 입력입니다.");
    }
    if (new Set(input).size !== 3) {
      throw new Error("잘못된 입력입니다.");
    }
    return true;
  }
  countBallStrike(computer, input) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < input.length; i++) {
      if (computer.includes(input[i])) {
        if(computer[i]===input[i]){
          strike += 1;
        }
        else {
          ball += 1;
        }
      }
    }
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
}

const app = new App();
app.play();

module.exports = App;
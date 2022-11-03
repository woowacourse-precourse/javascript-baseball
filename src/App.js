const MissionUtils = require("@woowacourse/mission-utils");

class App {
  async play() {
    let CLEAR = false;

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const computer = this.computerInput();
    console.log(computer);

    while(CLEAR === false) {
      try{
        let player = await this.playerInput();
        let [strikeCount, ballCount] = this.checkBallCounts(computer, player.split("").map(Number));
        this.printBallCounts(strikeCount, ballCount);
        CLEAR = this.isClear(strikeCount);
      }catch(e) {
        console.error(e);
      }
    }

    let retry = await this.isRetry();
    try{
      if(retry === "1")
        this.play();
      else
        return;
    }catch(e) {
      console.error(e);
    }
  }

  playerInput() {
    return new Promise(resolve => {
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (number) => {
        this.isNumber(number);
        this.isCorrectNumber(number);
        this.isNumberRepeat(number);
        resolve(number);
      });
    });
  }

  isNumber(value) {
    const RegExp = /[0-9]/g;
    if(RegExp.test(value) === false)
      throw new Error("Error!");
  }

  isCorrectNumber(value) {
    if(value.length !== 3)
      throw new Error("Error!");
  }

  isNumberRepeat(value) {
    let valueSet = new Set(value);
    if(value.length !== valueSet.size)
      throw new Error("Error!");
  }

  isOneOrTwo(value) {
    if(value !== "1" || value !== "2")
      throw new Error("Error!");
  }

  computerInput() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number))
        computer.push(number);
    }
    return computer;
  }

  isClear(strikeCount) {
    if(strikeCount === 3)
      return true;
    return false;
  }

  isRetry() {
    return new Promise(resolve => {
      MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (number) => {
        this.isNumber(number);
        this.isOneOrTwo(number);
        resolve(number);
      })
    });
  }

  printBallCounts(strikeCount, ballCount) {
    if(strikeCount === 3) {
      MissionUtils.Console.print(`${strikeCount}스트라이크`);
      MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
    }
    else if(strikeCount >= 1)
      MissionUtils.Console.print(`${strikeCount}스트라이크`);
    if(ballCount >= 1)
      MissionUtils.Console.print(`${ballCount}볼`);
    if(strikeCount === 0 && ballCount === 0)
      MissionUtils.Console.print(`낫싱`);
  }

  checkBallCounts(computer, player) {
    let strikeCount;
    let ballCount;

    let temp_computer = computer.slice();
    let temp_player = player.slice();
 
    [strikeCount, temp_computer, temp_player] = this.checkStrikeCount(temp_computer, temp_player);
    ballCount = this.checkBallCount(temp_computer, temp_player);

    return [strikeCount, ballCount];
  }

  checkStrikeCount(computer, player) {
    let strikeCount = 0;
    for(let i = 0; i < computer.length; i++) {
      if(computer[i] === player[i]) {
        strikeCount += 1;
        computer[i] = undefined;
        player[i] = undefined;
      }
    }

    return [strikeCount, computer, player];
  }

  checkBallCount(computer, player) {
    let ballCount = 0;
    for(let i = 0; i < player.length; i++) {
      if(computer.includes(player[i]) && player[i] !== undefined)
        ballCount += 1;
    }

    return ballCount;
  }
}

const app = new App();
app.play();
module.exports = App;

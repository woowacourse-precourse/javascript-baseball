const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const computer = this.computerInput();
    console.log(computer);
    this.sendValue(computer);
  }

  sendValue(computer) {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (player) => {
      this.playerCheck(player);
      let [strikeCount, ballCount] = this.checkBallCounts(computer, player.split("").map(Number));
      this.printBallCounts(strikeCount, ballCount);
      
      if(!this.isClear(strikeCount))
        this.sendValue(computer);
      else
        this.sendRetry();
    });
  }

  sendRetry() {
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (number) => {
      this.retryCheck(number);
      if(number === "1")
        this.play();
      else
        MissionUtils.Console.close();
        return 0;
    })
  }

  retryCheck(number) {
    this.isNumber(number);
    this.isOneOrTwo(number);
  }

  playerCheck(number) {
    this.isNumber(number);
    this.isCorrectNumber(number);
    this.isNumberRepeat(number);
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

  isNumber(value) {
    const RegExp = /[1-9]/g;
    if(RegExp.test(value) === false)
      throw Error();
  }

  isCorrectNumber(value) {
    if(value.length !== 3)
      throw Error();
  }

  isNumberRepeat(value) {
    let valueSet = new Set(value);
    if(value.length !== valueSet.size)
      throw Error();
  }

  isOneOrTwo(value) {
    if(!(value === "1" || value === "2"))
      throw Error();
  }

  isClear(strikeCount) {
    if(strikeCount === 3) {
      MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
      return true;
    }
    return false;
  }

  

  printBallCounts(strikeCount, ballCount) {
    if(strikeCount >= 1 && ballCount >= 1)
      MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
    else if(ballCount >= 1)
      MissionUtils.Console.print(`${ballCount}볼`);
    else if(strikeCount >= 1)
      MissionUtils.Console.print(`${strikeCount}스트라이크`);
    else
      MissionUtils.Console.print("낫싱");
  }

  checkBallCounts(computer, player) {
    let strikeArray;
    let strikeCount;
    let ballCount;
 
    [strikeCount, strikeArray] = this.checkStrikeCount(computer, player);
    ballCount = this.checkBallCount(computer, player, strikeArray);

    return [strikeCount, ballCount];
  }

  checkStrikeCount(computer, player) {
    let strikeCount = 0;
    let alreadyStrike = [];
    for(let i = 0; i < computer.length; i++) {
      if(computer[i] === player[i]) {
        strikeCount += 1;
        alreadyStrike.push(computer[i]);
      }
    }

    return [strikeCount, alreadyStrike];
  }

  checkBallCount(computer, player, strikeArray) {
    let ballCount = 0;
    for(let i = 0; i < player.length; i++) {
      if(computer.includes(player[i]) && !strikeArray.includes(player[i]))
        ballCount += 1;
    }

    return ballCount;
  }
}

module.exports = App;

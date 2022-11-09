const MissionUtils = require("@woowacourse/mission-utils");
const GameStartMsg = require("./GameStartMsg");

class App {
  constructor() {
    this.answerBox = [];
    this.compareComputer = [];
  }
  reGameNum() {
    this.computerSelect();
  }
  userInputfunc() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      this.answerBox.length = 0;
      this.answerBox.push(answer.split("").map(Number));
      this.isNothing(this.answerBox, this.compareComputer);
      this.isBall(this.answerBox, this.compareComputer);
      this.isStrike(this.answerBox, this.compareComputer);
      this.reGame(this.answerBox, this.compareComputer);
      this.isError(this.answerBox);
    });
  }
  computerSelect() {
    this.compareComputer.length = 0;

    while (this.compareComputer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.compareComputer.includes(number)) {
        this.compareComputer.push(number);
      }
    }
  }
  isNothing() {
    const userNum = this.answerBox[0];
    const comNum = this.compareComputer;
    let duplicated = userNum.filter((x) => comNum.includes(x));
    if (duplicated.length === 0) {
      MissionUtils.Console.print("낫싱");
      this.userInputfunc(this.answerBox);
    }
  }
  isBall() {
    const userNum = this.answerBox[0]; 
    let strikeCount = 0;
    for (let i = 0; i < this.compareComputer.length; i++) {
      if (userNum[i] === this.compareComputer[i]) {strikeCount++;}
    }
    const dupNum = userNum.filter((duplicated) => this.compareComputer.includes(duplicated)).length;
    if (strikeCount === 0 && dupNum !== 0) {
      MissionUtils.Console.print(`${dupNum}볼`);
      this.userInputfunc(this.answerBox);
    }
    if (strikeCount > 0 && dupNum !== 0 && dupNum - strikeCount !== 0) {
      MissionUtils.Console.print(`${dupNum - strikeCount}볼 ${strikeCount}스트라이크`);
      this.userInputfunc(this.answerBox);}
  }
  isStrike() {
    const userNum = this.answerBox[0];
    let strikeCount = 0;
    for (let i = 0; i < this.compareComputer.length; i++) {
      if (userNum[i] === this.compareComputer[i]) strikeCount++;
    }
    const dupNum = userNum.filter((duplicated) => this.compareComputer.includes(duplicated)).length;
    if (userNum.toString() === this.compareComputer.toString()) {
      MissionUtils.Console.print(`${strikeCount}스트라이크`),
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }
    if (strikeCount !== 0 && strikeCount !== 3 && dupNum - strikeCount === 0) {
      MissionUtils.Console.print(`${strikeCount}스트라이크`);
      this.userInputfunc(this.answerBox);}
  }
  isError() {
    const userNum = this.answerBox[0];
    if (userNum.every((el) => isNaN(el) === true))
      throw new Error("숫자만 입력해주세요");

    if (!userNum.every((el) => el > 0))
      throw new Error("1에서 9까지의 수를 입력해주세요");

    const isDuplicate = new Set(userNum);
    if (userNum.length !== isDuplicate.size)
      throw new Error("중복되지 않는 수를 입력해주세요");

    if (userNum.length !== 3)
      throw new Error("숫자를 3개 입력해주세요");
  }
  reGame() {
    const userNum = this.answerBox[0];
    if (userNum.toString() === this.compareComputer.toString()) {
      MissionUtils.Console.print( "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    }
    MissionUtils.Console.readLine("", (reGameAnswer) => {
      if (reGameAnswer === "2") MissionUtils.Console.close();
      if (reGameAnswer === "1") {
        this.reGameNum();
        this.userInputfunc(this.answerBox);
      }
      if (reGameAnswer !== "1" && reGameAnswer !== "2") 
      throw new Error("1과 2중에 입력해주세요");
    });
  }
  play() {
    GameStartMsg();
    this.computerSelect();
    this.userInputfunc();
  }
}

const app = new App();
app.play();

module.exports = App;

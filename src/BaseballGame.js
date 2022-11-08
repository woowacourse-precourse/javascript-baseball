const { Console, Random } = require("@woowacourse/mission-utils");
const InvalidTest = require("./InvalidTest");
class BaseballGame {
  computerAnswer;
  constructor() {
    this.gameStart();
  }
  gameStart() {
    this.getComputerAnswer();
    this.getUserAnswer();
  }
  getComputerAnswer() {
    const computerNumberList = [];
    while (computerNumberList.length < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (!computerNumberList.includes(randomNumber)) {
        computerNumberList.push(randomNumber);
      }
    }
    this.computerAnswer = Number(computerNumberList.join(""));
  }
  getUserAnswer() {
    Console.readLine("숫자를 입력해주세요 : ", (userAnswer) => {
      InvalidTest.isNumber(userAnswer);
      InvalidTest.isThreeNumber(userAnswer);
      InvalidTest.isHaveZero(userAnswer);
      InvalidTest.isSameNumber(userAnswer);
      this.compareNumber(this.computerAnswer, userAnswer);
      this.getUserAnswer();
    });
  }
  compareNumber(computerAnswer, userAnswer) {
    const computerAnswerList = String(computerAnswer).split("");
    const userAnswerList = String(userAnswer).split("");
    const computerAnswerObject = { ...computerAnswerList };
    const userAnswerObject = { ...userAnswerList };
    const score = this.baseballReferee(computerAnswerObject, userAnswerObject);
    const strike = score[0];
    const ballCount = score[1];
    if (strike === 3) {
      Console.print("3스트라이크");
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.gameRestart();
      return;
    }
    if ((strike === 0) & (ballCount === 0)) {
      Console.print("낫싱");
    }
    if ((strike === 0) & (ballCount !== 0)) {
      Console.print(`${ballCount}볼`);
    }
    if ((strike !== 0) & (ballCount === 0)) {
      Console.print(`${strike}스트라이크`);
    }
    if ((strike !== 0) & (ballCount !== 0)) {
      Console.print(`${ballCount}볼 ${strike}스트라이크`);
    }
  }
  baseballReferee(computerAnswerObject, userAnswerObject) {
    let strike = 0;
    let ballCount = 0;
    if (
      JSON.stringify(computerAnswerObject) === JSON.stringify(userAnswerObject)
    ) {
      strike = 3;
      return [strike, ballCount];
    }
    const checkBallStrike = Object.values(userAnswerObject).map(
      (userNumber, numberIndex) => {
        const sameNumberCount =
          Object.values(computerAnswerObject).indexOf(userNumber);
        if (sameNumberCount === -1) {
          return [strike, ballCount];
        } else {
          numberIndex === sameNumberCount ? (strike += 1) : (ballCount += 1);
        }
        return [strike, ballCount];
      }
    );
    return checkBallStrike[checkBallStrike.length - 1];
  }

  gameRestart() {
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (number) => {
        InvalidTest.isOneOrTwo(number);
        if (Number(number) === 1) {
          this.gameStart();
        } else if (Number(number) === 2) {
          Console.close();
        }
      }
    );
  }
}
module.exports = BaseballGame;

const MissionUtils = require("@woowacourse/mission-utils");

class App {
  computerNumber;

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.setGame();
  }

  setGame() {
    this.setComputerNumber();
    // console.log("computerNumber", this.computerNumber);
    this.compareWithUserNumber();
  }

  setComputerNumber() {
    const computerNumber = [];
    while (computerNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(number)) {
        computerNumber.push(number);
      }
    }
    this.computerNumber = computerNumber;
  }

  compareWithUserNumber() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
      if (number.length > 3 || number.length < 3)
        throw new Error("3자리의 숫자를 입력해주세요.");

      const userNumber = parseInt(number, 10);

      // if (!Number.isNaN(userNumber)) throw new RangeError();

      const scoreObject = this.getScoreObject(userNumber);
      const hint = this.getHint(scoreObject);

      MissionUtils.Console.print(hint);

      if (scoreObject.strike === 3) {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        this.afterGameEnded();
        return;
      }
      this.compareWithUserNumber();
    });
  }

  getScoreObject(userNumber) {
    const scoreObject = { strike: 0, ball: 0 };

    const splitedUserNumber = this.splitNumber(userNumber);

    for (let i = 0; i < this.computerNumber.length; i++) {
      this.getScore(splitedUserNumber, i, scoreObject, "strike", "ball");
    }

    return scoreObject;
  }

  splitNumber(number) {
    return (number + "").split("").map((element) => parseInt(element, 10));
  }

  getScore(userNumberArray, computerNumberIndex, scoreObject, ...scoreName) {
    for (let j = 0; j < userNumberArray.length; j++) {
      if (
        this.computerNumber[computerNumberIndex] === userNumberArray[j] &&
        computerNumberIndex === j
      ) {
        scoreObject[scoreName[0]]++;
        continue;
      }
      if (this.computerNumber[computerNumberIndex] === userNumberArray[j]) {
        scoreObject[scoreName[1]]++;
      }
    }
  }

  getHint(scoreObject) {
    return scoreObject.ball > 0 && scoreObject.strike === 0
      ? `${scoreObject.ball}볼`
      : scoreObject.ball === 0 && scoreObject.strike > 0
      ? `${scoreObject.strike}스트라이크`
      : scoreObject.ball > 0 && scoreObject.strike > 0
      ? `${scoreObject.ball}볼 ${scoreObject.strike}스트라이크`
      : "낫싱";
  }

  play() {
    let userNumber;

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.setComputerNumber();

    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
      userNumber = parseInt(number, 10);
      const hint = this.getHint(userNumber);
      MissionUtils.Console.print(hint);
    });
  }
}

new App().play();
module.exports = App;

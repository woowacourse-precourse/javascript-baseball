const MissionUtils = require("@woowacourse/mission-utils");

class App {
  computerNumber;

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.setGame();
  }

  setGame() {
    this.setComputerNumber();
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

  getComputerNumber() {
    if (this.computerNumber) {
      return this.computerNumber;
    }
  }

  compareWithUserNumber() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
      if (number.length > 3 || number.length < 3)
        throw new RangeError("3자리의 숫자를 입력해주세요.");

      const userNumber = parseInt(number, 10);

      if (Number.isNaN(userNumber)) throw new TypeError("숫자를 입력해주세요");

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
    return (number + "") //
      .split("")
      .map((element) => parseInt(element, 10));
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
    const { ball, strike } = scoreObject;

    const ballAndStrike =
      scoreObject.ball > 0 && strike > 0
        ? `${ball}볼 ${strike}스트라이크`
        : "낫싱";

    const strikeOnly =
      ball === 0 && strike > 0 ? `${strike}스트라이크` : ballAndStrike;

    const ballOnly = ball > 0 && strike === 0 ? `${ball}볼` : strikeOnly;

    const hintTernaryExpression = ballOnly;

    return hintTernaryExpression;
  }

  afterGameEnded() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (answer) => {
        const parsedAnswer = parseInt(answer, 10);

        if (parsedAnswer === 1) {
          this.setGame();
          return;
        }

        if (parsedAnswer === 2) {
          MissionUtils.Console.close();
          return;
        }

        MissionUtils.Console.print("1 혹은 2만 입력하세요.");
        this.afterGameEnded();
      }
    );
  }
}

module.exports = App;

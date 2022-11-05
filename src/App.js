const MissionUtils = require("@woowacourse/mission-utils");
const calculateScore = require("./CalculateScore");

const scoreOutputMap = {
  ballCount: 0,
  strikeCount: 0,
  nothing() {
    return "낫싱";
  },
  threeStrike() {
    return "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료";
  },
  onlyBall() {
    return `${this.ballCount}볼`;
  },
  onlyStrike() {
    return `${this.strikeCount}스트라이크`;
  },
  ballWithStrike() {
    return `${this.ballCount}볼 ${this.strikeCount}스트라이크`;
  },
};

class App {
  createComputerNumberList() {
    const computerNumberList = [];
    let tempNumber;

    while (computerNumberList.length < 3) {
      tempNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumberList.includes(tempNumber)) {
        computerNumberList.push(tempNumber);
      }
    }
    return computerNumberList;
  }

  parseStringToNumberList(stringNumber) {
    return stringNumber.split("").map((number) => parseInt(number, 10));
  }

  readLine(question, callback) {
    MissionUtils.Console.readLine(question, callback);
  }

  judge(score) {
    if (score.isNothing) return "nothing";
    if (score.strikeCount === 3) return "threeStrike";
    if (score.strikeCount === 0) return "onlyBall";
    if (score.ballCount === 0) return "onlyStrike";
    return "ballWithStrike";
  }

  tryTest(computerNumberList) {
    const QUESTION = "숫자를 입력해주세요 : ";

    this.readLine(QUESTION, (answer) => {
      if (isNaN(answer)) throw new Error("only number");
      if (answer.length !== 3) throw new Error("only three number");
      const inputNumberList = this.parseStringToNumberList(answer);
      const score = calculateScore(computerNumberList, inputNumberList);
      scoreOutputMap.ballCount = score.ballCount;
      scoreOutputMap.strikeCount = score.strikeCount;
      MissionUtils.Console.print(scoreOutputMap[this.judge(score)]());
      if (scoreOutputMap.strikeCount === 3) {
        this.readLine(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
          (oneOrTwo) => {
            if (oneOrTwo === "1") this.gameStart();
            else if (oneOrTwo === "2") MissionUtils.Console.close();
            else throw new Error("onlye 1 or 2");
          },
        );
      } else {
        this.tryTest(computerNumberList);
      }
    });
  }

  gameStart() {
    const computerNumberList = this.createComputerNumberList();
    console.log(computerNumberList);
    this.tryTest(computerNumberList);
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    this.gameStart();
  }
}

module.exports = App;

const app = new App();
app.play();

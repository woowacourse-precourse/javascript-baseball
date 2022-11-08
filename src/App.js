const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {}

  play() {
    const computerNumber = this.settingComputerNumber();

    this.baseBallGameStart(computerNumber);
  }

  settingComputerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  baseBallGameStart(computerNumber) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      if (answer.length > 3) {
        throw new Error();
      }

      const countedNumber = this.countStrikeAndBall(answer, computerNumber);

      const result = this.printGameResult(countedNumber);

      if (result === "incorrect") {
        this.baseBallGameStart(computerNumber);
      } else {
        MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
        this.askingRestartOrNot();
      }
    });
  }

  countStrikeAndBall(userNumber, computerNumber) {
    let strikeCount = 0;
    let ballCount = 0;
    for (let i = 0; i < 3; i++) {
      if (this.isStirke(userNumber[i], computerNumber[i])) {
        strikeCount++;
      } else if (this.isBall(userNumber[i], computerNumber)) {
        ballCount++;
      }
    }

    return { strike: strikeCount, ball: ballCount };
  }

  isStirke(userNumber, computerNumber) {
    return Number(userNumber) === computerNumber;
  }

  isBall(userNumber, computerNumber) {
    return computerNumber.includes(Number(userNumber));
  }

  printGameResult(countedNumber) {
    const strike = countedNumber.strike;
    const ball = countedNumber.ball;

    if (strike === 0 && ball === 0) {
      MissionUtils.Console.print("낫싱");
      return "incorrect";
    } else if (strike === 3 && ball === 0) {
      MissionUtils.Console.print("3스트라이크");
      return "correct";
    } else if (strike === 0 && ball !== 0) {
      MissionUtils.Console.print(`${ball}볼`);
      return "incorrect";
    } else if (strike !== 0 && ball === 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
      return "incorrect";
    } else {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
      return "incorrect";
    }
  }

  askingRestartOrNot() {
    MissionUtils.Console.readLine("게임을 시작하려면 1, 종료하려면 2를 입력하세요.\n", (answer) => {
      if (answer === "1") {
        this.play();
      } else if (answer === "2") {
        MissionUtils.Console.close();
      }
    });
  }
}

module.exports = App;

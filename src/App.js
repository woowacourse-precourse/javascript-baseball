const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.ANSWER;
  }

  play() {
    this.printMsg("숫자 야구 게임을 시작합니다.");
    this.ANSWER = this.setAnswer();
    this.askNumInput();
  }

  printMsg(message) {
    MissionUtils.Console.print(message);
  }

  setAnswer() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  askNumInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.isValidInput(input);
      this.getHint(input);
    });
  }

  isValidInput(input) {
    if (
      !this.isNumber(input) ||
      !this.isVaildLength(input) ||
      !this.isAllDiffNum(input)
    ) {
      this.toThrow();
    }
  }

  toThrow() {
    throw new Error("유효한 값이 아니므로 게임을 종료합니다.");
  }

  getHint(input) {
    var { ballCount, strikeCount } = this.isBallOrStrike(input);

    if (ballCount === 0 && strikeCount === 0) {
      this.printMsg("낫싱");
      this.askNumInput();
    } else if (strikeCount === 3) {
      this.printMsg("3스트라이크");
      this.askRematchOrExit();
    } else {
      this.printMsg(`${ballCount}볼 ${strikeCount}스트라이크`);
      this.askNumInput();
    }
  }

  isBallOrStrike(input) {
    var ballCount = 0;
    var strikeCount = 0;

    var answerSet = new Set(this.ANSWER);
    for (var idx in input) {
      if (this.ANSWER[idx] === +input[idx]) {
        strikeCount += 1;
        continue;
      }
      if (answerSet.has(+input[idx])) ballCount += 1;
    }
    return { ballCount, strikeCount };
  }

  askRematchOrExit() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (input) => {
        switch (input) {
          case "1":
            this.printMsg("재경기를 진행합니다.");
            this.play();
            break;
          case "2":
            this.printMsg("게임을 종료합니다.");
            MissionUtils.Console.close();
            break;
          default:
            this.printMsg("1 또는 2를 입력하지 않았습니다.");
            this.askRematchOrExit();
        }
      }
    );
  }

  isNumber(input) {
    const NUM_REG = /[1-9]/g;
    var remainNotNum = input.replace(NUM_REG, "");
    if (remainNotNum) return false;
    return true;
  }

  isVaildLength(input) {
    if (input.length !== 3) return false;
    return true;
  }

  isAllDiffNum(input) {
    const setInput = new Set(input.split(""));
    if (setInput.size !== 3) return false;
    return true;
  }
}

module.exports = App;

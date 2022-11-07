const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.ANSWER;
  }

  play() {
    this.greetingMsg();
    this.ANSWER = this.setAnswer();
    this.askNumInput();
  }

  printMsg(message) {
    MissionUtils.Console.print(message);
  }

  greetingMsg() {
    this.printMsg("숫자 야구 게임을 시작합니다.");
  }

  setAnswer() {
    const answer = [];
    while (answer.length < 3) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(randomNum)) {
        answer.push(randomNum);
      }
    }
    return answer;
  }

  askNumInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.isValidInput(input);
      this.getHint(input);
    });
  }

  isValidInput(input) {
    if (!this.isNumber(input)) {
      this.toThrow("숫자 입력만 가능합니다.");
    }
    if (!this.isVaildLength(input)) {
      this.toThrow("숫자 3개를 입력해주세요.");
    }
    if (!this.isAllDiffNum(input)) {
      this.toThrow("같은 숫자가 중복되었습니다. 다른 숫자 3개를 입력해주세요.");
    }
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

  toThrow(errorMsg) {
    throw new Error(errorMsg);
  }

  getHint(input) {
    var { ballCount, strikeCount } = this.countBallOrStrike(input);

    if (ballCount === 0 && strikeCount === 0) {
      this.isNothing();
    } else if (strikeCount === 3) {
      this.isThreeStrike();
    } else {
      ballCount
        ? strikeCount
          ? this.printMsg(`${ballCount}볼 ${strikeCount}스트라이크`)
          : this.printMsg(`${ballCount}볼`)
        : this.printMsg(`${strikeCount}스트라이크`);
      this.askNumInput();
    }
  }

  isNothing() {
    this.printMsg("낫싱");
    this.askNumInput();
  }

  isThreeStrike() {
    this.printMsg("3스트라이크");
    this.printMsg("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    this.ANSWER = [];
    this.askRematchOrExit();
  }

  countBallOrStrike(input) {
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
            this.printMsg("게임 종료");
            MissionUtils.Console.close();
            break;
          default:
            this.printMsg("1 또는 2를 입력하지 않았습니다.");
            this.askRematchOrExit();
        }
      }
    );
  }
}

const app = new App();
app.play();

module.exports = App;

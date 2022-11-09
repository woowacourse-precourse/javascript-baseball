const MissionUtils = require("@woowacourse/mission-utils");

const ANSWER_LENGTH = 3;

const MESSEGE = {
  GREETING: "숫자 야구 게임을 시작합니다.",
  INPUT_NUM: "숫자를 입력해주세요 : ",
  CONGRATS: "3개의 숫자를 모두 맞히셨습니다!",
  END_GAME: "게임 종료",
  ASK_REMATCH_OR_EXIT: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  REMATCH: "재경기를 진행합니다.",
};

const ERROR = {
  ONLY_NUMBER: "숫자 입력만 가능합니다.",
  THREE_LENGTHS: "숫자 3개를 입력해주세요.",
  SAME_NUMBERS: "같은 숫자가 중복되었습니다. 다른 숫자 3개를 입력해주세요.",
  NOT_ONE_OR_TWO: "1 또는 2를 입력해야합니다.",
};

const RESULT = {
  NOTHING: "낫싱",
  BALL: "볼",
  STRIKE: "스트라이크",
  THREE_STRIKES: "3스트라이크",
};

const OPTION = {
  REMATCH: "1",
  EXIT: "2",
};

class App {
  constructor() {
    this.ANSWER;
  }

  play() {
    this.greetingMsg().setAnswer().askNumInput();
  }

  setAnswer() {
    const answer = [];
    while (answer.length < ANSWER_LENGTH) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(randomNum)) {
        answer.push(randomNum);
      }
    }

    this.ANSWER = answer;
  }

  askNumInput() {
    MissionUtils.Console.readLine(MESSEGE.INPUT_NUM, (input) => {
      this.isValidInput(input);
      this.getHint(input);
    });
  }

  isValidInput(input) {
    if (!this.isNumber(input)) {
      this.toThrow(ERROR.ONLY_NUMBER);
    }
    if (!this.isVaildLength(input)) {
      this.toThrow(ERROR.THREE_LENGTHS);
    }
    if (!this.isAllDiffNum(input)) {
      this.toThrow(ERROR.SAME_NUMBERS);
    }
  }

  isNumber(input) {
    const NUM_REG = /[1-9]/g;
    var remainNotNum = input.replace(NUM_REG, "");
    if (remainNotNum) return false;
    return true;
  }

  isVaildLength(input) {
    if (input.length !== ANSWER_LENGTH) return false;
    return true;
  }

  isAllDiffNum(input) {
    const setInput = new Set(input.split(""));
    if (setInput.size !== ANSWER_LENGTH) return false;
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
          ? this.printMsg(
              `${ballCount}${RESULT.BALL} ${strikeCount}${RESULT.STRIKE}`
            )
          : this.printMsg(`${ballCount}${RESULT.BALL}`)
        : this.printMsg(`${strikeCount}${RESULT.STRIKE}`);
      this.askNumInput();
    }
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

  isNothing() {
    this.printMsg(RESULT.NOTHING);
    this.askNumInput();
  }

  isThreeStrike() {
    this.printMsg(RESULT.THREE_STRIKES);
    this.printMsg(`${MESSEGE.CONGRATS} ${MESSEGE.END_GAME}`);
    this.ANSWER = [];
    this.askRematchOrExit();
  }

  askRematchOrExit() {
    MissionUtils.Console.readLine(MESSEGE.ASK_REMATCH_OR_EXIT, (input) => {
      switch (input) {
        case OPTION.REMATCH:
          this.printMsg(MESSEGE.REMATCH);
          this.play();
          break;
        case OPTION.EXIT:
          this.printMsg(MESSEGE.END_GAME);
          MissionUtils.Console.close();
          break;
        default:
          this.toThrow(ERROR.NOT_ONE_OR_TWO);
      }
    });
  }

  printMsg(message) {
    MissionUtils.Console.print(message);
  }

  greetingMsg() {
    this.printMsg(MESSEGE.GREETING);
  }
}

const app = new App();
app.play();

module.exports = App;

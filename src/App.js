const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    // 3자리 숫자 모드
    this.NUMBER_LENGTH_MODE = 3;
    this.RESTART = "1";
    this.EXIT = "2";
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.startGame();
  }

  startGame() {
    this.answer = this.genAnswer();
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (tryNum) => {
      this.checktryNum(tryNum);
    });
  }

  checktryNum(tryNum) {
    this.checkValid(tryNum);
    const IS_ANSWER = this.checkAnswer(tryNum, this.answer);
    if (IS_ANSWER) {
      return;
    }
    const tryNumArr = tryNum.split("");
    tryNumArr.forEach((tryNumEle, tryNumEleIdx) =>
      this.comparetryNumAndAnswer(Number(tryNumEle), tryNumEleIdx, this.answer)
    );
  }

  checkValid(tryNum) {
    const IS_VALID_LENGTH = tryNum.length === this.NUMBER_LENGTH_MODE;
    const IS_TYPE_NUMBER = !Number.isNaN(tryNum);

    const tryNumtSet = new Set(tryNum);
    const IS_NO_DUPLICATE = tryNum.length === tryNumtSet.size;

    const IS_VALID = IS_VALID_LENGTH && IS_TYPE_NUMBER && IS_NO_DUPLICATE;

    if (!IS_VALID) {
      throw new Error("올바르지 않은 입력입니다");
    }
  }

  genAnswer() {
    const answer = [];
    while (answer.length < this.NUMBER_LENGTH_MODE) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    console.log(answer);
    return answer;
  }

  checkAnswer(tryNum, answer) {
    const IS_ANSWER = tryNum === answer.join("");
    if (IS_ANSWER) {
      MissionUtils.Console.print("3스트라이크");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.selectRestartOrExit();
      return IS_ANSWER;
    }
    return IS_ANSWER;
  }

  selectRestartOrExit() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ",
      (input) => {
        if (this.RESTART === input) {
          this.startGame();
        } else if (this.EXIT === input) {
          MissionUtils.Console.close();
        } else {
          throw new Error("올바르지 않은 입력입니다");
        }
      }
    );
  }

  comparetryNumAndAnswer(tryNumEle, tryNumEleIdx, answer) {
    const IS_INCLUDE = answer.includes(tryNumEle);
    if (IS_INCLUDE) {
      const answerIdx = answer.indexOf(tryNumEle);
      const IS_SAME_POSITION = answerIdx === tryNumEleIdx;
      if (IS_SAME_POSITION) {
        this.strike += 1;
      }
      if (!IS_SAME_POSITION) {
        this.ball += 1;
      }
    }
  }
}

module.exports = App;

const app = new App();
app.play();

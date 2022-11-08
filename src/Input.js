const MissionUtils = require("@woowacourse/mission-utils");
const Parse = require("./Parse");
const BallCount = require("../src/BallCount");
const Question = require("../src/Question");
const { Output, END_MESSAGE } = require("../src/Output");

const ASK_ANSWER = "숫자를 입력해주세요 : ";
const ASK_REPLAY = "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.";

const CONTINUE_GAME = "continueGame";
const END_GAME = "endGame";

const requestMap = {
  1: true,
  2: false,
};

const nextStep = {
  endGame(_) {
    Output.printToUser(END_MESSAGE);

    Input.getReplayRequest();
  },
  continueGame(question) {
    Input.getUserAnswer(question);
  },
};

class Input {
  static getUserAnswer(question) {
    MissionUtils.Console.readLine(ASK_ANSWER, (userAnswer) => {
      const answer = Parse.numberToArray(userAnswer);

      this.checkWrongAnswer(answer);

      const ballCount = new BallCount(question, answer);
      const ballCountMessage = ballCount.toString();
      const isThreeStrikes = ballCount.isThreeStrikes();
      Output.printToUser(ballCountMessage);

      nextStep[isThreeStrikes ? END_GAME : CONTINUE_GAME](question);
    });
  }

  static getReplayRequest() {
    MissionUtils.Console.print(ASK_REPLAY);
    MissionUtils.Console.readLine("", (userRequest) => {
      this.checkWrongRequest(userRequest);

      const userWantsReplay = requestMap[userRequest];
      userWantsReplay ? this.getUserAnswer(Question.create()) : MissionUtils.Console.close();
    });
  }

  static checkWrongAnswer(answer) {
    if (answer.length !== 3) throw new Error("세 자리 수를 입력해야 합니다.");
    if (answer.filter((value) => isNaN(value)).length > 0) throw new Error("숫자가 아닙니다.");
  }

  static checkWrongRequest(userRequest) {
    if (userRequest !== 1 && userRequest !== 2) throw new Error("올바르지 않은 입력입니다.");
  }
}

module.exports = Input;

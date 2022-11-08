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
      const userWantsReplay = requestMap[userRequest];
      userWantsReplay ? Input.getUserAnswer(Question.create()) : MissionUtils.Console.close();
    });
  }
}

module.exports = Input;

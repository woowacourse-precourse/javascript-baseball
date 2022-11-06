const MissionUtils = require("@woowacourse/mission-utils");
const Parse = require("./Parse");

const ASK_ANSWER = "숫자를 입력해주세요 : ";
const ASK_REPLAY = "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.";

const requestMap = {
  1: true,
  2: false,
};

class Input {
  static getUserAnswer() {
    let answer = "";
    MissionUtils.Console.readLine(ASK_ANSWER, (userAnswer) => {
      answer = userAnswer;
    });
    MissionUtils.Console.close();

    return Parse.numberToArray(answer);
  }

  static getReplayRequest() {
    let replay = false;
    MissionUtils.Console.print(ASK_REPLAY);
    MissionUtils.Console.readLine("", (request) => {
      replay = request;
    });
    MissionUtils.Console.close();

    return requestMap[replay];
  }
}

module.exports = Input;

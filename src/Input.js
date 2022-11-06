const MissionUtils = require("@woowacourse/mission-utils");

const ASK_ANSWER = "숫자를 입력해주세요 : ";

class Input {
  static getUserAnswer() {
    let answer = "";
    MissionUtils.Console.readLine(ASK_ANSWER, (userAnswer) => {
      answer = userAnswer;
    });
    MissionUtils.Console.close();

    return Parse.numberToArray(answer);
  }

  static getReplayRequest() {}
}

module.exports = Input;

const MissionUtils = require("@woowacourse/mission-utils");
const System = require("./System");

class User {
  constructor() {
    this.guessNumber;
  }

  set setGuessNumber(guessNumber) {
    this.guessNumber = guessNumber;
  }

  get getGuessNumber() {
    return this.guessNumber;
  }

  responseSendNumber(object) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) =>
      object.isStrike(answer)
    );
  }
}

module.exports = User;

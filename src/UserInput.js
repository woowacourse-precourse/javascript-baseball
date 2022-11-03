const MissionUtils = require("@woowacourse/mission-utils");

class UserInput {
  userInputNum() {

    MissionUtils.Console.readLine('숫자를 입력해주세요.', (answer) => {
      console.log(`숫자를 입력해주세요: ${answer}`);
    });

  }
}

const userInput = new UserInput();
userInput.userInputNum();

module.exports = UserInput;

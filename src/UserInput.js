const MissionUtils = require("@woowacourse/mission-utils");

class UserInput {
  userInputNum() {

    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      console.log(answer);
    });

    MissionUtils.Console.print('adf \nadsf');


  }
}

const userInput = new UserInput();
userInput.userInputNum();

module.exports = UserInput;

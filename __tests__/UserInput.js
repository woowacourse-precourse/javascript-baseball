const MissionUtils = require("@woowacourse/mission-utils");
const checkNumber = require("./CheckNumber");

function UserInput() {
  let uesrInput = "";
  MissionUtils.Console.readLine('서로 다른 숫자 3자리를 입력하세요.', (input) => {
    console.log(input);
    if (!checkNumber(input)) {
      console.log("잘못된 숫자를 입력했습니다. 게임이 종료됩니다.");
      throw "잘못된 숫자를 입력했습니다. 게임이 종료됩니다.";
      MissionUtils.Console.close();
    }
    uesrInput = input;
  });
  return uesrInput;
}

module.exports = UserInput;
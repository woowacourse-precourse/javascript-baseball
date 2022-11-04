const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const USER = new User();
    GameStart(USER);
    if (USER.GetNum() !== 3) {
      throw new '3자리 숫자가 아닙니다.\n애플리케이션을 종료하겠습니다.';
    }
  };
};

class User {
  constructor() {
    this.Number;
  };
  GetNum() {
    return this.Number;
  };
};
const ComputerNumber = () => {
  const NUMBER = String(MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3));
  return NUMBER.split(",");
};

const GameStart = (USER) => {
  let ANSWER = 1;
  MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  let COMPUTER_NUMBER = ComputerNumber();
  let USER_NUMBER;
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (number) => {
    USER.Number = String(number).split("");
    USER_NUMBER = USER.Number;
  });
};

const NumberCompare = (computer, user) => {

}
module.exports = App;
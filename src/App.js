const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    GameStart();
    ComputerNumber();
  };
};

class User {
  constructor() {
    this.UserNumber;
  };
  GetNum() {
    return this.UserNumber;
  };
};
const ComputerNumber = () => {
  const NUMBER = String(MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3));
  return NUMBER.split(",");
};

const GameStart = () => {
  const USER = new User();
  MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
    USER.UserNumber = String(answer).split("");
  });
};
module.exports = App;
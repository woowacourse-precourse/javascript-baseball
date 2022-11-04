const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const USER = new User();
    GameStart(USER);
  };
};

class User {
  constructor() {
    this.Number;
    this.Select_Number;
  };
  GetNumber() {
    return this.Number;
  };
  GetSelect() {
    return this.Select_Number;
  };
};
const ComputerNumber = () => {
  const NUMBER = [];
  while(NUMBER.length !==3){
    NUMBER.push(String(MissionUtils.Random.pickNumberInRange(1, 9)));
  }
  return NUMBER;
};

const GameStart = (USER) => {
  MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  let COMPUTER_NUMBER = ComputerNumber();
  let USER_NUMBER;
  let USER_SELECT = "1";
  while (USER_SELECT !== "2") {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (number) => {
      USER.Number = String(number).split("");
      USER_NUMBER = USER.Number;
    });
    if (USER_NUMBER.length !== 3) {
      throw '3자리 숫자가 아닙니다.\n애플리케이션을 종료하겠습니다.';
    }
  }
};

const NumberCompare = (computer, user) => {
  let BALL_SCORE = 0;
  let STRIKE_SCORE = 0;
  for (let index = 0; index < computer.length; index++) {
    if (computer[index] === user[index]) {
      STRIKE_SCORE += 1;
    }
    if (computer.indexOf(user[index]) >= 0) {
      BALL_SCORE += 1;
    }
  }
  if (STRIKE_SCORE === 0 && BALL_SCORE === 0) {
    MissionUtils.Console.print('낫싱');
    return false;
  };
  if (STRIKE_SCORE === 3) {
    MissionUtils.Console.print(`${STRIKE_SCORE}스트라이크`);
    return true;
  };
  if (STRIKE_SCORE === 0 && BALL_SCORE > 0) {
    MissionUtils.Console.print(`${BALL_SCORE}볼`);
    return false;
  };
  if (STRIKE_SCORE > 0 && BALL_SCORE - STRIKE_SCORE == 0) {
    MissionUtils.Console.print(`${STRIKE_SCORE}스트라이크`);
    return false
  };
  MissionUtils.Console.print(`${BALL_SCORE - STRIKE_SCORE}볼 ${STRIKE_SCORE}스트라이크`);
  return false;
}
module.exports = App;
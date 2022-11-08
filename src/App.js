const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    const USER = new User();
    gameStart(USER);
  };
};

class User {
  constructor() {
    this.number;
    this.select;
  };
  getNumber() {
    return this.number;
  };
  getSelect() {
    return this.select;
  };
};
const gameStart = (USER) => {
  startMessage();
  selectGame(USER);
};

const startMessage = () => {
  MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
};

const selectGame = (USER) => {
  let COMPUTER_NUMBER = computerNumber();
  let USER_NUMBER;
  let USER_SELECT = "1";
  while (USER_SELECT !== "2") {
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (number) => {
          USER.number = String(number).split("");
          USER_NUMBER = USER.getNumber();
      });
      throwHandling(USER_NUMBER);
      if (numberCompare(COMPUTER_NUMBER, USER_NUMBER)) {
          MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
          MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (select) => {
              USER.select = select;
              USER_SELECT = USER.getSelect();
          });
          COMPUTER_NUMBER = computerNumber();
      };
  };
};

const computerNumber = () => {
  const NUMBER = [];
  while (NUMBER.length !== 3) {
      NUMBER.push(String(MissionUtils.Random.pickNumberInRange(1, 9)));
  };
  return NUMBER;
};

const throwHandling = (user) => {
  const userSet = new Set(user);
  if (user.length !== 3) {
    throw MissionUtils.Console.close();
  };
  if (userSet.size !== user.length) {
    throw MissionUtils.Console.close();
  };
  if (user.indexOf("0") >= 0) {
    throw MissionUtils.Console.close();
  };
};

const numberCompare = (computer, user) => {
  let BALL_SCORE = 0;
  let STRIKE_SCORE = 0;
  for (let index = 0; index < computer.length; index++) {
      if (computer[index] === user[index]) {
          STRIKE_SCORE += 1;
      };
      if (computer.indexOf(user[index]) >= 0) {
          BALL_SCORE += 1;
      };
  };
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
};

module.exports = App;
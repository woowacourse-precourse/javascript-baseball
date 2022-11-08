const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const RANDOM_NUMBER = createRandomNumber();
    start();
    getNumber(RANDOM_NUMBER);
  }
}

const createRandomNumber = () => {
  const numbers = [];
  while (numbers.length < 3) {
    const newNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!numbers.includes(newNumber)) {
      numbers.push(newNumber);
    }
  }
  return numbers;
};

const start = () => {
  MissionUtils.Console.print("숫자 야구를 게임을 시작합니다.");
};

const getNumber = (RANDOM_NUMBER) => {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (USER_NUMBER) => {
    checkNumberError(USER_NUMBER);
    const RESULT_COUNT = computeBallStrike(RANDOM_NUMBER, USER_NUMBER);
    MissionUtils.Console.print(computeResult(RESULT_COUNT));
    if (RESULT_COUNT[1] === 3) {
      gameover();
    } else {
      getNumber(RANDOM_NUMBER);
    }
  });
};

const checkNumberError = (number) => {
  if (number.length !== 3) throw new Error("3자리 수를 입력해주세요.");
  let checkNumber = number.split("").map(Number);
  const set = new Set(checkNumber);
  const newArr = [...set];
  if (newArr.length !== 3)
    throw new Error("중복되지 않는 수들을 입력해주세요.");
};

const computeBallStrike = (RANDOM_NUMBER, USER_NUMBER) => {
  let ball = 0;
  let strike = 0;

  const USER_NUMBERS = USER_NUMBER.split("").map(Number);

  for (let i = 0; i < 3; i++) {
    if (
      RANDOM_NUMBER.includes(USER_NUMBERS[i]) &&
      RANDOM_NUMBER.indexOf(USER_NUMBERS[i]) !== i
    ) {
      ball++;
    }
    if (
      RANDOM_NUMBER.includes(USER_NUMBERS[i]) &&
      RANDOM_NUMBER.indexOf(USER_NUMBERS[i]) == i
    ) {
      strike++;
    }
  }

  const RESULT_COUNT = [ball, strike];
  return RESULT_COUNT;
};

const computeResult = (RESULT_COUNT) => {
  let str = "";
  if (RESULT_COUNT[1] === 3) {
    str = "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료";
    return str;
  }
  if (RESULT_COUNT[0] !== 0 && RESULT_COUNT[1] === 0) {
    str += `${RESULT_COUNT[0]}볼`;
  }
  if (RESULT_COUNT[1] !== 0 && RESULT_COUNT[0] === 0) {
    str += `${RESULT_COUNT[1]}스트라이크`;
  }
  if (RESULT_COUNT[0] !== 0 && RESULT_COUNT[1] !== 0) {
    str += `${RESULT_COUNT[0]}볼 ${RESULT_COUNT[1]}스트라이크`;
  }
  if (RESULT_COUNT[0] === 0 && RESULT_COUNT[1] === 0) {
    str = "낫싱";
  }
  return str;
};

const gameover = () => {
  MissionUtils.Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    (number) => {
      checkGameoverNumber(number);
    }
  );
};

const checkGameoverNumber = (number) => {
  let num = parseInt(number);
  if (num !== 1 && num !== 2) {
    throw new Error("1과 2중에서 입력해주세요.");
  }
  if (num == 1) {
    let newNumber = createRandomNumber();
    getNumber(newNumber);
  }
  if (num == 2) {
    MissionUtils.Console.close();
  }
};

module.exports = App;

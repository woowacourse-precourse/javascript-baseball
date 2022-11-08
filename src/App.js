const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    let randombaseball = createRandomNumber();
    start();
    getNumber(randombaseball);
  }
}
module.exports = App;

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

const getNumber = (randombaseball) => {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
    checkNumberError(number);
    let result = computeBallStrike(randombaseball, number);
    computeResult(result);
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

const computeBallStrike = (randombaseball, number) => {
  let ball = 0;
  let strike = 0;

  let userNumber = number.split('').map(Number);

  for (let i = 0; i < 3; i++) {
    if (randombaseball.includes(userNumber[i])) {
      if (randombaseball.indexOf(userNumber[i]) == i) {
        strike++;
        continue;
      }
      ball++;
    }
  }

  const result = [ball, strike]
  return result;
};

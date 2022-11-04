const MissionUtils = require("@woowacourse/mission-utils");

const printer = (message) => {
  MissionUtils.Console.print(message);
};

const refNumbersGetter = () => {
  const refNumbers = [];

  while (refNumbers.length < 3) {
    const targetNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!refNumbers.includes(targetNumber)) {
      refNumbers.push(targetNumber);
    }
  }

  return refNumbers;
};

const userNumbersGetter = () => {
  return new Promise((resolve, reject) => {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (asnwer) => {
      resolve(asnwer);
    });
  });
};

const stringToArrConverter = (numbersString) => {
  numbersStringArray = numbersString.split("");
  numbersNumberArray = numbersStringArray.map((number) => Number(number));
  return numbersNumberArray;
};

class App {
  async play() {
    printer("숫자 야구 게임을 시작합니다.");
    const refNumbersArr = refNumbersGetter();
    const usersInput = await userNumbersGetter();
    const userNumbersArr = stringToArrConverter(usersInput);
    printer(userNumbersArr);
  }
}

const app = new App();
app.play();

module.exports = { App, printer, stringToArrConverter };

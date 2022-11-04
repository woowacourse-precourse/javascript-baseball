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

const discriminator = (userNumbers, refNumbers) => {
  let discrimination = "";

  let strikeCount = 0;
  let ballCount = 0;

  for (let i = 0; i < 3; i++) {
    if (refNumbers.indexOf(userNumbers[i]) === i) {
      strikeCount = strikeCount + 1;
    } else if (refNumbers.includes(userNumbers[i])) {
      ballCount = ballCount + 1;
    }
  }

  discrimination =
    ballCount && strikeCount
      ? `${ballCount}볼 ${strikeCount}스트라이크`
      : (ballCount ? `${ballCount}볼` : "") +
          (strikeCount ? `${strikeCount}스트라이크` : "") || "낫싱";

  return discrimination;
};

const reStartSelector = () => {
  return new Promise((resolve, reject) => {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (asnwer) => {
        resolve(Number(asnwer));
      }
    );
  });
};

class App {
  async play() {
    printer("숫자 야구 게임을 시작합니다.");

    let restart = 1;
    while (restart === 1) {
      let discrimination = "";
      const refNumbersArr = refNumbersGetter();

      while (discrimination !== "3스트라이크") {
        const usersInput = await userNumbersGetter();
        const userNumbersArr = stringToArrConverter(usersInput);
        discrimination = discriminator(userNumbersArr, refNumbersArr);
        printer(refNumbersArr);
        printer(userNumbersArr);
        printer(discrimination);
      }

      restart = await reStartSelector();
      printer(restart);
    }

    MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = {
  App,
  printer,
  refNumbersGetter,
  stringToArrConverter,
  discriminator,
};

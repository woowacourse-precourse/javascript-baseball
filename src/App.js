const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const computerNumber = makeComputerNumber();
    console.log("숫자 야구 게임을 시작합니다.");

    for (let playCount = 0; playCount < 3; playCount++) {
      const userInput = getUserInput();
      const STRIKE_BALL_RECORD = calculateInputNumber(
        computerNumber,
        userInput
      );
      const isStrike = printBallStrike(STRIKE_BALL_RECORD);
    }
  }
}

const makeComputerNumber = () => {
  const computerNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  return computerNumber;
};

const getUserInput = () => {
  let inputArray = [];

  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (inputNumber) => {
    if (isNaN(inputNumber) || inputNumber.length !== 3) {
      throw new Error(
        "Input values should be given in three natural numbers under 10."
      );
    }

    inputArray = inputNumber.split("");
    const set = new Set(inputArray);

    if (inputArray.length !== set.size) {
      throw new Error("Duplication is not allowed.");
    }
  });
  return inputArray;
};

const calculateInputNumber = (computerNumber, userNumber) => {
  let strikeBallRecord = [0, 0];

  for (index = 0; index < 3; index++) {
    if (computerNumber[index] === userNumber[index]) {
      strikeBallRecord[0]++;
    } else if (computerNumber.includes(userNumber[index])) {
      strikeBallRecord[1]++;
    }
  }
  return strikeBallRecord;
};

const printBallStrike = (strikeBallRecord) => {
  if (strikeBallRecord[0] === 3) {
    console.log(`${strikeBallRecord[0]}스트라이크`);
    return true;
  }

  if (strikeBallRecord[0] + strikeBallRecord[1] === 0) {
    console.log("낫싱");
  } else if (strikeBallRecord[0] > 0 && strikeBallRecord[0] > 0) {
    console.log(`${strikeBallRecord[1]}볼 ${strikeBallRecord[0]}스트라이크`);
  } else if (strikeBallRecord[0] > 0 && strikeBallRecord[0] === 0) {
    console.log(`${strikeBallRecord[0]}스트라이크`);
  } else if (strikeBallRecord[0] === 0 && strikeBallRecord[1] > 0) {
    console.log(`${strikeBallRecord[1]}볼`);
  }

  return false;
};

module.exports = App;

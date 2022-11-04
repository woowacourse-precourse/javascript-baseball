const MissionUtils = require("@woowacourse/mission-utils");
// const Validation = require("./Validation");

const printStartMessage = () => {
  console.log("숫자 야구 게임을 시작합니다.");
};

const getRandomNumber = () => {
  let randomNumbers = [];
  while (randomNumbers.length < 3) {
    const num = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!randomNumbers.includes(num)) randomNumbers.push(num);
  }

  return randomNumbers;
};

const getUserPickNumber = () => {
  const tempValue = MissionUtils.Console.readLine(
    "숫자를 입력해주세요",
    (answer) => {
      MissionUtils.Console.print(`숫자를 입력해주세요 : ${answer}`);
      MissionUtils.Console.close();
    }
  );

  // Validation.validateUserPickNumbers(userPick);

  return tempValue;
};
getUserPickNumber();

// module.exports = { getRandomNumber, getUserPickNumber };

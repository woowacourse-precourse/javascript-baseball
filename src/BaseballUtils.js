const MissionUtils = require("@woowacourse/mission-utils");

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

module.exports = getRandomNumber;

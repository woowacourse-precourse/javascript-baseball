const MissionUtils = require("@woowacourse/mission-utils");

const pickComputerNum = () => {
  const computerNums = [];
  while (computerNums.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNums.includes(number)) {
      computerNums.push(number);
    }
  }
  return computerNums;
};

const pickNewOrEnd = (pickRestartOrEnd) => {
  MissionUtils.Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    (number) => {
      MissionUtils.Console.print(number);
      pickRestartOrEnd(number);
    }
  );
};

exports.pickComputerNum = pickComputerNum;
exports.pickNewOrEnd = pickNewOrEnd;

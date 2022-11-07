const MissionUtils = require("@woowacourse/mission-utils");
const isStrike = require("../src/isStrike");
const isBall = require("../src/isBall");
const isNothing = require("../src/isNothing");

const compareNumber = (initNumber) => {
  const initPrintNumber = initNumber.join("");
  console.log("시작 값", initPrintNumber);
  MissionUtils.Console.readLine("번호를 입력하세요", (userPrintNumber) => {
    const userNumber = userPrintNumber.split("").map((number) => +number);
    const strikeScore = isStrike(initNumber, userNumber);
    const ballScore = isBall(initNumber, userNumber);
    const checkNothing = isNothing(initNumber, userNumber);
    console.log("유저 넘버", userNumber);
    console.log("스트라이크", strikeScore);
    console.log("볼", ballScore);
    console.log("낫싱", checkNothing);
    if (checkNothing === "낫싱") {
      MissionUtils.Console.print(`낫싱`);
      compareNumber(initNumber);
    } else if (strikeScore === 3) {
      MissionUtils.Console.print(`${strikeScore}스트라이크`);
      MissionUtils.Console.print(
        `${strikeScore}개의 숫자를 모두 맞히셨습니다! 게임종료`
      );
    } else {
      MissionUtils.Console.print(`${ballScore}볼 ${strikeScore}스트라이크`);
      compareNumber(initNumber);
    }
  });
};

const initNumber = [1, 2, 3];
compareNumber(initNumber);
// module.exports = compareNumber;

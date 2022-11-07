const MissionUtils = require("@woowacourse/mission-utils");
const isStrike = require("../src/isStrike");
const isBall = require("../src/isBall");
const isNothing = require("../src/isNothing");
const isContinue = require("../src/isContinue");

const compareNumber = (initNumber) => {
  const initPrintNumber = initNumber.join("");
  console.log("시작 값", initPrintNumber);
  MissionUtils.Console.readLine("번호를 입력하세요", (userPrintNumber) => {
    const userNumber = userPrintNumber.split("").map((number) => +number);
    const strikeScore = isStrike(initNumber, userNumber);
    const ballScore = isBall(initNumber, userNumber);
    const checkNothing = isNothing(initNumber, userNumber);
    let saveString = `${ballScore} ${strikeScore}`;
    let printString = saveString.replace("null", "");
    // console.log("유저 넘버", userNumber);
    // console.log("스트라이크", strikeScore);
    // console.log("볼", ballScore);
    // console.log("낫싱", checkNothing);
    if (checkNothing === "낫싱") {
      MissionUtils.Console.print(`낫싱`);
      compareNumber(initNumber);
    } else if (
      ballScore === null &&
      checkNothing == false &&
      strikeScore === "3스트라이크"
    ) {
      MissionUtils.Console.print(`3스트라이크`);
      MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다!`);
      isContinue();
    } else if (strikeScore !== null && ballScore !== null) {
      MissionUtils.Console.print(saveString);
      compareNumber(initNumber);
    } else if (strikeScore !== null && ballScore === null) {
      MissionUtils.Console.print(strikeScore);
      compareNumber(initNumber);
    } else if (strikeScore === null && ballScore !== null) {
      MissionUtils.Console.print(ballScore);
      compareNumber(initNumber);
    }
  });
};

// compareNumber([1, 2, 3]);

module.exports = compareNumber;

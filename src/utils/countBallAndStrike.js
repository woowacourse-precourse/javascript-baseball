const MissionUtils = require("@woowacourse/mission-utils");

const countBallAndStrike = (userInput, answerInput) => {
  const result = {
    strike: 0,
    ball: 0,
  };

  // 3자리 수가 맞는가? && 숫자가 맞는 값이 들어왔는가?
  if (
    userInput.length === 3 &&
    answerInput.length === 3 &&
    !isNaN(+userInput) &&
    !isNaN(+answerInput)
  ) {
    userInput = userInput.split("");
    answerInput = answerInput.split("");

    for (let userInputIndex = 0; userInputIndex < 3; userInputIndex++) {
      for (let answerInputIndex = 0; answerInputIndex < 3; answerInputIndex++) {
        // 맞는 자리수가 있을 때
        if (userInput[userInputIndex] === answerInput[answerInputIndex]) {
          // 같은 자리수면 스트라이크 ++
          if (userInputIndex === answerInputIndex) result.strike++;
          // 다른 자리수면 볼 ++
          else if (userInputIndex !== answerInputIndex) result.ball++;
        }
      }
    }

    return result;
  } else {
    MissionUtils.Console.print("잘못된 값이 들어왔습니다!");
    return false;
  }
};

module.exports = countBallAndStrike;

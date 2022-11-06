const { Console } = require("@woowacourse/mission-utils");

const printGameMessage = (strike, ball) => {
  let resultMessage = ""; // 출력될 최종 메시지

  const message = {
    strikePrint: ["", "1스트라이크", "2스트라이크", "3스트라이크"],
    ballPrint: ["", "1볼", "2볼", "3볼"],
  };

  if (strike === 0 && ball === 0) {
    resultMessage = "낫싱";
  } else {
    resultMessage =
      `${message.ballPrint[ball]} ${message.strikePrint[strike]}`.trim();
  }

  Console.print(resultMessage);

  return resultMessage;
};

module.exports = printGameMessage;

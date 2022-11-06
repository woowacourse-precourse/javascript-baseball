const { Console } = require("@woowacourse/mission-utils");
const { BALL_COUNT } = require("../constants/constants");

const printGameMessage = (strike, ball) => {
  let resultMessage = ""; // 출력될 최종 메시지

  const message = {
    strikePrint: ["", BALL_COUNT.ONE_STRIKE, BALL_COUNT.TWO_STRIKE, BALL_COUNT.THREE_STRIKE ],
    ballPrint: ["", BALL_COUNT.ONE_BALL, BALL_COUNT.TWO_BALL, BALL_COUNT.THREE_BALL ]
  };

  if (strike === 0 && ball === 0) {
    resultMessage = BALL_COUNT.NOTHING;
  } else {
    resultMessage =
      `${message.ballPrint[ball]} ${message.strikePrint[strike]}`.trim();
  }

  Console.print(resultMessage);

  return resultMessage;
};

module.exports = printGameMessage;

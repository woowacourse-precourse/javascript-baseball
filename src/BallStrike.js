const { Console } = require("@woowacourse/mission-utils");
const { COUNT } = require("./constants");

class BallStrike {
  _count;

  set count({ playerNumbers, answerNumbers }) {
    const ballStirkeCount = playerNumbers.reduce(
      (ballStrikeCount, playerNumber, playerNumberIndex) => {
        const answerNumberIndex = answerNumbers.indexOf(playerNumber);
        if (answerNumberIndex !== -1) {
          if (answerNumberIndex === playerNumberIndex) {
            ballStrikeCount["strike"]
              ? ballStrikeCount["strike"]++
              : (ballStrikeCount["strike"] = 1);
          } else {
            ballStrikeCount["ball"]
              ? ballStrikeCount["ball"]++
              : (ballStrikeCount["ball"] = 1);
          }
        }
        return ballStrikeCount;
      },
      {}
    );
    this._count = ballStirkeCount;
  }

  printResultSentence() {
    const { ball, strike } = this._count;
    const ballSentence = ball ? COUNT.BALL(ball) : "";
    const strikeSentence = strike ? COUNT.STRIKE(strike) : "";
    if (ball && !strike) {
      Console.print(ballSentence);
      return;
    }
    if (strike && !ball) {
      Console.print(strikeSentence);
      return;
    }
    Console.print(`${ballSentence} ${strikeSentence}`);
  }
}

const ballStrike = new BallStrike();
exports.ballStrike = ballStrike;

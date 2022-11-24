const {HINT} = require("./constant");
class Compare {
  constructor() {
  }
  printHint(computer, user) {
    let strike = 0;
    let ball = 0;
    let result = "";
    computer.forEach((element, index) => {
      if (element === +user[index]) {
        strike += 1;
      }
      if (element !== +user[index] && computer.includes(+user[index])) {
        ball += 1;
      }
    });
    if (ball > 0) {
      result += HINT.ball(ball);
    };
    if (strike > 0) {
      result += HINT.strike(strike);
    };
    if (ball === 0 && strike === 0) {
      result = HINT.NOTHING;
    };
    if (strike === 3) {
      result = HINT.threeStrike(strike)
    };
    return result;
  }
}
module.exports = Compare;

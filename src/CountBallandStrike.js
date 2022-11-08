const printGameResult = require("./PrintResultBaseballGame");

function checkBallAndStrike(computerInputNumbers, userInputNumbers) {
  let ball = 0;
  let strike = 0;

  for (let i = 0; i < 3; i++) {
    const pitching = computerInputNumbers.indexOf(userInputNumbers[i]);

    if (pitching == i) {
      strike += 1;
    } else if (pitching !== -1) {
      ball += 1;
    }
  }

  return printGameResult(ball, strike);
}

module.exports = checkBallAndStrike;

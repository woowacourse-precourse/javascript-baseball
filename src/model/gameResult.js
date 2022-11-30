class getGameResult {
  gameCounter(userInputNum, COMPUTER_NUM) {
    let ball = 0;
    let strike = 0;
    userInputNum.forEach((curValue, index) => {
      if (curValue === COMPUTER_NUM[index]) strike += 1;
      else if (COMPUTER_NUM.includes(curValue)) ball += 1;
    });

    return {
      ball: ball,
      strike: strike,
    };
  }
}

const GAME_RESULT = new getGameResult();
module.exports = GAME_RESULT;

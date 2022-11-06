const { Console } = require('@woowacourse/mission-utils');

class getGameResult {
  constructor() {
    this.strikeNum = 0;
  }

  BallCounter(userInputNum, COMPUTER_NUM) {
    let ball = 0;
    userInputNum.forEach((curValue) => {
      if (COMPUTER_NUM.includes(curValue)) ball += 1;
    });

    return ball;
  }

  StrikeCounter(userInputNum, COMPUTER_NUM) {
    let strike = 0;
    userInputNum.forEach((curValue, index) => {
      if (curValue === COMPUTER_NUM[index]) strike += 1;
    });

    return strike;
  }

  getGameHint(userInputNum, COMPUTER_NUM) {
    const [BALL, STRIKE] = [
      this.BallCounter(userInputNum, COMPUTER_NUM),
      this.StrikeCounter(userInputNum, COMPUTER_NUM),
    ];

    this.strikeNum = STRIKE;

    if (BALL === 0 && STRIKE === 0) Console.print('낫싱');
    else if (BALL !== 0 && STRIKE === 0) Console.print(`${BALL}볼`);
    else if (BALL === 0 && STRIKE !== 0) Console.print(`${STRIKE}스트라이크`);
    else if (BALL !== 0 && STRIKE <= 2)
      Console.print(`${BALL}볼 ${STRIKE}스트라이크`);
    else if (STRIKE === 3) {
      Console.print('3스트라이크');
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    }
    return;
  }
}

const GAME_RESULT = new getGameResult();
module.exports = GAME_RESULT;

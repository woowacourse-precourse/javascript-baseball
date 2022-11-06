const { Console, Random } = require("@woowacourse/mission-utils");
import { isDuplicated } from "./utils";

class BaseBallGame{
  constructor() {
    this.gameAnswer = [];
  }
  
  resetGameAnswer() {
    const answer = [];

    while (answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) answer.push(number);
    }

    this.gameAnswer = answer;
  }
  
  validation(answer) {
    if (answer.some(v => isNaN(v))) {
      throw new Error('숫자만 입력 가능합니다.');
    }
    if (answer.length !== 3) {
      throw new Error('입력한 숫자의 갯수가 3개가 아닙니다.');
    }
    if (answer.some(v => v > 9) || answer.some(v => v < 1)) {
      throw new Error('1부터 9까지의 숫자만 입력 가능합니다.');
    }
    if (isDuplicated(answer)) {
      throw new Error('입력 숫자가 중복되었습니다.');
    }

    return true;
  }

  checkUserAnswer(gameAnswer, userAnswer) {
    const res = {
      victory: false,
      count: { 스트라이크: 0, 볼: 0, 낫싱: 0}
    };
  
    gameAnswer.forEach((answer, gamePosition) => {
      const userPosition = userAnswer.indexOf(answer);

      if (userPosition == -1) res.count.낫싱++;
      if (gamePosition == userPosition) res.count.스트라이크++;
      if (userPosition > -1 && gamePosition !== userPosition) res.count.볼++;
    });

    if (res.count.스트라이크 === 3) res.victory = true;

    return res;
  }

  printResult(count) {
    const {
      스트라이크,
      볼,
      낫싱
    } = count;

    if (낫싱 === 3) {
      Console.print('낫싱');
      return;
    }
    if (볼 && 스트라이크) {
      Console.print(`${볼}볼 ${스트라이크}스트라이크`);
      return;
    }
    if (볼) {
      Console.print(`${볼}볼`);
      return;
    }
    if (스트라이크) {
      Console.print(`${스트라이크}스트라이크`);
      return;
    }
  }
}

export default BaseBallGame;


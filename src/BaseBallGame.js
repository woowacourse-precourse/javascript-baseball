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
}

export default BaseBallGame;


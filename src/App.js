const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
      MissionUtils.Console.readLine(
        '숫자를 입력해주세요 : ', 
        this.choiceAnswer
      );
        
  }
  // build_answer
  buildAnswer() {
    let answer;
    do {
      answer = MissionUtils.Random.pickUniqueNumbersInRange(0, 9, 3);
      // 첫 숫자가 0인경우 재생성
    } while (answer[0] === 0);
    this.answer = answer;
    return answer;
  }

  choiceAnswer(userNums) {
    // 숫자이어야함
    if (isNaN(userNums)) {
      throw new Error('userNums가 정수가 아님');
    }
    // 3자리어야함
    if (userNums.length != 3) {
      throw new Error('userNums가 세자리가 아님');
    }
    const userSelect = [...userNums].map(Number);

    // 중복없어야함
    const lenghtTest = [...new Set(userSelect)];
    if (lenghtTest.length < 3) {
      throw new Error('중복 숫자가 존재합니다.');
    }
    this.userSelect = userSelect;
    return userSelect;
  }

  countStrike() {
    let strike = 0;
    for (let i = 0; i < 3; i += 1) {
      if (this.answer[i] === this.userSelect[i]) {
        strike += 1;
      }
    }

    this.strike = strike;
    return strike;
  }

  countBall() {
    let ball = 0;
    for (let i = 0; i < 3; i += 1) {
      const index = this.userSelect.indexOf(this.answer[i]);
      if (index !== -1 && index !== i) {
        ball += 1;
      }
    }
    this.ball = ball;
    return ball;
  }

  printHint() {
    const message = [];
    if (this.ball >= 1) {
      message.push(`${this.ball}볼`);
    }
    if (this.strike >= 1) {
      message.push(`${this.strike}스트라이크`);
    }
    if (message.length === 0) {
      message.push('낫싱');
    }

    MissionUtils.Console.print(message.join(' '));
  }
}


module.exports = App;

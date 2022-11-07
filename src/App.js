const MissionUtils = require('@woowacourse/mission-utils');

class App {

  play() {
    MissionUtils.Console.print('숫자 게임을 시작 합니다');
    while(true) {
      this.buildAnswer();
      let strike = 0;
      let input;
      while(strike != 3){
          MissionUtils.Console.readLine(
            '숫자를 입력해주세요 : ',
            (_input) => {
              input = _input;
            }
          );
          MissionUtils.Console.close()
          console.log("user input",input);
          this.choiceAnswer(input);
          console.log("list user", this.userSelect);
          this.countStrike();
          console.log("user, com", this.userSelect, this.answer);
          console.log("strike", this.strike);
          strike = this.strike;
  
          this.countBall();
          console.log("ball", this.ball);
  
          this.printHint();
      }
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      
      let select;
      MissionUtils.Console.readLine(
        '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
        (start) => {
          select = start;
        }
      );
      MissionUtils.Console.close()
      console.log("스타터",select)
      if(select == "2") {
        break;
      }

    }
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
    let userSelect = [...userNums].map(Number);

    // 중복없어야함
    const lenghtTest = [...new Set(userSelect)];
    if (lenghtTest.length < 3) {
      throw new Error('중복 숫자가 존재합니다.');
    }
    
    this.userSelect;
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

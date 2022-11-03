const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}

  makeRandomNumber() {
    const resultNumber = [];
    while (resultNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!resultNumber.includes(number)) {
        resultNumber.push(number);
      }
    }
    return resultNumber;
  }

  getUserNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      // TODO: 컴퓨터와 입력한 수 비교
    });
  }
  
  stringToNumberArray(string) {
    return [...string].map(char => Number(char));
  }

  compareNumber(userNumber, computerNumber) {
    const result = {
      ball: 0,
      strike: 0,
    };
    
    userNumber.forEach((num, index) => {
      if (num === computerNumber[index]) result.strike += 1;
      else if (computerNumber.includes(num)) result.ball += 1;
    });
    return result;
  }
  
  printResult(strike, ball) {
    if (strike === 0 && ball === 0) MissionUtils.Console.print('낫싱');
    if (ball > 0) MissionUtils.Console.print(ball + '볼');
    if (strike > 0) MissionUtils.Console.print(strike + '스트라이크');
  }

  isCorrectAnswer(result) {
    if (result.strike === 3){
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.askRetry();
      return;
    }
    this.getUserNumber();
  }

  askRetry() {
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (answer) => {
      this.retryOrExit(answer);
    });
  }

  retryOrExit(answer) {
    if (answer === '1') this.play();
    if (answer === '2') MissionUtils.Console.close(); 
  }
}

module.exports = App;

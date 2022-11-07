const MissionUtils = require("@woowacourse/mission-utils");
class App {
  // 컴퓨터의 랜덤한 1부터 9까지의 서로 다른 수로 이루어진 3자리의 수 만들기
  getComputerRandomNumber() {
    const computer = []
    while(computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if(!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  getUserAnswer(computerRandomNumber) {
    let input;
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      let answerList = Array.from(String(answer), Number);
      MissionUtils.Console.print(`answerList :${answerList}`);

      return this.referee(answerList, computerRandomNumber);
    });
  }

  checkNumber(answerList) {
    for (const i of answerList) {
      if (isNaN(i)) {
        return false;
      }
    }
    return true;
  }

  // 사용자가 잘못된 값을 입력했는지 확인
  checkUserAnswer(answerList) {
    if(answerList.includes(0)) {
      // 값에 0이 포함되어 있는 경우
      return false;
    } else if(answerList.length < 3) {
      // 입력받은 값의 길이가 3보다 적은 경우
      return false;
    } else if(answerList.length > 3) {
      // 입력받은 값의 길이가 3보다 긴 경우
      return false;
    } else if(!this.checkNumber(answerList)) {
      // 입력받은 값이 숫자가 아닌 경우
      return false;
    } else if(new Set(answerList).size < 3) {
      // 서로 다른 숫자로 이루어지지 않은 경우
      return false;
    }
    return true;
  }

  // strike 의 개수 찾기
  findStrike(input, computerRandomNumber) {
    let count = 0;
    for(let i=0; i < input.length; i++) {
      if(input[i] == computerRandomNumber[i]) {
        count += 1;
      }
    }
    return count;
  }

  // 교집합 찾기
  findIntersection(input, computerRandomNumber) {
    let intersectionArray = input.filter(x => computerRandomNumber.includes(x));
    return intersectionArray.length;
  }

  replay(option){
    MissionUtils.Console.print(option);
    if(option == 1) {
      this.play();
    } else if(option == 2) {
      MissionUtils.Console.close();
    }
  }

  // 입력받은 숫자를 판단하는 함수
  referee(answerList, computerRandomNumber) {
    // 사용자가 잘못된 값을 입력했는지 확인
    if (!this.checkUserAnswer(answerList)) {
      throw new Error("잘못된 값을 입력했습니다.");
    }

    let ball = 0;
    let strike = 0;
    let result = "";

    // 여기에 ball과 strike 개수를 판단
    strike = this.findStrike(answerList, computerRandomNumber);
    ball = this.findIntersection(answerList, computerRandomNumber) - strike;

    if(ball > 0 && strike > 0) {
      result += `${ball}볼 ${strike}스트라이크`
    } else if(ball > 0 && strike === 0) {
      result += `${ball}볼`;
    } else if(ball === 0 && strike > 0) {
      result += `${strike}스트라이크`;
    } else if(ball === 0 && strike === 0) {
      result += "낫싱";
    }
    MissionUtils.Console.print(result);
    if(strike === 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.", (option) => this.replay(option));
    }
    
    this.getUserAnswer(computerRandomNumber);
  }

  play() {
    // 1. 게임 시작 문구 출력
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    // 2. 컴퓨터의 랜덤 숫자 만들기
    const computerRandomNumber = this.getComputerRandomNumber();

    // 3. 숫자를 입력받는다. (반복되는 부분)
    this.getUserAnswer(computerRandomNumber);
  }
}

const app = new App();
app.play();

module.exports = App;
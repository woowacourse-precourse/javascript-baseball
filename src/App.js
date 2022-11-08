const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    this.printStart();
    var computerArr = this.computerRandomNumbers();
    this.userInput(computerArr);
  }

  /** 1. 게임시작 안내 문구 출력*/
  printStart() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  /** 2. 컴퓨터 랜덤 숫자 세자리 추출 */
  computerRandomNumbers() {
    var computerArr = [];
    while (computerArr.length < 3) {
    var number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerArr.includes(number)) {
        computerArr.push(number);
      }
    }
    return computerArr;
  }

  /** 3. 숫자 입력 및 입력값 유효성 검사*/
  userInput(computerArr) {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      if(input.length !== 3 || isNaN(input)) {
        throw new Error('입력값이 잘못되어, 게임을 종료합니다.');
      }
      var inputArr = [];
      for(var i = 0; i < input.length; i++) {
        inputArr.push(Number(input[i]));
      }
      this.hint(inputArr, computerArr);
    });
  }

  /** 4. 컴퓨터 숫자와 사용자 숫자 비교 결과값 출력  */ 
  hint(inputArr, computerArr) {
    var strike = 0;
    var ball = 0;
  
    for(var i = 0; i < 3; i++) {
      if(computerArr[i] === inputArr[i]) {
        strike++;
      } else if (inputArr.includes(computerArr[i])) {
        ball++;
      }      
    }
  
    //힌트 출력
    var result = ""; 
    if(ball > 0) {
      result +=(`${ball}볼 `);
    }
    if(strike > 0) {
      result +=(`${strike}스트라이크`);
    } 
    if(ball === 0 && strike === 0) {
      MissionUtils.Console.print('낫싱');
    } else {
      MissionUtils.Console.print(result);
    }
    this.replay(strike, computerArr);
  }

  /** 5. 게임종료까지 반복하는 기능 구현 */
  replay(strike, computerArr) {
    if(strike === 3) {
      this.gameComplete();
    } else {
      this.userInput(computerArr);
    }
  }

  /** 6. 게임종료 및 재시작 기능 구현 */
  gameComplete() {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (answer) => {
      MissionUtils.Console.print(`${answer}`);
      if(answer == 1) {
        this.play();
      } else if (answer == 2) {
        MissionUtils.Console.close();
      } else {
        throw new Error('입력값이 잘못되어, 게임을 종료합니다.');
      }
    });
  } 
}

const app = new App();
app.play();

module.exports = App;

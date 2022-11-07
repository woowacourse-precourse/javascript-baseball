const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.game();
  }
  
  game() {
    let computer = this.setComputerNum();
    this.predict(computer);
  }

  predict(computer) { 
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      const inputArray = input.split('').map(digit => parseInt(digit));   // 문자열값 배열로 파싱
      this.checkInputError(inputArray);   // 입력값 형식 테스트

      const countResult = this.countStrikeAndBall(inputArray, computer); // 스트라이크와 볼 계산
      MissionUtils.Console.print(this.resultString(countResult));  // 결과 문자열 출력
      this.terminate(computer, countResult);  // 예측 반복 여부 결정
    });
  }

  terminate(computer, countResult) {
    if (countResult.strike !== 3){
      this.predict(computer);
    } else {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      
      this.checkContinue();
    }
  }

  checkContinue() {
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (input) => {
      if(parseInt(input) === 1) this.game();
      else if(parseInt(input) === 2) {
        MissionUtils.Console.close();
        return;
      }
      else throw new Error('input error - should be 1 or 2');
    });
  }

  checkInputError(inputArray) {
    if (inputArray.length !== 3) {
      throw new Error('input length error');
    } else if(inputArray.length !== new Set(inputArray).size) {
      throw new Error('input overlap error');
    } else if (inputArray.some(digit => !Number.isInteger(digit))) {
      throw new Error('input isDigit error');
    } else if (inputArray.some(digit => digit === 0)) {
      throw new Error('input 1~9 range error');
    }
  }

  setComputerNum() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  countStrikeAndBall(input, computer) {
    let countS = 0;
    let countB = 0;
    const checkComp = [...computer];

    // index가 동일한 수 제거
    input.map((curr, idx) => {
      if(curr === checkComp[idx]){
        countS += 1;
        checkComp[idx] = -1;
      }
    })

    // index가 다른 중복 수 제거
    input.map((curr) => {
      const findIdx = checkComp.indexOf(curr);
      if(findIdx >= 0) {
        countB += 1;
        checkComp[findIdx] = -1;
      }
    })

    return {strike:countS, ball:countB};
  }

  resultString(countResult) {
    let res ='';
    if(countResult.strike === 0 && countResult.ball === 0){
      res = '낫싱';
    } else {
      res += countResult.ball>0 ? `${countResult.ball}볼`:'';
      res += countResult.strike>0 ? (res === '' ? `${countResult.strike}스트라이크` : ` ${countResult.strike}스트라이크`):'';
    }
    return res;
  }
}

const app = new App();
app.play();

module.exports = App;
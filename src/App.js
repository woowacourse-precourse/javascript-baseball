const MissionUtils = require("@woowacourse/mission-utils");

class App {
  async play() {
    // step1
    console.log('숫자 야구 게임을 시작합니다.');
    this.game();
  }
  
  game() {
    // step2
    let computer = this.setComputerNum();
    // console.log(computer);
    
    // let retry = true;
    // while(retry) {
    //   const countResult = this.predict(computer);
    //   // step5
    //   // MissionUtils.Console.print(this.result(countResult));
      
    //   retry = countResult.strike === 3 ? false : true;
    // }
    this.predict(computer)
    
    // step6
  }

  async predict(computer) { 
    // step3
    // const inputArray = this.setUserNum();
    // console.log(inputArray);
    // step4
    // const countResult = this.countStrikeAndBall(inputArray, computer);
    // MissionUtils.Console.print(this.result(countResult));

    // const countResult = await this.setUserNum(computer);
    MissionUtils.Console.readLine('숫자를 입력해주세요 :', (input) => {
      const inputArray = input.split('').map(digit => parseInt(digit));
      this.checkInputError(inputArray);
      const countResult = this.countStrikeAndBall(inputArray, computer);
      MissionUtils.Console.print(this.result(countResult));
      if (countResult.strike !== 3){
        this.predict(computer);
      } else {
        console.log('3개의 숫자를 모두 맞히셨습니다!');
        MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (input) => {
          if (![1,2].includes(parseInt(input))) throw new Error('input error - should be 1 or 2');
          else if(input === '1') this.game();
          else MissionUtils.Console.print('게임 종료');
        });
      }
    })
  }

  async setUserNum(computer) {
    // return new Promise((resolve, reject) => {
    //   MissionUtils.Console.readLine('숫자를 입력해주세요 :', (input) => {
    //     const inputArray = input.split('').map(digit => parseInt(digit));
    //     this.checkInputError(inputArray);
    //     resolve(inputArray);
    //   })
    // })
    MissionUtils.Console.readLine('숫자를 입력해주세요 :', (input) => {
      const inputArray = input.split('').map(digit => parseInt(digit));
      this.checkInputError(inputArray);
      const countResult = this.countStrikeAndBall(inputArray, computer);
      MissionUtils.Console.print(this.result(countResult));
      this.predict()
    })
  }

  checkInputError(inputArray) {
    // const re = /^[1-9]{3}$/;
    if (inputArray.length !== 3) {
      throw new Error('input length error');
    } else if(inputArray.length !== new Set(inputArray).size) {
      throw new Error('input overlap error');
    } else if (inputArray.some(digit => !Number.isInteger(digit) && digit == 0)) {
      throw new Error('input 1~9 range & isDigit error');
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

  result(countResult) {
    let res ='';
    if(countResult.strike === 0 && countResult.ball === 0){
      res = '낫싱';
    } else {
      res += countResult.ball>0 ? `${countResult.ball}볼 `:'';
      res += countResult.strike>0 ? `${countResult.strike}스트라이크`:'';
    }
    return res;
  }

  checkContinue() {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (input) => {
        if (![1,2].includes(parseInt(input))) throw new Error('input error - should be 1 or 2');
        else resolve(parseInt(input));
      });
    })
  }
}

const app = new App();
app.play();

module.exports = App;


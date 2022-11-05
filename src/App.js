const MissionUtils = require("@woowacourse/mission-utils");

class App {
  async play() {
    // step1
    console.log('숫자 야구 게임을 시작합니다.');
    let restart = true;
    while(restart){
      
      restart = await this.game() === 1 ? true : false;
    }
  }
  
  async game() {
    // step2
    let computer = this.setComputerNum();
    // console.log(computer);
    
    let retry = true;
    while(retry) {
      const countResult = await this.predict(computer);
      // step5
      // const response = await this.result(countResult);
      // MissionUtils.Console.print(response);
      MissionUtils.Console.print(this.result(countResult));
      
      retry = countResult.strike === 3 ? false : true;
    }
    console.log('3개의 숫자를 모두 맞히셨습니다!');
    MissionUtils.Console.print('게임 종료');

    // step6
    return await this.checkContinue();
  }

  async predict(computer) { 
    // step3
    const input = await this.setUserNum();
    const inputArray = this.checkInputError(input);
    // console.log(inputArray);
    // step4
    const countResult = this.countStrikeAndBall(inputArray, computer);
    return countResult;
  }

  async setUserNum() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 :', (input) => {
      return input;
    });
  }

  checkInputError(input) {
    const re = /^[1-9]{3}$/;
    const inputArray = input.split('').map(num => parseInt(num));
    let message;
    if (inputArray.length !== 3) {
      message = input + 'input length error';
      throw new Error(message);
    } else if(inputArray.length !== new Set(input).size) {
      message = 'input overlap error';
      throw new Error(message);
    } else if (!re.test(input)) {
      message = 'input 1~9 range & isDigit error';
      throw new Error(message);
    } else {
      message = 'none';
    }
    return inputArray;
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
    // return new Promise(resolve => {
    //   let res ='';
    //   if(countResult.strike === 0 && countResult.ball === 0){
    //     res = '낫싱';
    //   } else {
    //     res += countResult.ball>0 ? `${countResult.ball}볼`:'';
    //     res += countResult.strike>0 ? `${countResult.strike}스트라이크`:'';
    //   }
    //   resolve(res)
    // });

      let res ='';
      if(countResult.strike === 0 && countResult.ball === 0){
        res = '낫싱';
      } else {
        res += countResult.ball>0 ? `${countResult.ball}볼`:'';
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

const MissionUtils = require("@woowacourse/mission-utils");

class App {
  async play() {
    // step1
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    
    let restart = true;
    while(restart){
      restart = await this.game() === 1 ? true : false;
    }
  }
  
  async game() {
    // step2
    let computer = this.setComputerNum();
    MissionUtils.Console.print(computer);

    let retry = true;
    while(retry) {
      const countResult = await this.predict(computer);

      // step5
      MissionUtils.Console.print(this.result(countResult));
      retry = countResult.strike  === 3 ? false : true;
    }
    // step6
    return await this.checkContinue();
  }

  async predict(computer) { 
    // step3
    let input = await this.setUserNum();
    MissionUtils.Console.print(input);

    // step4
    const countResult = this.countStrikeAndBall(input, computer);
    MissionUtils.Console.print(countResult);
    return countResult;
  }

  setUserNum() {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine('숫자를 입력해주세요 :', (i) => {
        let input = i.split('').map(num => parseInt(num));
        if (input.length !== 3) throw new Error('length error');
        else if(input.length !== new Set(input).size) throw new Error('duplicate error');
        else resolve(input);
      });
    })
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
    if(countResult.strike === 0 && countResult.ball === 0){
      return '낫싱';
    } else if(countResult.strike === 3) {
      return '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료';
    } else {
      let res = '';
      res += countResult.ball>0 ? `${countResult.ball}볼`:'';
      res += countResult.strike>0 ? `${countResult.strike}스트라이크`:'';
      return res;
    }
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

const app = new App;
app.play();

module.exports = App;

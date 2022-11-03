const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    // step1
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    
    let checkContinue = true;
    while(checkContinue){
      checkContinue = game();
    }
  }
  
  async game() {
    // step2
    let computer = this.setComputerNum();
    MissionUtils.Console.print(computer);

    while(true) {
      // step3
      let input = await this.setUserNum();
      MissionUtils.Console.print(input);

      // step4
      const countRes = this.countStrikeAndBall(input, computer);
      MissionUtils.Console.print(countRes);

      // step5
      MissionUtils.Console.print(this.result(countRes));

      // step6
    }
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

    return [countB, countS];
  }

  result(countRes) {
    if(countRes[0] === 0 && countRes[1] === 0){
      return '낫싱';
    } else if(countRes[1] === 3) {
      return '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료';
    } else {
      let res = '';
      res += countRes[0]>0 ? `${countRes[0]}볼`:'';
      res += countRes[1]>0 ? `${countRes[1]}스트라이크`:'';
      return res;
    }
  }

  checkContinue() {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (input) => {
        if (![1,2].inclues(input)) throw new Error('input error: should be 1 or 2');
        else resolve(input);
      });
    })
  }
}

const app = new App;
app.play();

module.exports = App;

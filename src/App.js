const MissionUtils = require("@woowacourse/mission-utils");

class App {
  async play() {
    // step1
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    
    // step2
    let computer = this.setComputerNum();
    MissionUtils.Console.print(computer);

    // step3
    let input = await this.setUserNum();
    MissionUtils.Console.print(input);

    // step4

    // step5

    // step6

  }

  setUserNum() {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine('숫자를 입력해주세요 :', (i) => {
        let input = i.split('').map(num => parseInt(num));
        if (input.length !== 3) throw new Error('length error');
        else if(input.length !== new Set(input).size) throw new Error('duplicate error');
        else resolve(input) 
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

  countStrike(input, computer) {
    const count = input.reduce((prev, curr, idx) => (
      curr === computer[idx] ? prev + 1 : prev
    ), 0);
    return count;
  }

  countBall(input, computer) {

  }

  result() {

  }

  resultString() {

  }
}

const app = new App;
app.play();

module.exports = App;

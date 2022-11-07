const MissionUtils = require("@woowacourse/mission-utils");

class App {

  throwError(input) {


    if (input.length !== 3) {
      throw new Error("3자리 숫자만 입력 가능합니다.")
    }

    if (input.includes(0)) {
      throw new Error("0은 포함될 수 없습니다.")
    }

    let inputSet = new Set(input);

    if (inputSet.size < 3) {
      throw new Error("중복되지 않은 숫자 3개만 입력 가능합니다.")
    }

    if (input.replace(/[0-9]/g, '').length !== 0) {
      throw new Error("숫자만 입력 가능합니다.")
    }
  }

  computerMakeNum() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join('');
  }

  finished() {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    MissionUtils.Console.readLine('게임을 새로 시작하시려면 1, 종료하려면 2를 입력하세요.', (order) => {

      if (Number(order) == 1) new App().play();
      else if (Number(order) == 2)  MissionUtils.Console.close();

      else throw new Error('1 또는 2만 입력하세요.')
    })
  }

  findStrike(computerAns, ans) {
    let cnt = 0;
    for (let i = 0; i < 3; i++) {
      if (computerAns[i] == ans[i]) {
        cnt++;
      }
    }
    return cnt;
  }

  findBall(computerAns, ans) {
    let cnt = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (computerAns[i] == ans[j] && i != j) {
          cnt++;
        }
      }
    }
    return cnt;
  }
  printResult(cntStrike, cntBall) {
    let printMessage = "";

    if (cntBall) printMessage += `${cntBall}볼`;

    if (cntStrike && cntBall != 0) printMessage += ` ${cntStrike}스트라이크`;
    else if (cntStrike && cntBall == 0) printMessage += `${cntStrike}스트라이크`;

    if (printMessage == "") MissionUtils.Console.print("낫싱");
    else MissionUtils.Console.print(printMessage);
  }

  guess(computerAns) {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', input => {

      this.throwError(input);

      let cntStrike = this.findStrike(computerAns, input);
      let cntBall = this.findBall(computerAns, input);
      this.printResult(cntStrike, cntBall);

      if (cntStrike == 3) this.finished();
      else this.guess(computerAns);
    })
  }

  play() {
    let computerAns = this.computerMakeNum();
    this.guess(computerAns);
  }

}

module.exports = App;

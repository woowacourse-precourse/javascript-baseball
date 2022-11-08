const { Console, Random } = require("@woowacourse/mission-utils");
const ONLY_NUMBER = /^[1-9]+$/;

class App {
  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.gameProcess();
  }

  gameProcess() {
    this.input = [];
    this.computer = [];
    this.computerRandomNumber();
    this.inputNumber();
  }


  computerRandomNumber() {
    while (this.computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }
  }

  inputNumber() {
    Console.readLine('숫자를 입력하세요 : ', (input) => {
      this.input = input.split('').map((i) => Number(i));
      this.checkValidation(this.input);
      this.playScore(this.computer, this.input);
    })
  }

  checkValidation (input) {
    if (input.length !== 3) {
      throw '세자리 숫자를 입력해 주세요.';
    }
    if (new Set(input).size !== 3) {
      throw '중복되지 않게 숫자를 입력해 주세요';
    }
    if (!ONLY_NUMBER.test(input.join(''))) {
      throw '숫자 외의 값을 입력하셨습니다.';
    }
  }

  checkInput (computer, input) {
    let score = [0,0];
    for (let i = 0 ; i < computer.length ; i++) {
      if (computer[i] === input[i]) score[1] += 1;
      else if (computer.includes(input[i])) score[0] += 1;
    }
    return score;
  }

  playScore(computer,input) {
    const score = this.checkInput(computer, input);
    let ans="";
    if (score[0] === 0 && score[1] === 0) ans += "낫싱";
    if (score[0] > 0) ans += `${score[0]}볼 `;
    if (score[1] > 0) ans += `${score[1]}스트라이크`;
  
    Console.print(ans);
    this.isEnd(score[1]);
  }

  isEnd(strike){
    if (strike !== 3) this.inputNumber();
    else this.restartGame();
  }
  
  restartGame() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임종료');
    Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (input) => {
      if (input === '1') {
        return this.gameProcess();
      }
      else if (input === '2') {
        Console.print('게임 종료');
        return;
      }
      else {
        throw '값을 잘못 입력하셨습니다.';
      }
    });
  }


}

module.exports = App;

const MissionUtils = require("@woowacourse/mission-utils");
class App {
  static answer;
  static hint;

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.answer = this.generateComputerNumber();
    this.startGame();
  }

  generateComputerNumber() {
    const computerNumber = [];
    while (computerNumber.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(randomNumber)) {
        computerNumber.push(randomNumber);
      }
    }
    return computerNumber;
  }

  startGame() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (inputNumber) => {
      this.throwError(inputNumber);
      MissionUtils.Console.print(this.hint);
      this.checkAnswer();
    })
  }

  throwError(inputNumber) {
    if (!this.checkInput(inputNumber)) throw new Error('잘못된 입력입니다.');
    this.hint = this.getHint(this.answer, inputNumber);
  }

  checkInput(inputNumber) {
    let listOfNumber = [...inputNumber];
    if (!Number(inputNumber)) return false;
    if (
      listOfNumber[0] == listOfNumber[1] ||
      listOfNumber[0] == listOfNumber[2] ||
      listOfNumber[1] == listOfNumber[2]) return false;
    if (listOfNumber.includes('0')) return false;
    if (listOfNumber.length == 0 || listOfNumber.length != 3) return false;
    return true;
  }

  getHint(answer, inputNumber) {
    let strike = 0;
    let ball = 0;
    let result = '';
    for (let i = 0; i < answer.length; i++) {
      result = this.checkStrikeBall(answer, inputNumber, i);
      if (result == 'strike') strike += 1;
      else if (result == 'ball') ball += 1;
    }
    let hint = '';
    hint = this.printHint(strike, ball);
    return hint;
  }


  printHint(strike, ball) {
    let hint;
    if (strike == 0 && ball == 0) {
      hint = '낫싱';
    } else if (strike == 0) {
      hint = `${ball}볼`;
    } else if (ball == 0) {
      hint = `${strike}스트라이크`;
    } else {
      hint = `${ball}볼 ${strike}스트라이크`;
    }
    return hint;
  }

  checkStrikeBall(answer, inputNumber, i) {
    const playerNumber = [...inputNumber];
    if (answer.includes(parseInt(playerNumber[i]))) {
      if (playerNumber[i] == answer[i]) return 'strike';
      return 'ball';
    }
  }

  checkAnswer() {
    if (this.hint == '3스트라이크') {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.checkRestart();
    }
    else this.startGame();
  }

  checkRestart() {
    MissionUtils.Console.print(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    );
    MissionUtils.Console.readLine('', pick => {
      if (pick == 1) this.play();
      else MissionUtils.Console.close();
    });
  }
}

module.exports = App;

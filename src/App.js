const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.userNumber = [0, 0, 0];
    this.randomNumber = [0, 0, 0];
  }

  printStartSentence() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  setRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
          computer.push(number);
        }
    }
    this.randomNumber = computer;
  } 
  
  filterInput(number) {
    return String(number).split('').map((str) => Number(str));
  }

  duplicateNumber(userNumber, randomNumber) {
    const result = [0,0,0];
 
    for (let i = 0; i < 3; i++) {
      if (userNumber[i] === randomNumber[i]) {
        result[0]++;
      }
      if (randomNumber.indexOf(userNumber[i]) >= 0) {
        result[1]++;
      }
    }
    if (result[0] === 0 && result[1] === 0) {
      result[2]++;
    }
    return result;
  }

  calcResult(result) {
    if (result[0] === 3) {
      Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료\n');
      return true;
    } else {
      if (result[2] > 0) {
        Console.print("낫싱");
      } else if (result[1] - result[0] === 0) {
        Console.print(`${result[0]}스트라이크`)
      } else if (result[0] === 0 && result[1] - result[0] > 0) {
        Console.print(`${result[1]}볼`);
      } else {
        Console.print(`${result[1] - result[0]}볼 ${result[0]}스트라이크`);
      }
      return false;
    }
  }

  startGameOption() {
    this.printStartSentence();
    this.setRandomNumber();
  endGameOption() {
    Console.close();
  }

  isValidateGameOption(number) {
    if (number !== '1' && number !== '2'){
      throw new Error('1 또는 2를 입력해주세요');
    }
  }

  gameOption(questionText) {
    Console.readLine(questionText, (input) =>{
      this.isValidateGameOption(input);

      if (input === '1'){
        this.startGameOption();
      } else if (input === '2'){
        this.endGameOption();
      }
    })
  }

  isValidateInputNumber(number) {
    if (number.length !== 3){
      throw new Error('3자리 수를 입력해야합니다');
    }
  }

  play() {
    this.startGameOption();
  }
}

module.exports = App;

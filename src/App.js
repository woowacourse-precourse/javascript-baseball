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
  
  stringToArray(number) {
    return String(number).split('').map((str) => Number(str));
  }

  calcResult(result) {
    if (result['strikeCount'] === 3) {
      Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료\n');
      return true;
    }

    if (result['strikeCount'] === 0 && result['ballCount'] === 0) {
      Console.print("낫싱");
    } else if (result['strikeCount'] === result['ballCount']) {
      Console.print(`${result['strikeCount']}스트라이크`);
    } else if (result['strikeCount'] === 0  && result['ballCount'] > 0) {
      Console.print(`${result['ballCount']}볼`);
    } else {
      Console.print(`${result['ballCount'] - result['strikeCount']}볼 ${result['strikeCount']}스트라이크`);
    }
    return false;
  }

  duplicateNumber(userNumber, randomNumber) {
    const result = { strikeCount: 0, ballCount: 0 };

    userNumber.forEach((number, index) => {
      if (number === randomNumber[index]) {
        result['strikeCount'] += 1;
      }
      if (randomNumber.indexOf(number) !== -1) {
        result['ballCount'] += 1;
      }
    })
  
    return this.calcResult(result);
  }

  restartGameOption() {
    this.setRandomNumber();
    this.inputUserNumber("숫자를 입력하세요 :");  
  }

  endGameOption() {
    Console.print('게임을 완전히 종료합니다.');
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
        this.restartGameOption();
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

  inputUserNumber (questionText) {
    Console.readLine(questionText, (input) => {
      this.isValidateInputNumber(input);

      this.userNumber = this.stringToArray(input);
      let result = this.duplicateNumber(this.userNumber, this.randomNumber);

      if (result) {
        this.gameOption('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
      } else {
        this.inputUserNumber(questionText);
      }
    })
  }

  play() {
    this.printStartSentence();
    this.setRandomNumber();
    this.inputUserNumber("숫자를 입력하세요 :"); 
  }
}

module.exports = App;

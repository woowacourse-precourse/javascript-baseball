const MissionUtils = require("@woowacourse/mission-utils");

class App {
  answer;
  numberInput;

  play() {
    this.gameStartMessage();
    this.computerRandomNumber();
    this.getUserNumberInput();
  }

  gameStartMessage() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.')
  };
  

  computerRandomNumber() {
    const nonDuplicateNumbers = [];
    while (nonDuplicateNumbers.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!nonDuplicateNumbers.includes(randomNumber)) {
        nonDuplicateNumbers.push(randomNumber);
        this.nonDuplicateNumbers = nonDuplicateNumbers;
      }
    }
    return nonDuplicateNumbers
  }

  getUserNumberInput() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
      this.checkError(userInput);
      this.checkAnswer(userInput);
    });
  }

  checkError(userInput) {
    const NUMBERS = /^[1-9]+$/
    if(!NUMBERS.test(userInput)) throw new Error('숫자가 입력되지 않았습니다');
    
    if(userInput.length !== 3) throw new Error('3개의 글자가 아닙니다.');

    if(new Set(userInput).size !== 3) throw new Error('중복된 숫자가 있습니다.');
  }

  checkAnswer(userInput){
    let STRIKE = 0;
    let BALL = 0;
    let result = '';

    for(let i=0; i<userInput.length; i++){
      if(userInput[i] === this.nonDuplicateNumbers[i]) STRIKE ++;
      else if(userInput.includes(this.nonDuplicateNumbers[i])) BALL ++;
    }

    if(BALL === 0 && STRIKE === 0) {
      result = '낫싱'
    } else if(BALL === 0 && STRIKE !== 0) {
      result =`${STRIKE}스트라이크`;
    } else if(BALL !== 0 && STRIKE === 0) {
      result =`${BALL}볼`;
    } else if(BALL !== 0 && STRIKE !== 0) {
      result=`${BALL}볼 ${STRIKE}스트라이크`;
    } else {
      result = '3스트라이크';
    }

    MissionUtils.Console.print(`${result}`);
  }
}

const app = new App();
app.play();

module.exports = App;
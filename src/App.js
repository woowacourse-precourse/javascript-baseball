const { Console, Random } = require("@woowacourse/mission-utils");
const { validateThreeFigures, validateNextAction } = require("./modules/validation");
const { showStartMessage, showCountMessage, showCorrectMessage, showNothingMessage } = require("./modules/showMessage");

class App {
  play() {
    showStartMessage();
    const randomNumber = this.makeRandomNumber();
    console.log(randomNumber);
    this.getUsersPrediction(randomNumber);
  }

  makeRandomNumber() {
    const randomNumber = [];
    while (randomNumber.length < 3) {
      const number = Random.pickNumberInRange(1,9);
      if (!randomNumber.includes(number)) {
        randomNumber.push(number);
      }
    }
    return randomNumber;
  }

  getUsersPrediction(randomNumber) {
    Console.readLine('숫자를 입력해주세요 : ', (prediction) => {
      console.log(prediction);
      if (!validateThreeFigures(prediction)) {
        throw '잘못된 값을 입력했습니다!';
      }
      const convertedNumber = prediction.split('').map(Number);
      console.log(convertedNumber);
      if (this.isRightAnswer(randomNumber, convertedNumber)) {
        showCorrectMessage();
        this.getUsersNextAction();
      } else if (this.isNothing(randomNumber, convertedNumber)) {
        showNothingMessage();
        this.getUsersPrediction(randomNumber);
      } else {
        const [ballCount, strikeCount] = this.calculateCount(randomNumber, convertedNumber);
        showCountMessage(ballCount, strikeCount);
        this.getUsersPrediction(randomNumber);
      }
    })
  }

  isRightAnswer(randomNumber, userInput) {
    return randomNumber.join('') === userInput.join('');
  }

  isNothing(randomNumber, userInput) {
    const union = new Set([...randomNumber, ...userInput]);
    return union.size === 6;
  }

  calculateCount(randomNumber, userInput) {
    let ballCount = 0;
    let strikeCount = 0;
    randomNumber.forEach((number, index) => {
      if (userInput.includes(number) && index !== userInput.indexOf(number)) {
        ballCount++;
      } else if(userInput[index] === number) {
        strikeCount++;
      }
    });
    return [ballCount, strikeCount];
  }

  getUsersNextAction() {
    Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (userInput) => {
      if (!validateNextAction(userInput)) {
        throw '잘못된 값을 입력했습니다!'
      } else if (userInput === '1') {
        const randomNumber = this.makeRandomNumber();
        console.log(randomNumber)
        this.getUsersPrediction(randomNumber);
      } else if (userInput === '2') {
        Console.close();
      }
    })
  }
}

const app = new App();
app.play();

module.exports = App;

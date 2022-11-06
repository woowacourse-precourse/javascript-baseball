const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  play() {
    this.showStartMessage();
    const randomNumber = this.makeRandomNumber();
    console.log(randomNumber);
    this.getUsersPrediction(randomNumber);
  }

  showStartMessage() {
    Console.print("숫자 야구 게임을 시작합니다.");
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
      const convertedNumber = prediction.split('').map(Number);
      console.log(convertedNumber);
      if (this.isRightAnswer(randomNumber, convertedNumber)) {
        Console.print('3스트라이크');
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        Console.close();
      } else if (this.isNothing(randomNumber, convertedNumber)) {
        Console.print('낫싱');
        this.getUsersPrediction(randomNumber);
      } else {
        const [ballCount, strikeCount] = this.calculateCount(randomNumber, convertedNumber);
        this.showCountMessage(ballCount, strikeCount);
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

  showCountMessage(ballCount, strikeCount) {
    if (ballCount === 0) {
      Console.print(`${strikeCount}스트라이크`);
    } else if (strikeCount === 0) {
      Console.print(`${ballCount}볼`);
    } else {
      Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
    }
  }
}

const app = new App();
app.play();

module.exports = App;

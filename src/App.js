const MissionUtils = require("@woowacourse/mission-utils");
const ExceptionCheck = require("./ExceptionCheck")

class App {
  constructor() {
    this.correctAnswer;
    this.userInput;
    this.ball = 0
    this.strike = 0
  }
  play() {
    this.gamaStartAlram()
    this.createRandomNum()
    this.getAnswer()
  }

  gamaStartAlram() {
    MissionUtils.Console.print("게임을 시작합니다")
  }

  createRandomNum() {
    let computerRandomNums = new Set()
    while (computerRandomNums.size < 3) {
      computerRandomNums.add(MissionUtils.Random.pickNumberInRange(1, 9))
    }
    MissionUtils.Console.print(computerRandomNums)
    return this.correctAnswer = [...computerRandomNums].join('')
  }

  getAnswer() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 :', (input) => {
      const exceptionCheck = new ExceptionCheck()
      exceptionCheck.UserInputCheck(input)
      MissionUtils.Console.print(`입력한 숫자는 ${input} 입니다`)
      this.userInput = input
      this.strikeCount();
      this.ballCount();
      return this.userInput
    })
  }

  strikeCount() {
    const correctAnswerArr = this.correctAnswer.split('')
    correctAnswerArr.map((number, index) => {
      if (number === this.userInput[index]) {
        this.strike += 1;
      }
    })
    return this.strike
  }

  ballCount() {
    const correctAnswerArr = this.correctAnswer.split('')
    correctAnswerArr.map((number, index) => {
      if (number !== this.userInput[index] && this.userInput.includes(number)) {
        this.ball += 1;
      }
    })
    return this.ball
  }

}

const app = new App();
app.play();
module.exports = App;

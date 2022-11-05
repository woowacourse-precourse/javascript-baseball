const MissionUtils = require("@woowacourse/mission-utils");
const ExceptionCheck = require("./ExceptionCheck")



class App {
  constructor() {
    this.correct_answer;
    this.user_input;
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
    let random_nums = new Set()
    while (random_nums.size < 3) {
      random_nums.add(MissionUtils.Random.pickNumberInRange(1, 9))
    }
    return this.correct_answer = [...random_nums].join('')
  }

  getAnswer() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 :', (input) => {
      const exceptionCheck = new ExceptionCheck()
      exceptionCheck.UserInputCheck(input)
      MissionUtils.Console.print(`입력한 숫자는 ${input} 입니다`)
      return this.user_input = input
    })
  }

}

const app = new App();
app.play();
module.exports = App;

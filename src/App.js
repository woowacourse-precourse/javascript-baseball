const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    this.gamaStartAlram()
    this.createRandomNum()
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
}

const app = new App();
app.play();
module.exports = App;

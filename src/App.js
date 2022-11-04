const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor(number) {
    this.number = number;
  }

  play(number, answer) {
    this.number = number;
    this.answer = answer;

    if (number === answer) {
      return "3스트라이크";
    }
  }
}

module.exports = App;

const randomNumber = MissionUtils.Random.pickNumberInRange(100, 999);

const game = new App(randomNumber);
const gameNumber = game.number;

console.log(gameNumber);

MissionUtils.Console.readLine("3자리 숫자를 입력해주세요: ", (answer) => {
  let result = game.play(gameNumber, Number(answer));
  console.log(result);
});

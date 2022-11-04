const { Console, Random } = require("@woowacourse/mission-utils");

function checkAnswer(input) {}

function getAnswer() {
  const computer = [];
  // while (computer.length < 3) {
  //   const number = MissionUtils.Random.pickNumberInRange(1, 9);
  //   if (!computer.includes(number)) {
  //     computer.push(number);
  //   }
  // }

  return computer;
}

class App {
  play() {
    const answerNumber = getAnswer();
    Console.print("숫자 야구게임을 시작합니다.");
    console.log(answerNumber);
  }
}

const app = new App();
app.play();

module.exports = App;

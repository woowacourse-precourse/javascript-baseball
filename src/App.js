const { Console, Random } = require("@woowacourse/mission-utils");
const UserInputNumber = require("./UserInputNumber");

function checkAnswer(input) {}

// function getAnswer() {
//   const computer = [];
//   while (computer.length < 3) {
//     const number = Random.pickNumberInRange(1, 9);
//     if (!computer.includes(number)) {
//       computer.push(number);
//     }
//   }

//   return computer;
// }

class App {
  constructor() {
    this.UserInputNumber = new UserInputNumber();
  }
  play() {
    // const answerNumber = getAnswer();

    Console.print("숫자 야구게임을 시작합니다.");

    console.log(answerNumber);
    /**
     * todo : readLine이 안먹히는데 어떻게 사용하는지 알아야함
     */
    Console.readLine("숫자를 입력해주세요.", (inputNumber) => {
      console.log(inputNumber);
    });
  }

  callResult() {}
}

const app = new App();
app.play();

module.exports = App;

const { Console, Random } = require("@woowacourse/mission-utils");

function checkAnswer(input) {}

function cpuMakeAnswer() {
  const computer = [];
  while (computer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }

  return computer;
}

class App {
  constructor() {}
  play() {
    const userInput = [1, 2, 3];
    const answerNumber = cpuMakeAnswer();
    Console.print(answerNumber);

    Console.print("숫자 야구게임을 시작합니다.");
    // console.log(answerNumber);
    /**
     * todo : readLine이 안먹히는데 어떻게 사용하는지 알아야함
     */
    // inputNumber() {
    //   Console.readLine("숫자를 입력해주세요.", (inputNumber) => {
    //     this.inputNumber = inputNumber;
    //   });
    // }
    // const inputNum = [];

    // Console.readLine("서로 다른 숫자를 3개 입력하시오.", (answer) => {
    //   Console.print(answer);

    //   Console.close();
    // });
    //한 개의 입력(띄어쓰기x)
  }

  callResult() {}
}

const app = new App();
app.play();

module.exports = App;

const { Console, Random } = require("@woowacourse/mission-utils");
class App {
  play() {
    const computer = [];

    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(String(number))) {
        computer.push(String(number));
      }
    }
    console.log(computer);

    const retry = () => {
      Console.readLine("숫자를 입력해주세요 : ", (answer) => {
        let strike = 0;
        let ball = 0;

        const answerToList = answer.split("");

        if (answerToList.length !== 3) {
          throw new Error("세 개만 입력하라고");
        }

        if (answerToList.every((num) => !computer.includes(num))) {
          Console.print("낫싱");
          retry();
        }

        answerToList.forEach((num, i) => {
          if (num === computer[i]) {
            strike++;
          } else if (num !== computer[i] && computer.includes(num)) {
            ball++;
          }
        });

        const ballToString = ball === 0 ? "" : strike !== 0 ? `${ball}볼 ` : `${ball}볼`;
        const strikeToString = strike === 0 ? "" : `${strike}스트라이크`;

        Console.print(`${ballToString}${strikeToString}`);
        retry();
      });
    };
    retry();
  }
}

const app = new App();

app.play();

module.exports = App;

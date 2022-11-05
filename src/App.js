// import * as MissionUtils from "@woowacourse/mission-utils";
const { Console, Random } = require("@woowacourse/mission-utils");

function App() {
  this.state = {
    computer: [],
    user: [],
    result: "",
  };
  this.play = () => {
    Console.print("숫자 야구 게임을 시작합니다.");
    Console.readLine("숫자를 입력해주세요: ", (number) => {
      Console.print(`입력 숫자: ${number} ${this.state.computer}`);
    });
  };

  this.init = () => {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.setState({ computer });
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
  };

  this.init();
}
const app = new App();
app.play();

module.exports = App;

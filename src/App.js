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
    Console.readLine("숫자를 입력해주세요: ", (input) => {
      compareInputWithComputer(input);
    });
  };

  const setComputerNumber = () => {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  };

  const checkUserInputValidation = (userInput) => {
    /**
     * 오류 입력 처리
     * 숫자가 1~9가 아닌 경우
     * 같은 숫자가 2개이상 포함된 경우
     * 입력값이 3자리가 아닌 경우
     *
     */
  };

  const getStrikeCount = (user, computer) => {
    return computer.filter((number, index) => number === user[index]).length;
  };

  const getBallCount = (user, computer) => {
    return user.reduce((acc, cur, index) => {
      if (cur === computer[index]) return acc;
      if (computer.includes(cur)) return acc + 1;
      else return acc;
    }, 0);
  };

  const compareInputWithComputer = (input) => {
    const userInput = input.split("");
    const strikeCount = getStrikeCount(userInput, this.state.computer);
    const ballCount = getBallCount(userInput, this.state.computer);
  };

  this.init = () => {
    const computer = setComputerNumber();
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

// module.exports = App;

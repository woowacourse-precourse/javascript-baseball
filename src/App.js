// import * as MissionUtils from "@woowacourse/mission-utils";
const { Console, Random } = require("@woowacourse/mission-utils");

function App() {
  this.state = {
    computer: [],
    isGameContinue: true,
  };
  this.play = () => {
    Console.print("숫자 야구 게임을 시작합니다.");
    Console.readLine("숫자를 입력해주세요: ", userInputCallBack);
  };

  const userInputCallBack = (input) => {
    checkUserInputValidation(input); // 값 검사
    const [strikeCount, ballCount] = compareInputWithComputer(input);

    if (!strikeCount && !ballCount) Console.print("낫싱");
    else {
      Console.print(
        ` ${ballCount ? `${ballCount}볼` : ""} ${
          strikeCount ? `${strikeCount}스트라이크` : ""
        }`,
      );
    }

    if (strikeCount === 3) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      Console.readLine(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
        userResultCallBack,
      );
    } else {
      Console.readLine("숫자를 입력해주세요: ", userInputCallBack);
    }
  };

  const userResultCallBack = (result) => {
    if (result === "1") {
      this.setState({ computer: setComputerNumber() });
      Console.readLine("숫자를 입력해주세요: ", userInputCallBack);
    } else if (result === "2") {
      this.setState({ isGameContinue: false });
      Console.close();
    }
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
    return;
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
    const userInput = input.split("").map((data) => +data);
    const strikeCount = getStrikeCount(userInput, this.state.computer);
    const ballCount = getBallCount(userInput, this.state.computer);
    return [strikeCount, ballCount];
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

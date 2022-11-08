// import * as MissionUtils from "@woowacourse/mission-utils";
const { Console, Random } = require("@woowacourse/mission-utils");

function App() {
  this.state = {
    computer: [],
  };
  this.play = () => {
    const computer = setComputerNumber();
    this.setState({ computer });
    Console.print("숫자 야구 게임을 시작합니다.");
    Console.readLine("숫자를 입력해주세요: ", userInputCallBack);
  };

  const userInputCallBack = (input) => {
    const [isValidate, message] = checkUserInputValidation(input); // 값 검사 여기서 막히면 error throw
    if (!isValidate) throw new Error(message);

    const [strikeCount, ballCount] = getStrikeAndBallCount(input);

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
      Console.print("게임을 종료합니다.");
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
    const userInputReg = /[1-9]{3}/g;
    let message = "";
    const dupleSet = new Set([...userInput]);
    /**
     * 오류 입력 처리
     * 숫자가 1~9가 아닌 경우
     * 같은 숫자가 2개이상 포함된 경우
     * 입력값이 3자리가 아닌 경우
     *
     */
    let result = true;
    if (userInput.length !== 3) {
      message = "3글자를 입력해주세요";
      result = false;
    } else if (!userInputReg.test(userInput)) {
      message = "1-9 사이의 값을 입력해주세요.";
      result = false;
    } else if (dupleSet.size !== 3) {
      message = "서로 다른 값을 입력해주세요";
      result = false;
    }

    return [result, message];
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
  const convertStringToNumberArray = (string) => {
    return string.split("").map((char) => +char);
  };

  const getStrikeAndBallCount = (input) => {
    const userInput = convertStringToNumberArray(input);
    const strikeCount = getStrikeCount(userInput, this.state.computer);
    const ballCount = getBallCount(userInput, this.state.computer);
    return [strikeCount, ballCount];
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
  };
}

module.exports = App;

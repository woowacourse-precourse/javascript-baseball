const MissionUtils = require("@woowacourse/mission-utils");
const { createComputerNumber } = require("./logic/ComputerNumber");
const {
  countStrikeAndBall,
  isUserWin,
  printGameResultMessage,
} = require("./logic/GameController");
const { validateUserNumber } = require("./logic/UserNumber");
const {
  START_NUMBER,
  END_NUMBER,
  START_GAME,
  REQUIRE_NUMBER,
  GAME_END,
  RETRY_OR_END,
  RETRY_VALUE,
  END_VALUE,
} = require("./utils/Constants");
const {
  getUserNumber,
  setUserInput,
  printMessage,
  deInitializationGame,
} = require("./utils/MissionUtils");

function App() {
  this.state = {
    userNumbers: "",
    computerNumbers: [],
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    turnGame();
  };

  const initlalizeGame = () => {
    this.state.computerNumbers = createComputerNumber(START_NUMBER, END_NUMBER);
    setUserInput(REQUIRE_NUMBER, getUserGameNumber);
  };

  const getUserGameNumber = (userInput) => {
    validateUserNumber(userInput);
    this.setState({
      userNumbers: userInput,
    });
  };

  const turnGame = () => {
    console.log(this.state.computerNumbers, this.state.userNumbers);
    const { computerNumbers, userNumbers } = this.state;
    const { countStrike, countBall } = countStrikeAndBall(
      computerNumbers,
      userNumbers
    );
    const userWin = isUserWin(countStrike);

    printGameResultMessage(countStrike, countBall);
    if (userWin) {
      printMessage(GAME_END);
      printMessage(RETRY_OR_END);
      setUserInput("", getUserRetryOrEndNumber);
    } else {
      setUserInput(REQUIRE_NUMBER, getUserGameNumber);
    }
  };

  const getUserRetryOrEndNumber = (userInput) => {
    if (userInput === RETRY_VALUE) {
      initlalizeGame();
    } else if (userInput === END_VALUE) {
      deInitializationGame();
    } else {
      throw new Error("게임 종료");
    }
  };

  this.play = () => {
    MissionUtils.Console.print(START_GAME);
    initlalizeGame();
  };
}

module.exports = App;

// 삭제 예정
const app = new App();
app.play();

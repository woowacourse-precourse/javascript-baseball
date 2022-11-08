const MissionUtils = require("@woowacourse/mission-utils");
const {
  START_NUMBER,
  END_NUMBER,
  START_GAME,
  REQUIRE_NUMBER,
  GAME_END,
  RETRY_OR_END,
} = require("./utils/Constants");
const {
  createComputerNumber,
  getUserNumber,
  setUserInput,
  validateUserNumber,
  countStrikeAndBall,
  isUserWin,
  printGameResultMessage,
  printMessage,
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
    } else {
      setUserInput(REQUIRE_NUMBER, getUserGameNumber);
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

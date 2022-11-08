const MissionUtils = require("@woowacourse/mission-utils");
const {
  START_NUMBER,
  END_NUMBER,
  START_GAME,
  REQUIRE_NUMBER,
} = require("./utils/Constants");
const {
  createComputerNumber,
  getUserNumber,
  setUserInput,
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

  this.play = () => {
    MissionUtils.Console.print(START_GAME);
    initlalizeGame();
  };
}

module.exports = App;

// 삭제 예정
const app = new App();
app.play();

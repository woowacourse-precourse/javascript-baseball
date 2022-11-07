const MissionUtils = require("@woowacourse/mission-utils");
const ValidationCheck = require('./ValidationCheck');

const RESTART = '1';
const GAME_START_MESSAGE = '숫자 야구 게임을 시작합니다.';
const GAME_FINISH_MESSAGE = '숫자 야구 게임을 종료합니다.';
const ENTER_YOUR_NUMBER_MESSAGE = '숫자를 입력해주세요 : ';
const ZERO_SCORE_MESSAGE = '낫싱';
const BALL_MESSAGE = '볼';
const STRIKE_MESSAGE = '스트라이크';
const THREE_STRIKE_MESSAGE = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
const ANSWER_RESTART_OR_FINISH ='게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n';
const INPUT_ERROR_MESSAGE = 'Input is invalid';

class App {
  static printGameStart() {
    MissionUtils.Console.print(GAME_START_MESSAGE);
  }

  static getComputerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join('');
  }

  static calculateScore(computerNum, userInput) {
    const computerNumArr = [...computerNum];
    const userInputArr = [...userInput];
    let score = { ball: 0, strike: 0, };

    for (let idx = 0; idx < userInputArr.length; idx++) {
      if (computerNumArr[idx] === userInputArr[idx]){
        score.strike = score.strike + 1;
        continue;
      }
      if (computerNumArr.includes(userInputArr[idx])) {
        score.ball = score.ball + 1;
      }
    }
    return score;
  }

  static printScoreResult(score) {
    let resultMessage;
    if (ValidationCheck.isZeroScore(score)) resultMessage = ZERO_SCORE_MESSAGE;
    if (score.ball > 0 && score.strike > 0) resultMessage = `${score.ball}${BALL_MESSAGE} ${score.strike}${STRIKE_MESSAGE}`;
    if (score.ball > 0 && score.strike === 0) resultMessage = `${score.ball}${BALL_MESSAGE}`;
    if (score.ball === 0 && score.strike > 0) resultMessage = `${score.strike}${STRIKE_MESSAGE}`;
    MissionUtils.Console.print(resultMessage);
  }

  static playGame(computerNum) {
    let score;

    MissionUtils.Console.readLine(ENTER_YOUR_NUMBER_MESSAGE, (userInput) => {
      // 사용자가 잘못된 값을 입력한 경우 애플리케이션 종료
      if (!ValidationCheck.isCorrectInput(userInput)) throw new Error(INPUT_ERROR_MESSAGE)

      score = App.calculateScore(computerNum, userInput);

      App.printScoreResult(score);
      
      if (ValidationCheck.isThreeStrike(score)) {
        MissionUtils.Console.print(THREE_STRIKE_MESSAGE);
        MissionUtils.Console.readLine(ANSWER_RESTART_OR_FINISH, (selectInput) => {
            if (!ValidationCheck.isOneOrTwo(selectInput)) throw new Error(INPUT_ERROR_MESSAGE)

            if (selectInput === RESTART) {
              App.restartGame();
              return;
            }
            
            App.finishGame();
        });
      }

      if (!ValidationCheck.isThreeStrike(score)) {
        App.playGame(computerNum);
        return;
      }
    });
  }

  static restartGame() {
    const computerNum = App.getComputerNumber();
    App.playGame(computerNum);
    return;
  }

  static finishGame() {
    MissionUtils.Console.print(GAME_FINISH_MESSAGE);
    MissionUtils.Console.close();
  }

  play() {
    App.printGameStart();
    const computerNum = App.getComputerNumber();
    App.playGame(computerNum);
  }
}

const app = new App();
app.play();

module.exports = App;

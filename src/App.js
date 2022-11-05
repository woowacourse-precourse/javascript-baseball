const { print, readLine, close, pickNumberInRange } = require("./Utils");
const { checkGuessInput, checkRestartOrQuitInput } = require("./Validation");
const calculateScore = require("./CalculateScore");
const scoreToJudgeMessageMap = require("./scoreToMessageMap");

class App {
  #nbrOfComputer;

  #nbrOfTryGuess;

  #message;

  constructor() {
    this.#nbrOfComputer = [];
    this.#nbrOfTryGuess = [];
    this.#message = {
      START: "숫자 야구 게임을 시작합니다.",
      ASK_TRY_GUESS: "숫자를 입력해주세요 : ",
      CLEAR: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
      ASK_RESTART_OR_QUIT:
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
    };
  }

  play() {
    this.#gameStart();
  }

  #gameStart() {
    print(this.#message.START);
    this.#setNbrOfComputer();
    this.#tryGuess();
  }

  #setNbrOfComputer() {
    this.#nbrOfComputer = [];
    let tempNumber;

    while (this.#nbrOfComputer.length < 3) {
      tempNumber = pickNumberInRange(1, 9);
      if (!this.#nbrOfComputer.includes(tempNumber)) {
        this.#nbrOfComputer.push(tempNumber);
      }
    }
  }

  #tryGuess() {
    readLine(this.#message.ASK_TRY_GUESS, (answer) => {
      this.#setNbrOfTryGuess(answer);

      const score = calculateScore(this.#nbrOfComputer, this.#nbrOfTryGuess);
      scoreToJudgeMessageMap.setProperty({ ...score });
      print(scoreToJudgeMessageMap.getJudgeMessage());

      if (scoreToJudgeMessageMap.strikeCount === 3) this.#gameClear();
      else this.#tryGuess();
    });
  }

  #setNbrOfTryGuess(answer) {
    checkGuessInput(answer);

    this.#nbrOfTryGuess = answer.split("").map((nbr) => parseInt(nbr, 10));
  }

  #gameClear() {
    print(this.#message.CLEAR);
    this.#askRestartOrQuit();
  }

  #askRestartOrQuit() {
    readLine(this.#message.ASK_RESTART_OR_QUIT, (answer) => {
      checkRestartOrQuitInput(answer);

      if (answer === "1") this.#gameStart();
      else close();
    });
  }
}

module.exports = App;

const app = new App();
app.play();

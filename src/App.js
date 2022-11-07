const { print, readLine, close, pickNumberInRange } = require("./Utils");
const { checkGuessInput, checkRestartOrQuitInput } = require("./Validation");
const calculateScore = require("./CalculateScore");
const scoreToJudgeMessageMap = require("./ScoreToJudgeMessageMap");

class App {
  #numberOfComputer;

  #numberOfTryGuess;

  #message;

  #score;

  constructor() {
    this.#numberOfComputer = [];
    this.#numberOfTryGuess = [];
    this.#message = {
      START: "숫자 야구 게임을 시작합니다.",
      ASK_TRY_GUESS: "숫자를 입력해주세요 : ",
      CLEAR: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
      ASK_RESTART_OR_QUIT:
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
    };
    this.#score = { ballCount: 0, strikeCount: 0, isNothing: false };
  }

  play() {
    print(this.#message.START);
    this.#gameStart();
  }

  #gameStart() {
    this.#setNbrOfComputer();
    this.#tryGuess();
  }

  #setNbrOfComputer() {
    const nbrOfComputer = [];
    let tempNumber;

    while (nbrOfComputer.length < 3) {
      tempNumber = pickNumberInRange(1, 9);
      if (!nbrOfComputer.includes(tempNumber)) nbrOfComputer.push(tempNumber);
    }
    this.#numberOfComputer = [...nbrOfComputer];
  }

  #tryGuess() {
    readLine(this.#message.ASK_TRY_GUESS, (answer) => {
      this.#judge(answer);
    });
  }

  #judge(answer) {
    this.#setScore(answer);

    print(scoreToJudgeMessageMap.getJudgeMessage({ ...this.#score }));

    if (this.#isThreeStrike()) this.#gameClear();
    else this.#tryGuess();
  }

  #setScore(answer) {
    this.#setNbrOfTryGuess(answer);

    this.#score = calculateScore(
      this.#numberOfComputer,
      this.#numberOfTryGuess,
    );
  }

  #setNbrOfTryGuess(answer) {
    checkGuessInput(answer);

    this.#numberOfTryGuess = answer.split("").map((nbr) => parseInt(nbr, 10));
  }

  #isThreeStrike() {
    return this.#score.strikeCount === 3;
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

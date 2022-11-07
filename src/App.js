const MissionUtils = require("@woowacourse/mission-utils");
const { Random, Console } = MissionUtils;

class App {
  #GAME_MSG = {
    START: "숫자 야구 게임을 시작합니다.",
    PLEASE_INPUT: "숫자를 입력해주세요 : ",
    ASK_RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
    QUIT: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  };
  #GAME_RESULT = { STRIKE: "스트라이크", BALL: "볼", NOTHING: "낫싱" };
  #ERROR_MSG = {
    ONLY_NUMBERS: "숫자(1이상 9이하)만 입력해주세요.",
    INVALID_LENGTH: "반드시 3개의 숫자를 입력해주세요.",
    DUPLICATE_NUMBERS: "서로 다른 3개의 숫자를 입력해주세요.",
    ONLY_ONE_OR_TWO: "1 또는 2를 입력해주세요.",
  };
  #CORRECT_ANSWER = "3스트라이크";
  #EXIT_APP = "게임 종료";
  #LIMIT_CNT = 3;
  #computerNumbers;
  constructor() {
    this.#computerNumbers = null;
  }
  #getComputerNumbers() {
    return this.#computerNumbers;
  }
  #setComputerNumbers(arr) {
    this.#computerNumbers = arr;
  }
  #initComputerNumbers(arr = []) {
    if (arr.length === this.#LIMIT_CNT) {
      this.#setComputerNumbers(arr);
      return;
    }
    const randNo = Random.pickNumberInRange(1, 9);
    arr.includes(randNo) || arr.push(randNo);
    this.#initComputerNumbers(arr);
  }
  #takeUserNumbersInput() {
    Console.readLine(this.#GAME_MSG.PLEASE_INPUT, (input) => {
      this.#handleUserNumbers(input);
    });
  }
  #handleUserNumbers(input) {
    const checkIsCorrect = (str) => str === this.#CORRECT_ANSWER;

    const userNumbers = input.trim().split("").map(Number);
    this.checkUserNumbersInputValidity(userNumbers);
    const computerNumbers = this.#getComputerNumbers();
    const ballStrikeArr = this.compareEachNumbers(computerNumbers, userNumbers);
    checkIsCorrect(this.#getResult(ballStrikeArr))
      ? this.#askRestart()
      : this.#takeUserNumbersInput();
  }
  #getResult([ballCnt, strikeCnt]) {
    const helpArr = [
      [ballCnt, this.#GAME_RESULT.BALL],
      [strikeCnt, this.#GAME_RESULT.STRIKE],
    ];
    const filteredArr = helpArr.filter(([cnt]) => cnt > 0);
    const rstArr = filteredArr.map((line) => line.join(""));
    const rstStr = rstArr.join(" ") || this.#GAME_RESULT.NOTHING;
    Console.print(rstStr);
    return rstStr;
  }
  #askRestart() {
    Console.readLine(this.#GAME_MSG.ASK_RESTART, (input) => {
      const restartNo = +input.trim();
      this.checkRestartNumberValidity(restartNo);
      restartNo === 1 ? this.#startGame() : this.#exitApp();
    });
  }
  #exitApp() {
    Console.print(this.#EXIT_APP);
    Console.close();
  }
  #startGame() {
    this.#initComputerNumbers();
    this.#takeUserNumbersInput();
  }
  checkUnique(arr) {
    return new Set(arr).size === this.#LIMIT_CNT;
  }
  checkUserNumbersInputValidity(arr) {
    if (!arr.every((el) => Number.isInteger(el) && el <= 9 && el >= 1))
      throw this.#ERROR_MSG.ONLY_NUMBERS;
    if (arr.length !== this.#LIMIT_CNT) throw this.#ERROR_MSG.INVALID_LENGTH;
    if (!this.checkUnique(arr)) throw this.#ERROR_MSG.DUPLICATE_NUMBERS;
  }
  checkRestartNumberValidity(restart) {
    if (restart !== 1 && restart !== 2) throw this.#ERROR_MSG.ONLY_ONE_OR_TWO;
  }
  compareEachNumbers(cmpts, usrs) {
    const getBallStrikeCnt = ([ballCnt, strikeCnt], usr, i) => {
      usr === cmpts[i] ? strikeCnt++ : cmpts.includes(usr) && ballCnt++;
      return [ballCnt, strikeCnt];
    };
    return usrs.reduce(getBallStrikeCnt, [0, 0]);
  }
  play() {
    Console.print(this.#GAME_MSG.START);
    this.#startGame();
  }
}

module.exports = App;

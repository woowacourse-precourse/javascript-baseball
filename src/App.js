const MissionUtils = require("@woowacourse/mission-utils");
const { Random, Console } = MissionUtils;

const GAME_MSG = {
  start: "숫자 야구 게임을 시작합니다.",
  pleaseInput: "숫자를 입력해주세요 : ",
  askRestart: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  correct: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
};
const GAME_RESULT = { strike: "스트라이크", ball: "볼", nothing: "낫싱" };
const ERROR_MSG = {
  onlyNumbers: "숫자(1이상 9이하)만 입력해주세요.",
  invalidLength: "반드시 3개의 숫자를 입력해주세요.",
  duplicateNumbers: "서로 다른 3개의 숫자를 입력해주세요.",
  onlyOneOrTwo: "1 또는 2를 입력해주세요.",
};
const CORRECT_ANSWER = "3스트라이크";
const LIMIT_CNT = 3;

class App {
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
    if (arr.length === LIMIT_CNT) {
      this.#setComputerNumbers(arr);
      return;
    }
    const randNo = Random.pickNumberInRange(1, 9);
    arr.includes(randNo) || arr.push(randNo);
    this.#initComputerNumbers(arr);
  }
  #takeUserNumbersInput() {
    Console.readLine(GAME_MSG.pleaseInput, (input) => {
      this.#handleUserNumbers(input);
    });
  }
  #handleUserNumbers(input) {
    const checkIsCorrect = (str) => str === CORRECT_ANSWER;

    const userNumbers = input.trim().split("").map(Number);
    this.checkUserNumbersInputValidity(userNumbers);
    const computerNumbers = this.#getComputerNumbers();
    const ballStrikeArr = this.compareEachNumbers(computerNumbers, userNumbers);
    checkIsCorrect(this.#getResult(ballStrikeArr))
      ? (Console.print(GAME_MSG.correct), this.#askRestart())
      : this.#takeUserNumbersInput();
  }
  #getResult([ballCnt, strikeCnt]) {
    const helpArr = [
      [ballCnt, GAME_RESULT.ball],
      [strikeCnt, GAME_RESULT.strike],
    ];
    const filteredArr = helpArr.filter(([cnt]) => cnt > 0);
    const rstArr = filteredArr.map((line) => line.join(""));
    const rstStr = rstArr.join(" ") || GAME_RESULT.nothing;
    Console.print(rstStr);
    return rstStr;
  }
  #askRestart() {
    Console.readLine(GAME_MSG.askRestart, (input) => {
      const restartNo = +input.trim();
      this.checkRestartNumberValidity(restartNo);
      restartNo === 1 ? this.#startGame() : this.#exitApp();
    });
  }
  #exitApp() {
    Console.close();
  }
  #startGame() {
    this.#initComputerNumbers();
    this.#takeUserNumbersInput();
  }
  checkUnique(arr) {
    return new Set(arr).size === LIMIT_CNT;
  }
  checkUserNumbersInputValidity(arr) {
    if (!arr.every((el) => Number.isInteger(el) && el <= 9 && el >= 1))
      throw ERROR_MSG.onlyNumbers;
    if (arr.length !== LIMIT_CNT) throw ERROR_MSG.invalidLength;
    if (!this.checkUnique(arr)) throw ERROR_MSG.duplicateNumbers;
  }
  checkRestartNumberValidity(restart) {
    if (restart !== 1 && restart !== 2) throw ERROR_MSG.onlyOneOrTwo;
  }
  compareEachNumbers(cmpts, usrs) {
    const getBallStrikeCnt = ([ballCnt, strikeCnt], usr, i) => {
      usr === cmpts[i] ? strikeCnt++ : cmpts.includes(usr) && ballCnt++;
      return [ballCnt, strikeCnt];
    };
    return usrs.reduce(getBallStrikeCnt, [0, 0]);
  }
  play() {
    Console.print(GAME_MSG.start);
    this.#startGame();
  }
}

module.exports = App;

const MissionUtils = require("@woowacourse/mission-utils");
const { Random, Console } = MissionUtils;

class App {
  #GAME_MSG = {
    START: "숫자 야구 게임을 시작합니다.",
    PLEASE_INPUT: "숫자를 입력해주세요 : ",
    ASK_RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    QUIT: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  };
  #GAME_RESULT = { STRIKE: "스트라이크", BALL: "볼", NOTHING: "낫싱" };
  #ERROR_MSG = {
    ONLY_NUMBERS: "숫자(1이상 9이하)만 입력해주세요.",
    INVALID_LENGTH: "반드시 3개의 숫자를 입력해주세요.",
    DUPLICATE_NUMBERS: "서로 다른 3개의 숫자를 입력해주세요.",
    ONLY_ONE_OR_TWO: "1 또는 2를 입력해주세요.",
  };
  #computerNumbers;
  #isUserWon;
  #isStartGame;
  constructor() {
    this.userNumbers = null;
    this.#computerNumbers = null;
    this.#isUserWon = false;
    this.#isStartGame = true;
  }
  #getComputerNumbers() {
    return this.#computerNumbers;
  }
  #setComputerNumbers(arr) {
    this.#computerNumbers = arr;
  }
  getIsUserWon() {
    return this.#isUserWon;
  }
  #setIsUserWon(bool) {
    this.#isUserWon = bool;
  }
  getIsStartGame() {
    return this.#isStartGame;
  }
  #setIsStartGame(bool) {
    this.#isStartGame = bool;
  }
  #initComputerNumbers(arr = [], randNo = Random.pickNumberInRange(1, 9)) {
    arr.length === 3
      ? this.#setComputerNumbers(arr)
      : (arr.includes(randNo) || arr.push(randNo),
        this.#initComputerNumbers(arr));
  }
  #takeUserNumbersInput() {
    const checkUnique = (arr) => new Set(arr).size === 3;
    const checkUserNumbersInputValidity = (arr) => {
      if (arr.every((el) => !Number.isInteger(el) || el > 9 || el < 1))
        throw this.#ERROR_MSG.ONLY_NUMBERS;
      if (arr.length !== 3) throw this.#ERROR_MSG.INVALID_LENGTH;
      if (!checkUnique(arr)) throw this.#ERROR_MSG.DUPLICATE_NUMBERS;
    };
    Console.readLine(this.#GAME_MSG.PLEASE_INPUT, (input) => {
      const inputNumberArr = input.trim().split("").map(Number);
      try {
        checkUserNumbersInputValidity(inputNumberArr);
        this.userNumbers = inputNumberArr;
      } catch (e) {
        this.#handleException(e);
      }
    });
  }
  #compareEachNumbers(computerNumbers, userNumbers) {
    return userNumbers.reduce(
      ([ballCnt, strikeCnt], userNo, i) => {
        userNo === computerNumbers[i]
          ? strikeCnt++
          : computerNumbers.includes(userNo) && ballCnt++;
        return [ballCnt, strikeCnt];
      },
      [0, 0]
    );
  }
  #getResult([ballCnt, strikeCnt]) {
    return ballCnt === 0 && strikeCnt === 0
      ? this.#GAME_RESULT.NOTHING
      : [
          [ballCnt, this.#GAME_RESULT.BALL],
          [strikeCnt, this.#GAME_RESULT.STRIKE],
        ]
          .filter(([cnt]) => cnt > 0)
          .map((line) => line.join(""))
          .join(" ");
  }
  #printResult(str) {
    Console.print(str);
  }
  #handleGameOver(str) {
    this.#setIsUserWon(str === "3스트라이크");
  }
  #askRestart() {
    Console.readLine(this.#GAME_MSG.ASK_RESTART, (input) => {
      try {
        const trimmed = +input.trim();
        if (trimmed !== 1 && trimmed !== 2)
          throw this.#ERROR_MSG.ONLY_ONE_OR_TWO;
        this.#setIsStartGame(trimmed === 1);
      } catch (e) {
        this.#handleException(e);
      }
    });
  }
  #handleException(error) {
    Console.print(error);
    this.#exitApp();
  }
  #exitApp() {
    Console.close();
  }
  #continueGame() {
    this.#takeUserNumbersInput();
    const rstArr = this.#compareEachNumbers(
      this.#getComputerNumbers(),
      this.userNumbers
    );
    const rstStr = this.#getResult(rstArr);
    this.#printResult(rstStr);
    this.#handleGameOver(rstStr);
  }
  play() {}
}

module.exports = App;

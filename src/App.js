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
  #initComputerNumbers(arr = [], randNo = 0) {
    arr.length === 3
      ? this.#setComputerNumbers(arr)
      : ((randNo = Random.pickNumberInRange(1, 9)),
        arr.includes(randNo) || arr.push(randNo),
        this.#initComputerNumbers(arr));
  }
  #takeUserNumbersInput() {
    const checkUnique = (arr) => new Set(arr).size === 3;
    const checkUserNumbersInputValidity = (arr) => {
      if (!arr.every((el) => Number.isInteger(el) && el <= 9 && el >= 1))
        throw this.#ERROR_MSG.ONLY_NUMBERS;
      if (arr.length !== 3) throw this.#ERROR_MSG.INVALID_LENGTH;
      if (!checkUnique(arr)) throw this.#ERROR_MSG.DUPLICATE_NUMBERS;
    };
    Console.readLine(this.#GAME_MSG.PLEASE_INPUT, (input) => {
      const userNumbers = input.trim().split("").map(Number);
      checkUserNumbersInputValidity(userNumbers);
      const rstArr = this.#compareEachNumbers(
        this.#getComputerNumbers(),
        userNumbers
      );
      this.#getResult(rstArr) === this.#CORRECT_ANSWER
        ? this.#askRestart()
        : this.#takeUserNumbersInput();
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
    const rstStr =
      ballCnt === 0 && strikeCnt === 0
        ? this.#GAME_RESULT.NOTHING
        : [
            [ballCnt, this.#GAME_RESULT.BALL],
            [strikeCnt, this.#GAME_RESULT.STRIKE],
          ]
            .filter(([cnt]) => cnt > 0)
            .map((line) => line.join(""))
            .join(" ");
    Console.print(rstStr);
    return rstStr.trim();
  }
  #askRestart() {
    Console.readLine(this.#GAME_MSG.ASK_RESTART, (input) => {
      const restartNo = +input.trim();

      if (restartNo !== 1 && restartNo !== 2)
        throw this.#ERROR_MSG.ONLY_ONE_OR_TWO;
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
  play() {
    Console.print(this.#GAME_MSG.START);
    this.#startGame();
  }
}

module.exports = App;

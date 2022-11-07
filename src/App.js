const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;
const MESSAGE = {
  START: "숫자 야구 게임을 시작합니다.",
  END: "3개의 숫자를 모두 맞히셨습니다. 게임 종료",
  RESTART: "게임을 새로 시작하려면 1, 종료하려면 2 를 입력하세요.",
  INPUT: "숫자를 입력해주세요 : ",
  ERROR: "잘못된 값을 입력하셨습니다.",
};

class App {
  constructor() {
    this.gameSet = {};
    this.answer = [];
    this.round = 0;
    this.playing = 0;
  }

  gameSetting(min = 1, max = 9, length = 3) {
    return {
      NUM_MIN: min,
      NUM_MAX: max,
      NUM_LENGTH: length,
    };
  }

  choiceNumber() {
    const answer = [];
    const minNumber = this.gameSet.NUM_MIN;
    const maxNumber = this.gameSet.NUM_MAX;
    const lengthNumber = this.gameSet.NUM_LENGTH;

    this.answer = answer;

    while (answer.length < lengthNumber) {
      const randomNumber = Random.pickNumberInRange(minNumber, maxNumber);
      answer.includes(randomNumber) ? answer : answer.push(randomNumber);
    }
  }

  printMsg(msg) {
    Console.print(msg);
  }

  inputNumber(msg) {
    Console.readLine(msg, (input) => {
      this.isInputValid(input);
    });
  }

  isInputValid(input) {
    const isValid = input;

    if (isValid === "1" || isValid === "2") return this.isGameEnd(isValid);

    const lengthValid = this.gameSet.NUM_LENGTH;
    if (isValid.length !== lengthValid) this.error();

    const numberRangeMin = this.gameSet.NUM_MIN;
    const numberRangeMax = this.gameSet.NUM_MAX;
    const numberRange = new RegExp(`[^${numberRangeMin}-${numberRangeMax}]`, "g");
    const isNumberValid = [];
    isValid.split("").forEach((number) => {
      if (numberRange.test(number)) return this.error();
      isNumberValid.push(Number(number));
    });

    this.inputMatch(input);
  }

  inputMatch(input) {
    const playerInput = input;
    const answer = this.answer;

    let ball = 0;
    let strike = 0;
    let msg = "";

    answer.forEach((number, index) => {
      if (playerInput.indexOf(number) === index) {
        strike++;
      } else if (playerInput.includes(number)) {
        ball++;
      }
    });

    if (ball === 0 && strike === 0) {
      this.printMsg("낫싱");
      return this.inputNumber(MESSAGE.INPUT);
    }
    if (strike === this.gameSet.NUM_LENGTH) return this.gameEnd(strike);
    if (ball !== 0) msg += `${ball}볼`;
    if (strike !== 0) msg += ` ${strike}스트라이크`;

    this.printMsg(msg);
    this.inputNumber(MESSAGE.INPUT);
  }

  isGameEnd(endNumber) {
    const isPlaying = this.playing;

    if (isPlaying === 1) return this.error();

    if (endNumber === "1") return this.reStart();
    if (endNumber === "2") return Console.close();
  }

  gameStart() {
    this.gameSet = this.gameSetting();
    this.printMsg(MESSAGE.START);
  }

  gameEnd(strike) {
    this.playing = 0;
    this.printMsg(`${strike}스트라이크`);
    this.printMsg(MESSAGE.END);
    this.inputNumber(MESSAGE.RESTART);
  }

  reStart() {
    this.round++;
    this.play();
  }

  play() {
    this.playing = 1;

    if (this.round == 0) this.gameStart();

    this.choiceNumber();
    this.inputNumber(MESSAGE.INPUT);
  }

  error() {
    this.round = 0;
    Console.close();
    throw new Error(MESSAGE.ERROR);
  }
}

const app = new App();
app.play();

module.exports = App;

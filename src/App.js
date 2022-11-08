const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const { makeTarget, handleData, isValidInput, printResult } = require("./util");

class App {

  #targetArr;

  constructor() {
    this.#targetArr = [];
    this.countArr = []; // [strike,ball] 형태
  }

  initFields() {
    this.#targetArr = [];
    this.countArr = [];
  }

  setCountArr(array) {
    this.countArr = array;
  }

  getCountArr() {
    return [...this.countArr];
  }

  readData(targetArr) {
    let isAnswer = false;

    Console.readLine("숫자를 입력해주세요 : ", (input) => {
      isValidInput(input);
      const inputArr = [...input].map(Number);
      const handleResult = handleData(inputArr, targetArr);
      this.setCountArr(handleResult);

      isAnswer = printResult(this.getCountArr());
      if (!isAnswer) this.readData(targetArr);
      else {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임종료");
        this.isRepeatGame();
      }
    });
  }

  isRepeatGame() {
    Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요 : ", (input) => {
      if (input === "1") this.playGame();
      else if (input === "2") {
        Console.print("게임 종료");
        Console.close();
      }
      else {
        throw new Error("1,2 이외의 숫자가 입력되었습니다.");
      }
    });
  }

  playGame() {
    this.initFields();
    this.#targetArr = makeTarget();
    console.log(this.#targetArr);
    this.readData(this.#targetArr);
  }

  play() {
    Console.print('숫자 야구게임을 시작합니다.');
    this.playGame();
  }
}
// const app = new App();
// app.play();

module.exports = App;

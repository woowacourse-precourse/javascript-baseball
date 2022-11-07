const { Console } = require("./Utilitys");

class System {
  constructor() {
    this.numberArray;
  }

  set setNumber(numberArray) {
    this.numberArray = numberArray;
  }

  get getNumber() {
    return this.numberArray;
  }

  getStarted() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }
}

module.exports = System;

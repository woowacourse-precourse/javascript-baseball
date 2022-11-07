const { Console } = require("@woowacourse/mission-utils");
const Computer = require("./Computer");

/*
1. App
 - Property
  - Controller 클래스 인스턴스
  - Computer 클래스 인스턴스
 - Method
  - 게임 시작 기능
  - 게임 재시작 기능
  - 게임 종료 기능
*/
class App {
  constructor() {
    this._computer = new Computer();
    /* new Controller */
  }

  play() {

  }

  restart() {

  }

  finish() {
    Console.close();
  }
}

Console.print('hello world');
// Console.close();

module.exports = App;

class App {
  constructor() {
    this.printGreeting();
    this.makeRandomNumber();
  }

  printGreeting() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  makeRandomNumber() {
    let randomNumSet = new Set();
    while (3) {
      randomNumSet.add(Random.pickNumbersInRange(1, 9));
    }
    return Array.from(randomNumSet);
  }

  play() {}
}

module.exports = App;

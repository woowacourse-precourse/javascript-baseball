class App {
  constructor() {
    this.answer = this.makeAnswer();
  }

  makeAnswer() {
    const answer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer;
  }
  play() {}
}

module.exports = App;

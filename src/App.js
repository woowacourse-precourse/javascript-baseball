const MissionUtils = require('@woowacourse/mission-utils');

function createAnswer() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer.join('');
}
class App {
  play() {
    this.answer = createAnswer();
  }
}
const app = new App();
app.play();

module.exports = App;

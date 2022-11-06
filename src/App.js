const MissionUtils = require('@woowacourse/mission-utils');

class App {
  user_number;
  computer_number;

  getRandomNumber() {
    let computer_arr = [];
    while (computer_arr.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer_arr.includes(randomNumber)) {
        computer_arr.push(randomNumber);
      }
    }
    this.computer_number = computer_arr.join('');
  }
  play() {}
}

module.exports = App;

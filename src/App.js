class App {
  play() {}

  get_computer_number() {
    let computer_number = [];
    while (computer_number.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer_number.includes(number)) computer_number.push(number);
         
    }
    return computer_number;
  }

}

module.exports = App;

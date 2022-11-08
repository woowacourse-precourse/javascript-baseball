class App {

  play() {
    let computerNumber = new Set();
    while (computerNumber.size < 3) {
      computerNumber.add(MissionUtils.Random.pickNumberInRange(1, 9))
    }
    computerNumber = Array.from(computerNumber)
    console.log(computerNumber)
  }
}

module.exports = App;

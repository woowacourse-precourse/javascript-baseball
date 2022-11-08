class App {
  play() {}
  makeComputerNumber() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    let computerNumberSet = new Set();

    while (computerNumberSet.size < 3) {
      let randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (randomNumber !== 0) computerNumberSet.add(randomNumber);
    }
    return [...computerNumberSet];
  }

}

module.exports = App;

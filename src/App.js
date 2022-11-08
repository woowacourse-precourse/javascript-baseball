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

  checkResult(userNumber, computerNumber) {
    let checkCount = [0, 0];
    
    if (userNumber.length !== 3) throw new Error("잘못된 입력입니다.");

    for(let i = 0; i < 3; i++) {
      let eachNumber = +userNumber[i];
      if (!(1 <= eachNumber && eachNumber <= 9)) throw new Error("잘못된 입력입니다.");
      else if (computerNumber[i] == eachNumber) checkCount[1]++;
      else if (computerNumber.indexOf(eachNumber) !== -1) checkCount[0]++;
    }

    return checkCount;

  }
}

module.exports = App;

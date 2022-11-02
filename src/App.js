class App {
  play() {}
}

function setComputerNumber() {
  const computerNumber = [];
  while (computerNumber.length < 3) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1,9);
    if(!computerNumber.includes(randomNumber)){
      computerNumber.push(randomNumber);
    }
  }
  return computerNumber;
}

module.exports = App;

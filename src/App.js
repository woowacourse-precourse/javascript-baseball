class App {
  play() {}
}

function setComputerNumber() {
  let computerNumber = [];
  while (computerNumber.length < 3) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1,9);
    if(!computerNumber.includes(randomNumber)){
      computerNumber.push(randomNumber);
    }
  }
  return computerNumber;
}

function setUserNumber() {
  let userNumber;
  const readline = require('readline');
  const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  userInput.question('숫자 3자리를 입력해주세요 : ', num => {
    userNumber = num;
    userInput.close();
  })

  return userNumber;
}

module.exports = App;

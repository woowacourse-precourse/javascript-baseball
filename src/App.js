const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const computerNumber = setComputerNumber();
    const userNumber = setUserNumber();
    let compareResult = compareNumbers(computerNumber, userNumber);
  }
}

const app = new App();
app.play();

function setComputerNumber() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }

  return computer;
}

function setUserNumber() {
  let userNumber = "";
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
    userNumber = answer;
  })

  return userNumber;
}

function compareNumbers(computerNumber, userNumber) {
  let ball = 0;
  let strike = 0;
  let result = "";
  for (let i = 0; i < computerNumber.length; i++) {
    let num = Number(userNumber[i]);
    if (computerNumber[i] == num) strike++;
    if ((computerNumber[i] != num) && computerNumber.includes(num)) ball++;
  }

  if (ball === 0 && strike === 0) result = "낫싱";
  if (ball === 0 && strike !== 0) result = `${strike}스트라이크`;
  if (ball !== 0 && strike === 0) result = `${ball}볼`;
  if (ball !== 0 && strike !== 0) result = `${ball}볼 ${strike}스트라이크`;

  return result;
}

module.exports = App;

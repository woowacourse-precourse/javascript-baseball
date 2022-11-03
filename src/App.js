const MissionUtils = require("@woowacourse/mission-utils");

function gameStart() {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
}

function userInput(answer) {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
    let strikeNum = strikeCalculation(answer, number);
  });
}

function strikeCalculation(answer, userNumber) {
  let count = 0;
  for (let i = 0; i < 3; i++) {
    if (answer[i] == userNumber[i]) count++;
  }
  return count;
}

function randomNumberSetting() {
  let randomNumberArray = [];
  while (randomNumberArray.length < 3) {
    let randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (randomNumberArray.includes(randomNumber)) continue;
    randomNumberArray.push(randomNumber);
  }
  console.log(randomNumberArray);
  return randomNumberArray;
}

class App {
  play() {
    let answer = randomNumberSetting();
    gameStart();
    userInput(answer);
  }
}

const app = new App();

app.play();

module.exports = App;

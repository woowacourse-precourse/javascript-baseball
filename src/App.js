const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    const computerAnswer = makeComputerAnswer();
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userMessage) => {
      const userMessageArray = stringToArray(userMessage).map(Number);
      playBaseballGame(userMessageArray, computerAnswer);
    });
  }
}

function makeComputerAnswer() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

function stringToArray(string) {
  let array = [];
  for (let i = 0; i < string.length; i++) {
    array.push(string[i]);
  }
  return array;
}

function playBaseballGame(userMessage, computerAnswer) {
  const ballCount = checkBall(userMessage, computerAnswer);
  // const strike = checkStrike();
}

function checkBall(userMessage, computerAnswer) {
  const result = userMessage.filter((message) =>
    computerAnswer.includes(message)
  );
  return result.length;
}

module.exports = App;

const app = new App();
app.play();

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
  console.log('메세지:' + userMessage + '정답:' + computerAnswer);
  const ballCount = checkBall(userMessage, computerAnswer);
  const strikeCount = checkStrike(userMessage, computerAnswer);
  console.log('볼' + ballCount + '스트라이크' + strikeCount);
}

function checkBall(userMessage, computerAnswer) {
  const result = userMessage.filter((message) =>
    computerAnswer.includes(message)
  );
  return result.length;
}

function checkStrike(userMessage, computerAnswer) {
  const result = userMessage.filter(
    (message) =>
      computerAnswer.includes(message) &&
      computerAnswer.indexOf(message) === userMessage.indexOf(message)
  );
  return result;
}

module.exports = App;

const app = new App();
app.play();

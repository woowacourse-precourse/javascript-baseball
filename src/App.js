const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    const computerAnswer = makeComputerAnswer();
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userMessage) => {
      const userMessageArray = stringToArray(userMessage).map(Number);
      startBaseballGame(userMessageArray, computerAnswer);
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

function startBaseballGame(userMessage, computerAnswer) {
  const ballCount = checkBall(userMessage, computerAnswer);
  const strikeCount = checkStrike(userMessage, computerAnswer);
  playBaseballGame(ballCount, strikeCount, computerAnswer);
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
  return result.length;
}

function playBaseballGame(ballCount, strikeCount, computerAnswer) {
  if (strikeCount === 3) {
    gameClear(ballCount, strikeCount);
  }
  if (strikeCount !== 3) {
    gameNotCleared(ballCount, strikeCount, computerAnswer);
  }
}
function gameClear() {
  MissionUtils.Console.print('3스트라이크');
  MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  MissionUtils.Console.print(
    '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
  );
  playNewGameOrQuit();
}

function playNewGameOrQuit() {
  MissionUtils.Console.readLine('', (newGameOrQuit) => {
    const newOrQuit = stringToArray(newGameOrQuit).map(Number);
    if (newOrQuit == 1) {
      MissionUtils.Console.readLine(
        '숫자를 입력해주세요 : ',
        (newGameUserMessage) => {
          const newComputerAnswer = makeComputerAnswer();
          const userMessageArray =
            stringToArray(newGameUserMessage).map(Number);
          startBaseballGame(userMessageArray, newComputerAnswer);
        }
      );
    } else if (newOrQuit == 2) {
      return;
    }
  });
}

function gameNotCleared(ballCount, strikeCount, computerAnswer) {
  if (strikeCount > 0 && ballCount > strikeCount) {
    MissionUtils.Console.print(
      ballCount - strikeCount + '볼 ' + strikeCount + '스트라이크'
    );
  }
  if (strikeCount !== 0 && strikeCount == ballCount) {
    MissionUtils.Console.print(strikeCount + '스트라이크');
  }
  if (ballCount !== 0 && strikeCount == 0) {
    MissionUtils.Console.print(ballCount + '볼');
  } else {
    MissionUtils.Console.print('낫싱');
  }
  MissionUtils.Console.readLine(
    '숫자를 입력해주세요 : ',
    (newGameUserMessage) => {
      const userMessageArray = stringToArray(newGameUserMessage).map(Number);
      startBaseballGame(userMessageArray, computerAnswer);
    }
  );
}

module.exports = App;

const app = new App();
app.play();

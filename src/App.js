const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    startGame();
  }
}

let gameAnswerNumList;

const startGame = () => {
  gameAnswerNumList = createAnswerNumList();
  console.log(gameAnswerNumList)
  inputUserNum();
}


const createAnswerNumList = () => {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
}

const inputUserNum = () => {
  let userAnswerNumList;
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
    exceptionHandlingInputUserNum(answer);
    userAnswerNumList = stringToNumberInList(answer);

    let [ballCount, strikeCount] = getGameResult(gameAnswerNumList, userAnswerNumList);
    printGameResult(ballCount, strikeCount);

    if (isCorrectAnswer(ballCount, strikeCount)) {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      inputUserCommandRestartOrQuit();
      return;
    }

    inputUserNum();
  });
}

const exceptionHandlingInputUserNum = (answer) => {
  if (!is3Letters(answer)) {
    throw escape;
  }

  if (!isOnlyNumber(answer)) {
    throw escape;
  }

  if (!areEachDifferent(answer)) {
    throw escape;
  }
}

const isCorrectAnswer = (ballCount, strikeCount) => {
  return strikeCount === 3 && ballCount === 0;
}

const getGameResult = (answer, userAnswer) => {
  let ballCount = 0;
  let strikeCount = 0;

  userAnswer.forEach((num, index) => {
    if (answer[index] === num) {
      strikeCount += 1;
      return;
    }
    if (answer.includes(num)) {
      ballCount += 1
    }
  })

  return [ballCount, strikeCount]
}

const printGameResult = (ballCount, strikeCount) => {
  if (ballCount === 0 && strikeCount === 0) {
    MissionUtils.Console.print('낫싱');
    return;
  }
  if (ballCount === 0) {
    MissionUtils.Console.print(strikeCount + '스트라이크');
    return;
  }
  if (strikeCount === 0) {
    MissionUtils.Console.print(ballCount + '볼 ');
    return;
  }
  MissionUtils.Console.print(ballCount + '볼 ' + strikeCount + '스트라이크');
}

const COMMAND = {
  StartGame: 1,
  QuitGame: 2,
}
const inputUserCommandRestartOrQuit = () => {
  MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', executeUserCommandRestartOrQuit);
}

const executeUserCommandRestartOrQuit = (command) => {
  if (parseInt(command) === COMMAND.StartGame) {
    startGame();
    return;
  }
  if (parseInt(command) ===  COMMAND.QuitGame) {
    quitGame();
    return;
  }
  throw '[ERROR] input error';
}

module.exports = App;
const is3Letters = (numStr) => {
  return numStr.length === 3
}

const isOnlyNumber = (numStr) => {
  let check = /^[0-9]+$/;
  return check.test(numStr);
}

const areEachDifferent = (numStr) => {
  for (let i = 0; i < numStr.length; i++) {
    if (numStr.indexOf(numStr[i], i + 1) !== -1) {
      return false
    }
  }
  return true
}

const stringToNumberInList = (list) => {
  return list.split('').map((num) => {
    return parseInt(num);
  });
}


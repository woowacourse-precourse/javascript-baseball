const MissionUtils = require('@woowacourse/mission-utils');
const { getComputerNumber, strToIntArr, validUserInput } = require('./Utils');
const { getResult, winOrLose } = require('./Game');

class App {
  play() {
    const computerRandomNumber = getComputerNumber();
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    baseballGame(computerRandomNumber);
  }
}

function baseballGame(computerRandomNumber) {
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
    if (!validUserInput(input)) {
      throw new Error('사용자의 입력이 올바르지 않습니다.');
    }

    const userInputNumber = strToIntArr(input);
    const gameResult = getResult(computerRandomNumber, userInputNumber);
    const isWin = winOrLose(gameResult);

    if (isWin) {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      newGame();
    }
    baseballGame(computerRandomNumber);
  })
}

function newGame() {
  MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
  MissionUtils.Console.readLine('', (input) => {
    if (input == 2) {
      return MissionUtils.Console.close();
    }
    else if (input == 1) {
      const computerRandomNumber = getComputerNumber();
      baseballGame(computerRandomNumber);
    }
    else {
      throw new Error('올바르지 않은 입력입니다.');
    }
  })
}

module.exports = App;

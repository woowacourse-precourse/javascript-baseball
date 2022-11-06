const { Console } = require('@woowacourse/mission-utils');
const { validationNumbers } = require('./validation');
const { generateRandomNumbers } = require('./generateRandomNumbers');
const { pitchAnalysis } = require('./pitchAnalysis');

function gameStart(gameData) {
  const BUTTON = { restart: '1', exit: '2' };

  Console.readLine('숫자를 입력해주세요 : ', (inputNumber) => {
    const computerRandomNumbers = gameData.getComputerRandomNumbers();
    const userRandomNumbers = inputNumber
      .split('')
      .map((userNumber) => parseInt(userNumber, 10));
    if (!validationNumbers(userRandomNumbers)) {
      throw new Error('잘못된 값을 입력했습니다.');
    }

    pitchAnalysis(gameData, userRandomNumbers, computerRandomNumbers);

    if (!gameData.getThreeStrikeState()) {
      return gameStart(gameData);
    }

    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (commandNumber) => {
        if (
          !(commandNumber === BUTTON.restart || commandNumber === BUTTON.exit)
        ) {
          throw new Error('잘못된 값을 입력했습니다.');
        }
        if (commandNumber === BUTTON.restart) {
          gameData.setThreeStrikeState(false);
          return gameStart(generateRandomNumbers(gameData));
        }
        Console.close();
      }
    );
  });
}

exports.gameStart = gameStart;

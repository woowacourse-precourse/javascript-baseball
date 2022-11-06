const { Random, Console } = require('@woowacourse/mission-utils');
const { validateNumbers } = require('./errorHandling');
const { compareNumbers } = require('./compareNumbers');
let { computerStore } = require('./store');

const [computerState, computerSetState, resetStore] = computerStore();

function extractComputerNumber() {
  while (computerState().length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computerState().includes(number)) {
      computerSetState(number);
    }
  }
}

function resetAllInputNumbers(isRestart) {
  if (isRestart === '1') {
    resetStore();
    extractComputerNumber();
    baseballGameStart();
  } else {
    computerStore = null;
    Console.close();
  }
}

function baseballGameReset() {
  Console.readLine(
    '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
    resetAllInputNumbers,
  );
}

function inputUserNumber(userNumber) {
  const input = userNumber.split('').map(Number);
  validateNumbers(input);
  extractComputerNumber();

  if (compareNumbers(input, computerState())) {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    baseballGameReset();
  } else {
    baseballGameStart();
  }
}

function baseballGameStart() {
  Console.readLine('숫자를 입력해주세요 : ', inputUserNumber);
}

module.exports = {
  extractComputerNumber,
  baseballGameStart,
};

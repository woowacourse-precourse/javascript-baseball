const { Console } = require('@woowacourse/mission-utils');

function printNewGameMessage() {
	Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
}

module.exports = printNewGameMessage;

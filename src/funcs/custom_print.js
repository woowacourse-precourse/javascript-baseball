const { Console } = require('@woowacourse/mission-utils');

function printCompareResult(strike, ball) {
	if (strike === 0 && ball === 0) {
		Console.print('낫싱');
		return;
	}
	Console.print(`${ball !== 0 ? ball + '볼 ' : ''}${strike !== 0 ? strike + '스트라이크' : ''}`);
}

function printStartMessage() {
	Console.print('숫자 야구 게임을 시작합니다.');
}

function printNewGameMessage() {
	Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
}

function printEndMessage() {
	Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
}

exports.printCompareResult = printCompareResult;
exports.printStartMessage = printStartMessage;
exports.printNewGameMessage = printNewGameMessage;
exports.printEndMessage = printEndMessage;

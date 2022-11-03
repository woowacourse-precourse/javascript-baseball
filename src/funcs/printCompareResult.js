const { Console } = require('@woowacourse/mission-utils');

function printCompareResult(strike, ball) {
	if (strike === 0 && ball === 0) {
		Console.print('낫싱');
		return;
	}
	Console.print(`${ball !== 0 ? ball + '볼 ' : ''}${strike !== 0 ? strike + '스트라이크' : ''}`);
}

module.exports = printCompareResult;

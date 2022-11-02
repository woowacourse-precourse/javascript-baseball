const { Random } = require('@woowacourse/mission-utils');

function createAnswerNumbers() {
	return Random.pickUniqueNumbersInRange(1, 9, 3).join('');
}

module.exports = createAnswerNumbers;

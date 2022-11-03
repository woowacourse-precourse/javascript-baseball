const { Random } = require('@woowacourse/mission-utils');

function createAnswerNumbers() {
	const result = [];

	while (result.length < 3) {
		const number = Random.pickNumberInRange(1, 9);
		if (!result.includes(number)) {
			result.push(number);
		}
	}
	return result.join('');
}

module.exports = createAnswerNumbers;

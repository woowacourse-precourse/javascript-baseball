const { Random } = require('@woowacourse/mission-utils');

function getRandomNumberExceptList(startInclusive, endInclusive, list) {
	const randomNumber = String(Random.pickNumberInRange(startInclusive, endInclusive));
	return list.includes(randomNumber)
		? getRandomNumberExceptList(startInclusive, endInclusive, list)
		: randomNumber;
}

function getUniqueNumbersInRange(startInclusive, endInclusive, count) {
	const list = [];
	while (list.length < count) {
		const uniqueNumber = getRandomNumberExceptList(startInclusive, endInclusive, list);
		list.push(uniqueNumber);
	}
	return list;
}

module.exports = { getUniqueNumbersInRange, getRandomNumberExceptList };

function checkInputLength(input, lengthCondition) {
	if (input.length !== lengthCondition) {
		throw new Error(`입력값의 길이는 ${lengthCondition}이어야 합니다.`);
	}
}

function checkInputIsNumber(input) {
	if (Number.isNaN(Number(input))) {
		throw new Error('입력값은 숫자여야 합니다.');
	}
}

function checkInputExcludeCertainNumber(input, certainNumber) {
	if (input.split('').includes(String(certainNumber))) {
		throw new Error(`입력값에 ${certainNumber}(이)가 포함되면 안됩니다.`);
	}
}

function hasDuplicateNumber(input) {
	const inputSet = new Set(input.split('').map((digit) => Number(digit)));
	return input.length === inputSet.size;
}

function checkInputDuplicateNumber(input) {
	if (!hasDuplicateNumber(input)) {
		throw new Error('입력값에 중복된 숫자가 있습니다.');
	}
}

function checkInputIsOneOrTwo(input) {
	if (!(input === '1' || input === '2')) {
		throw new Error('입력값으로 1, 2만 올 수 있습니다.');
	}
}

module.exports = {
	checkInputLength,
	checkInputIsNumber,
	checkInputExcludeCertainNumber,
	checkInputDuplicateNumber,
	checkInputIsOneOrTwo,
};

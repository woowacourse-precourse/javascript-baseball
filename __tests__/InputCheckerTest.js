const {
	checkInputLength,
	checkInputIsNumber,
	checkInputExcludeCertainNumber,
	checkInputDuplicateNumber,
	checkInputIsOneOrTwo,
} = require('../src/utils/InputChecker');

describe('입력값이 유효한지 확인', () => {
	test('입력값이 길이 조건과 맞는지 확인', () => {
		expect(() => checkInputLength('123', 4)).toThrow();
	});

	test('입력값이 숫자로만 이루어져 있는지 확인', () => {
		expect(() => checkInputIsNumber('123aaa')).toThrow();
	});

	test('입력값에 특정 숫자가 포함되지 않았는지 확인', () => {
		expect(() => checkInputExcludeCertainNumber('123120', 0)).toThrow();
	});

	test('입력값에 중복된 숫자가 있는지 확인', () => {
		expect(() => checkInputDuplicateNumber('12342')).toThrow();
	});

	test('입력값이 1혹은 2인지 확인', () => {
		expect(() => checkInputIsOneOrTwo('3')).toThrow();
	});
});

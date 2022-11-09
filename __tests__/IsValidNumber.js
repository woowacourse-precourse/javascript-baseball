/* eslint-disable */
const { MESSAGES } = require('../src/constants');
const App = require('../src/App');
const app = new App();

describe('유저 입력값 유효성 테스트', () => {
	test('세 자리 이하 수이다', () => {
		const input = '1234';
		expect(() => {
			app.isValidNumber(input);
		}).toThrow(MESSAGES.INVALID_LENGTH);
	});
	test('숫자로 변환가능 값이다', () => {
		const input = 'abc';

		expect(() => {
			app.isValidNumber(input);
		}).toThrow(MESSAGES.NOT_A_NUMBER);
	});

	test('중복된 숫자를 가지지 않는다', () => {
		const input = '112';
		expect(() => {
			app.isValidNumber(input);
		}).toThrow(MESSAGES.DUPLICATED_NUM);
	});
});

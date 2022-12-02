/* eslint-disable */
const { MESSAGES } = require('../src/constants');
const App = require('../src/App');
const app = new App();
const { getLogSpy } = require('./ApplicationTest');

describe('게임 재시작 테스트', () => {
	test('1 또는 2외의 값을 받으면 오류를 던진다', () => {
		const input = ['3', 'replay'];
		const messages = [
			MESSAGES.FORMAT_ERROR_CHOICE,
			MESSAGES.FORMAT_ERROR_CHOICE,
			MESSAGES.END_GAME,
		];
		input.forEach(input => {
			expect(() => {
				app.isValidChoice(input);
			}).toThrow(MESSAGES.FORMAT_ERROR_CHOICE);
		});
	});
});

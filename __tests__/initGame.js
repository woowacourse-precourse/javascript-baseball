/* eslint-disable */

const App = require('../src/App');
const app = new App();

describe('랜덤 숫자 생성 테스트', () => {
	test('initGame 함수가 실행되면 겹치지 않는 세자리 수가 생성된다.', () => {
		const input = app.initGame();

		input.forEach(input => expect(String(input)).toMatch(/[0-9]/g));
	});
});

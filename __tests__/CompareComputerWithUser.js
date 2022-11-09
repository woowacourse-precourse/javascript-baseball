/* eslint-disable */
const App = require('../src/App');
const app = new App();

describe('컴퓨터 숫자와 유저 숫자를 비교한다', () => {
	test('비교 후 올바른 ball, strike 점수를 낸다.', () => {
		const computer = [1, 2, 3];
		const user = ['456', '135', '123'];
		const result = [
			[0, 0],
			[1, 1],
			[0, 3],
		];

		for (let i = 0; i < user.length; i++) {
			expect(
				JSON.stringify(app.compareComputerWithUser(computer, user[i]))
			).toBe(JSON.stringify(result[i]));
		}
	});
});

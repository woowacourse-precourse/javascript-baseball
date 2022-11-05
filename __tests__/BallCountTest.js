const { countBall, countStrike, printBallCount } = require('../src/utils/BallCount');

describe('볼 카운트 테스트', () => {
	test('볼의 수 세기', () => {
		const userNumbers = ['1', '2', '3'];
		const computerNumbers = ['1', '3', '6'];
		const result = countBall(userNumbers, computerNumbers);

		expect(result).toEqual(1);
	});

	test('스트라이크의 수 세기', () => {
		const userNumbers = ['1', '2', '3'];
		const computerNumbers = ['1', '3', '6'];
		const result = countStrike(userNumbers, computerNumbers);

		expect(result).toEqual(1);
	});

	test('볼 카운트 출력', () => {
		const userNumbers = ['1', '2', '3'];
		const computerNumbers = ['1', '3', '6'];
		const ball = countBall(userNumbers, computerNumbers);
		const strike = countStrike(userNumbers, computerNumbers);
		const logSpy = jest.spyOn(console, 'log');
		printBallCount(ball, strike);
		expect(logSpy).toHaveBeenCalledWith('1볼 1스트라이크');
	});
});

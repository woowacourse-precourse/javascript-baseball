/* eslint-disable */
const App = require('../src/App');
const app = new App();

describe('올바른 결과 메세지를 반환한다', () => {
	test('[ball,strike] 점수를 적절한 메세지로 변환한다', () => {
		const input = [
			[0, 0],
			[1, 1],
			[0, 3],
		];
		const result = ['낫싱', '1볼 1스트라이크', '3스트라이크'];

		for (let i = 0; i < input.length; i++) {
			expect(JSON.stringify(app.convertScoreToMessage(input[i]))).toBe(
				JSON.stringify(result[i])
			);
		}
	});
});

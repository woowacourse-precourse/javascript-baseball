const App = require('../src/App');

afterAll((done) => done());

describe('입력값이 유효한지 확인하는 테스트', () => {
	const app = new App();
	test('입력값이 세자리 수가 아닌 경우 - 4자리 테스트', () => {
		const result = () => app.validateAnswer(['4', '1', '5', '6']);
		expect(result).toThrow('세자리 수가 아닙니다.');
	});
	test('입력값이 세자리 수가 아닌 경우 - 2자리 테스트', () => {
		const result = () => app.validateAnswer(['2', '8']);
		expect(result).toThrow('세자리 수가 아닙니다.');
	});
	test('중복된 숫자를 입력한 경우', () => {
		const result = () => app.validateAnswer(['3', '3', '7']);
		expect(result).toThrow('같은 숫자를 입력하셨습니다.');
	});
	test('1~9 사이의 숫자에 해당하는 입력값이 아닌 경우', () => {
		const result = () => app.validateAnswer(['a', '1', '5']);
		expect(result).toThrow('1~9 이외의 숫자 혹은 문자를 입력하셨습니다.');
	});
});

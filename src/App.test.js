const MissionUtils = require('@woowacourse/mission-utils');
const App = require('./App');

const getLogSpy = () => {
	const logSpy = jest.spyOn(MissionUtils.Console, 'print');
	logSpy.mockClear();
	return logSpy;
};

describe('숫자 야구 게임', () => {
	test('print 메소드로 받은값을 출력', () => {
		const logSpy = getLogSpy();
		const app = new App();
		const input = '테스트용 메세지를 출력합니다';
		app.printMessage(input);

		expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(input));
	});

	test('진행상황 확인용 테스트', () => {
		const app = new App();
		app.play();
	});
});

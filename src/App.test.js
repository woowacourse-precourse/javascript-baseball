const MissionUtils = require('@woowacourse/mission-utils');
const App = require('./App');

const getLogSpy = () => {
	const logSpy = jest.spyOn(MissionUtils.Console, 'print');
	logSpy.mockClear();
	return logSpy;
};

const mockQuestions = answers => {
	MissionUtils.Console.readLine = jest.fn();
	answers.reduce(
		(acc, input) =>
			acc.mockImplementationOnce((question, callback) => {
				callback(input);
			}),
		MissionUtils.Console.readLine,
	);
};

const mockRandoms = numbers => {
	MissionUtils.Random.pickNumberInRange = jest.fn();
	numbers.reduce(
		(acc, number) => acc.mockReturnValueOnce(number),
		MissionUtils.Random.pickNumberInRange,
	);
};

describe('숫자 야구 게임', () => {
	test('printMessage 메소드로 받은값을 출력', () => {
		const logSpy = getLogSpy();
		const app = new App();
		const input = '테스트용 메세지를 출력합니다';
		app.printMessage(input);

		expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(input));
	});

	test('getComputerNumber 메서드로 0을 포함하지 않는 3자리 랜덤값을 반환', () => {
		const randoms = [1, 3, 5, 5, 8, 9];
		mockRandoms(randoms);
		const app = new App();
		const result = app.getComputerNumber();

		expect(result).toEqual('135');
		expect([...result]).not.toContain('0');
		expect(result).toHaveLength(3);
	});

	test('getUserNumber 메서드로 받아온 userNumber 가 0을 포함할 경우 에러 발생', () => {
		const answer = ['012'];
		const app = new App();
		mockQuestions(answer);

		expect(() => {
			app.getUserNumber();
		}).toThrow('알맞은 숫자를 입력하지않아 프로그램을 종료합니다');
	});

	test('getUserNumber 메서드로 받아온 userNumber 의 숫자가 중복될 경우 에러 발생', () => {
		const answer = ['112'];
		const app = new App();
		mockQuestions(answer);

		expect(() => {
			app.getUserNumber();
		}).toThrow('알맞은 숫자를 입력하지않아 프로그램을 종료합니다');
	});

	test('getCompareResult 메소드로 비교한 결과를 반환', () => {
		const app = new App();
		const results = [
			app.getCompareResult('135', '678'),
			app.getCompareResult('135', '329'),
			app.getCompareResult('135', '129'),
			app.getCompareResult('135', '159'),
			app.getCompareResult('135', '135'),
		];

		const messages = ['낫싱', '1볼', '1스트라이크', '1볼 1스트라이크', '3스트라이크'];

		results.forEach((result, index) => {
			expect(result).toEqual(messages[index]);
		});
	});

	test('initializeGame 메소드로 초기값 설정', () => {
		const randoms = [1, 3, 5, 5, 8, 9];
		mockRandoms(randoms);
		const app = new App();
		app.initializeGame();

		expect(app.gameEnd).toEqual(false);
		expect(app.computerNumber).toEqual('135');
	});

	test('게임 종료 후 재시작시 알맞지않은 입력을 할 경우 에러를 반환', () => {
		const randoms = [1, 3, 5, 5, 8, 9];
		const answers = ['246', '135', '3'];
		const messages = ['낫싱', '3스트라이크', '1 또는 2를 입력하세요'];

		mockRandoms(randoms);
		mockQuestions(answers);

		messages.forEach((output, index) => {
			if (index === 2) {
				expect(() => {
					const app = new App();
					app.play();
				}).toThrow();
			}
		});
	});
});

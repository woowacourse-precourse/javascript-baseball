const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) =>
      acc.mockImplementationOnce((question, callback) => {
        callback(input);
      }),
    MissionUtils.Console.readLine,
  );
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('숫자 야구 게임', () => {
  test('게임 시작 문구를 출력한다', () => {
    const message = '숫자 야구 게임을 시작합니다.';
    const logSpy = getLogSpy();

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(message);
  });

  test('스트라이크와 볼의 갯수를 찾는다', () => {
    const randoms = ['1', '3', '5'];
    const answer = '123';

    mockRandoms(randoms);

    const app = new App();
    app.play();
    const result = app.getStrikeBallCount(answer);

    expect(result).toEqual({ strike: 1, ball: 1 });
  });

  test('스트라이크 볼 메세지를 출력한다', () => {
    const counts = [
      { strike: 1, ball: 2 },
      { strike: 3, ball: 0 },
      { strike: 0, ball: 0 },
    ];
    const messages = ['2볼 1스트라이크', '3스트라이크', '낫싱'];

    const app = new App();

    messages.forEach((message, i) => {
      expect(app.getResult(counts[i])).toEqual(message);
    });
  });

  test('게임 종료 후 재시작', () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ['246', '135', '1', '597', '589', '2'];
    const logSpy = getLogSpy();
    const messages = ['낫싱', '3스트라이크', '1볼 1스트라이크', '3스트라이크', '게임 종료'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('예외 테스트', () => {
    const randoms = [1, 3, 5];
    const answers = ['1234'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});

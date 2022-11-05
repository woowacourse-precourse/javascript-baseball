const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

const mockQuestions = answers => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) =>
      acc.mockImplementationOnce((question, callback) => {
        callback(input);
      }),
    MissionUtils.Console.readLine
  );
};

const mockRandoms = numbers => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('숫자 야구 게임 (셀프테스트)', () => {
  test('게임시작 문구 출력', () => {
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    expect(logSpy).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
  });

  test('사용자 입력 예외처리', () => {
    const answers = [
      '333',
      '0',
      '1,',
      '4561',
      '1789',
      '염진호',
      'a12',
      '!@#',
      '',
      '😂😂😂',
      '012'
    ];
    mockQuestions(answers);

    answers.forEach(() => {
      expect(() => {
        const app = new App();
        app.play();
      }).toThrow(
        '입력형식이 잘못되었습니다. 서로 다른 숫자 3개를 입력해주세요.🙏'
      );
    });
  });

  test('컴퓨터 랜덤 정답 생성', () => {
    const app = new App();
    const randomNum = app.makeRandomAnswer();
    expect(app.chkValidNumber(randomNum)).toEqual(true);
  });

  test('스트라이크 & 볼 판별 로직', () => {
    const gameAnswer = '369';
    const inputs = [
      '247',
      '123',
      '691',
      '936',
      '312',
      '386',
      '396',
      '169',
      '369'
    ];
    const outputs = [
      { strike: 0, ball: 0 },
      { strike: 0, ball: 1 },
      { strike: 0, ball: 2 },
      { strike: 0, ball: 3 },
      { strike: 1, ball: 0 },
      { strike: 1, ball: 1 },
      { strike: 1, ball: 2 },
      { strike: 2, ball: 0 },
      { strike: 3, ball: 0 }
    ];
    const app = new App();
    inputs.forEach((input, ind) => {
      expect(app.getResult(input, gameAnswer)).toEqual(outputs[ind]);
    });
  });
});

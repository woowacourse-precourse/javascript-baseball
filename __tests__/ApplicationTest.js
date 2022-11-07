const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('숫자 야구 게임', () => {
  test('게임 종료 후 재시작', () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ['246', '135', '1', '597', '589', '2'];
    const logSpy = getLogSpy();
    const messages = [
      '낫싱',
      '3스트라이크',
      '1볼 1스트라이크',
      '3스트라이크',
      '게임 종료',
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('게임 종료 후 재시작: 볼과 스트라이크도 잘 출력되는지 확인', () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ['246', '132', '135', '1', '597', '892', '589', '2'];
    const logSpy = getLogSpy();
    const messages = [
      '낫싱',
      '2스트라이크',
      '3스트라이크',
      '1볼 1스트라이크',
      '2볼',
      '3스트라이크',
      '게임 종료',
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('첫 게임 시작 후 안내문구와 힌트값이 잘 출력되는지 확인', () => {
    const randoms = [4, 5, 9];
    const answers = ['468', '287', '459'];
    const logSpy = getLogSpy();
    const messages = [
      '숫자 야구 게임을 시작합니다.',
      '1스트라이크',
      '낫싱',
      '3스트라이크',
      '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('입력값, 정답값, 힌트값을 나타내는 인스턴스 프로퍼티가 제대로 저장되는지 확인', () => {
    const randoms = [1, 3, 5];
    const answers = ['123'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(app.input).toHaveLength(3);
    expect(app.input).toEqual([1, 2, 3]);
    expect(App.isValidInput(app.input)).toEqual(true);

    expect(app.answer).toHaveLength(3);
    expect(app.answer).toEqual([1, 3, 5]);

    expect(app.hint).toEqual({
      ball: 1,
      strike: 1,
      nothing: 1,
    });
  });

  test('입력값, 정답값, 힌트값을 나타내는 인스턴스 프로퍼티가 제대로 저장되는지 확인2', () => {
    const randoms = [2, 9, 6];
    const answers = ['137'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(app.input).toHaveLength(3);
    expect(app.input).toEqual([1, 3, 7]);
    expect(App.isValidInput(app.input)).toEqual(true);

    expect(app.answer).toHaveLength(3);
    expect(app.answer).toEqual([2, 9, 6]);

    expect(app.hint).toEqual({
      ball: 0,
      strike: 0,
      nothing: 3,
    });
  });

  test('isValidInput 메서드로 부적절한 입력값 예외처리', () => {
    expect(App.isValidInput([1, 2, 3])).toEqual(true);

    expect(() => {
      App.isValidInput([1, NaN, 2]);
    }).toThrow('문자를 제외한 숫자만 입력하세요.');

    expect(() => {
      App.isValidInput([1, 0, 9]);
    }).toThrow('1~9 사이의 숫자만 입력하세요.');

    expect(() => {
      App.isValidInput([1, 9]);
    }).toThrow('3개의 숫자들을 입력하세요.');

    expect(() => {
      App.isValidInput([4, 7, 7]);
    }).toThrow('서로 다른 숫자를 입력하세요.');
  });

  test('예외 테스트: 입력값의 길이가 3이 아닌 경우', () => {
    const randoms = [1, 3, 5];
    const answers = ['1234'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('3개의 숫자들을 입력하세요.');
  });

  test('예외 테스트: 입력값에 서로 동일한 숫자가 포함된 경우', () => {
    const randoms = [1, 3, 5];
    const answers = ['122'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('서로 다른 숫자를 입력하세요.');
  });

  test('예외 테스트: 게임 종료 후 1,2 이외의 값 입력한 경우', () => {
    const randoms = [1, 3, 5];
    const answers = ['135', '4'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('1 또는 2만 입력해주세요.');
  });

  test('예외 테스트: 입력값에 숫자 이외의 값 포함된 경우', () => {
    const randoms = [1, 3, 5];
    const answers = ['안12'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('문자를 제외한 숫자만 입력하세요.');
  });

  test('예외 테스트: 입력값에 0이 포함된 경우', () => {
    const randoms = [1, 3, 5];
    const answers = ['102'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('1~9 사이의 숫자만 입력하세요.');
  });
});

const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

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

test('1 = 1', () => {
  expect(1).toBe(1);
});

test('상대방 배열 생성', () => {
  const app = new App();
  app.createAnswer();
  expect(app.answer).toHaveLength(3);
});

test('입력값 제한 사항 예외사항 체크', () => {
  const answers = ['1234'];

  expect(() => {
    const app = new App();
    app.inputCheck(answers);
  }).toThrow();
});

test('입력값 제한 사항 예외사항 체크2', () => {
  const answers = ['감사합니다.'];

  expect(() => {
    const app = new App();
    app.inputCheck(answers);
  }).toThrow();
});

test('입력값 제한 사항 예외사항 체크3', () => {
  const answers = ['111'];

  expect(() => {
    const app = new App();
    app.inputCheck(answers);
  }).toThrow();
});

test('사용자 숫자 상대방 숫자 비교', () => {
  const randoms = [1, 2, 3];
  const answers = ['123'];
  const logSpy = getLogSpy();
  const messages = ['3스트라이크'];

  mockRandoms(randoms);
  mockQuestions(answers);

  const app = new App();
  app.play();
  messages.forEach((output) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});

test('사용자 숫자 상대방 숫자 비교2', () => {
  const randoms = [1, 2, 3];
  const answers = ['874'];
  const logSpy = getLogSpy();
  const messages = ['낫싱'];

  mockRandoms(randoms);
  mockQuestions(answers);

  const app = new App();
  app.play();
  messages.forEach((output) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});

test('사용자 숫자 상대방 숫자 비교3', () => {
  const randoms = [1, 2, 3];
  const answers = ['132'];
  const logSpy = getLogSpy();
  const messages = ['2볼 1스트라이크'];

  mockRandoms(randoms);
  mockQuestions(answers);

  const app = new App();
  app.play();
  messages.forEach((output) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});

test('사용자 숫자 상대방 숫자 비교4', () => {
  const randoms = [1, 2, 3];
  const answers = ['124'];
  const logSpy = getLogSpy();
  const messages = ['2스트라이크'];

  mockRandoms(randoms);
  mockQuestions(answers);

  const app = new App();
  app.play();
  messages.forEach((output) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});

test('judgeResult 메서드 return 테스트(true)', () => {
  const app = new App();
  const SPYFunction = jest.spyOn(app, 'endingOption');
  app.judgeResult(true);
  expect(SPYFunction).toBeCalled();
});

test('judgeResult 메서드 return 테스트(false)', () => {
  const app = new App();
  const SPYFunction = jest.spyOn(app, 'enterNumber');
  app.judgeResult(false);
  expect(SPYFunction).toBeCalled();
});

test('endingOption 메서드 다시 시작하기 테스트(1)', () => {
  const randoms = [2, 6, 7, 7, 8, 9];
  const answers = ['134', '267', '1', '597', '789', '2'];
  const logSpy = getLogSpy();
  const messages = ['낫싱', '3스트라이크', '2볼', '3스트라이크', '게임 종료'];

  mockRandoms(randoms);
  mockQuestions(answers);

  const app = new App();
  app.play();
  messages.forEach((output) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});

test('endingOption 메서드 다시 시작하기 테스트(1)', () => {
  const randoms = [2, 6, 7, 7, 8, 9];
  const answers = ['134', '267', '1', '597', '789', '2'];
  const logSpy = getLogSpy();
  const messages = ['낫싱', '3스트라이크', '2볼', '3스트라이크', '게임 종료'];

  mockRandoms(randoms);
  mockQuestions(answers);

  const app = new App();
  app.play();
  messages.forEach((output) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});

test('endingOption 입력값 예외사항 체크', () => {
  const answers = ['4'];
  mockQuestions(answers);
  expect(() => {
    const app = new App();
    app.endingOption(answers);
  }).toThrow();
});

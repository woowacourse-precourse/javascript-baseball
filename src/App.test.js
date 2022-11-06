const MissionUtils = require('@woowacourse/mission-utils');
const App = require('./App');

describe('게임 시작 문구 출력', () => {
  test('게임 시작 문구 출력', () => {
    const spy = jest.spyOn(MissionUtils.Console, 'print');

    const app = new App();
    app.printGameStartMessage();

    expect(spy).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
  });
});

describe('정답 생성', () => {
  test('정답 생성', () => {
    const app = new App();
    app.generateAnswer();

    expect(app.answer.length).toBe(3);
    expect(new Set(app.answer).size).toBe(3);
    expect([...app.answer].every((number) => number >= 1 && number <= 9)).toBe(
      true,
    );
  });
});

describe('사용자 숫자 입력', () => {
  test('사용자 숫자 입력', () => {
    const spy = jest.spyOn(MissionUtils.Console, 'readLine');

    const app = new App();
    app.getGuess();

    expect(spy).toHaveBeenCalledWith(
      '숫자를 입력해주세요 : ',
      expect.any(Function),
    );
  });
});

describe('사용자 숫자 입력 검증', () => {
  test('3자리가 아닌 숫자', () => {
    const app = new App();
    app.guess = '1234';

    expect(() => {
      app.checkGuess();
    }).toThrow('잘못된 입력입니다.');
  });

  test('중복된 숫자', () => {
    const app = new App();
    app.guess = '111';

    expect(() => {
      app.checkGuess();
    }).toThrow('잘못된 입력입니다.');
  });

  test('1~9가 아닌 숫자', () => {
    const app = new App();
    app.guess = '012';

    expect(() => {
      app.checkGuess();
    }).toThrow('잘못된 입력입니다.');
  });

  test('숫자가 아닌 입력', () => {
    const app = new App();
    app.guess = 'abc';

    expect(() => {
      app.checkGuess();
    }).toThrow('잘못된 입력입니다.');
  });

  test('올바른 입력', () => {
    const app = new App();
    app.guess = '123';

    expect(() => {
      app.checkGuess();
    }).not.toThrow();
  });
});

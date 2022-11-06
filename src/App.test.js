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

describe('볼 카운트 계산', () => {
  test('낫싱', () => {
    const app = new App();
    app.answer = '123';
    app.guess = '456';
    app.calculateBallCount();

    expect(app.ballCount).toStrictEqual({ ball: 0, strike: 0 });
  });

  test('1스트라이크', () => {
    const app = new App();
    app.answer = '123';
    app.guess = '156';
    app.calculateBallCount();

    expect(app.ballCount).toStrictEqual({ ball: 0, strike: 1 });
  });

  test('1볼', () => {
    const app = new App();
    app.answer = '123';
    app.guess = '451';
    app.calculateBallCount();

    expect(app.ballCount).toStrictEqual({ ball: 1, strike: 0 });
  });

  test('1볼 1스트라이크', () => {
    const app = new App();
    app.answer = '123';
    app.guess = '152';
    app.calculateBallCount();

    expect(app.ballCount).toStrictEqual({ ball: 1, strike: 1 });
  });

  test('3스트라이크', () => {
    const app = new App();
    app.answer = '123';
    app.guess = '123';
    app.calculateBallCount();

    expect(app.ballCount).toStrictEqual({ ball: 0, strike: 3 });
  });

  test('3볼', () => {
    const app = new App();
    app.answer = '123';
    app.guess = '312';
    app.calculateBallCount();

    expect(app.ballCount).toStrictEqual({ ball: 3, strike: 0 });
  });
});

describe('볼 카운트 출력', () => {
  test('낫싱', () => {
    const spy = jest.spyOn(MissionUtils.Console, 'print');

    const app = new App();
    app.ballCount = { ball: 0, strike: 0 };
    app.printBallCount();

    expect(spy).toHaveBeenCalledWith('낫싱');
  });

  test('1스트라이크', () => {
    const spy = jest.spyOn(MissionUtils.Console, 'print');

    const app = new App();
    app.ballCount = { ball: 0, strike: 1 };
    app.printBallCount();

    expect(spy).toHaveBeenCalledWith('1스트라이크');
  });

  test('1볼', () => {
    const spy = jest.spyOn(MissionUtils.Console, 'print');

    const app = new App();
    app.ballCount = { ball: 1, strike: 0 };
    app.printBallCount();

    expect(spy).toHaveBeenCalledWith('1볼');
  });

  test('1볼 1스트라이크', () => {
    const spy = jest.spyOn(MissionUtils.Console, 'print');

    const app = new App();
    app.ballCount = { ball: 1, strike: 1 };
    app.printBallCount();

    expect(spy).toHaveBeenCalledWith('1볼 1스트라이크');
  });

  test('3스트라이크', () => {
    const spy = jest.spyOn(MissionUtils.Console, 'print');

    const app = new App();
    app.ballCount = { ball: 0, strike: 3 };
    app.printBallCount();

    expect(spy).toHaveBeenCalledWith('3스트라이크');
  });

  test('3볼', () => {
    const spy = jest.spyOn(MissionUtils.Console, 'print');

    const app = new App();
    app.ballCount = { ball: 3, strike: 0 };
    app.printBallCount();

    expect(spy).toHaveBeenCalledWith('3볼');
  });
});

describe('게임 종료 문구 출력', () => {
  test('게임 종료 문구 출력', () => {
    const spy = jest.spyOn(MissionUtils.Console, 'print');

    const app = new App();
    app.printGameEndMessage();

    expect(spy).toHaveBeenCalledWith(
      '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
    );
  });
});

describe('게임 재시작 여부 검증', () => {
  test('잘못된 입력', () => {
    const app = new App();
    app.newGame = '3';

    expect(() => {
      app.checkNewGame();
    }).toThrowError('잘못된 입력입니다.');
  });

  test('게임 재시작', () => {
    const app = new App();
    app.newGame = '1';

    expect(() => {
      app.checkNewGame();
    }).not.toThrow();
  });

  test('게임 종료', () => {
    const app = new App();
    app.newGame = '2';

    expect(() => {
      app.checkNewGame();
    }).not.toThrow();
  });
});

/* eslint-disable no-undef */
/* eslint-disable arrow-body-style */
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

describe('숫자 야구 게임 함수 별 기능 동작 테스트', () => {
  const logSpy = getLogSpy();
  const app = new App();
  const playSpy = jest.spyOn(app, 'play');
  const setRandomNumberSpy = jest.spyOn(app, 'setRandomNumber');
  const startGameSpy = jest.spyOn(app, 'startGame');
  const checkInputCorrectSpy = jest.spyOn(app, 'checkInputCorrect');
  const judgeInputSpy = jest.spyOn(app, 'judgeInput');
  const endGameSpy = jest.spyOn(app, 'endGame');

  // 테스트 이름 : when_given_then
  // when: 어떤 행동을 했는지
  // given : 어떤 조건에서 이 일이 일어나는지
  // then : given과 같은 조건에서 when을 했을때 어떤 일이 일어날 것인지

  afterEach(() => {
    logSpy.mockClear();
    playSpy.mockClear();
    setRandomNumberSpy.mockClear();
    startGameSpy.mockClear();
    checkInputCorrectSpy.mockClear();
    judgeInputSpy.mockClear();
  });

  test('play_logStartGame', () => {
    const randoms = [1, 3, 5];
    const answers = ['123'];

    mockRandoms(randoms);
    mockQuestions(answers);
    app.play();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('숫자 야구 게임을 시작합니다.'),
    );
    expect(setRandomNumberSpy).toHaveBeenCalled();
    expect(startGameSpy).toHaveBeenCalled();
  });

  test('setRandomNumber_returnRandomNumberArray', () => {
    const randoms = [1, 3, 5];
    mockRandoms(randoms);
    app.setRandomNumber();
    expect(app._randomNumber).toEqual([1, 3, 5]);
  });

  test('inputUserNumber_getUserInput', () => {
    const answers = ['123'];
    mockQuestions(answers);

    app.inputUserNumber();
    expect(checkInputCorrectSpy).toHaveBeenCalledWith('123');
  });

  test('checkInputCorrect_withCorrectInput_callJudgeInput', () => {
    app.checkInputCorrect('123');
    expect(judgeInputSpy).toHaveBeenCalledWith('123');
  });
  test('checkInputCorrect_withWrongInput_throwError', () => {
    expect(() => {
      app.checkInputCorrect('1234');
    }).toThrow();
    expect(() => {
      app.checkInputCorrect('가나다');
    }).toThrow();
    expect(() => {
      app.checkInputCorrect('012');
    }).toThrow();
    expect(() => {
      app.checkInputCorrect('121');
    }).toThrow();
  });

  test('judgeInput_hasNoCorrectValueAndIndex_logNothing', () => {
    const randoms = [1, 3, 5];
    mockRandoms(randoms);

    app.judgeInput('678');
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('낫싱'));
  });
  test('judgeInput_hasOnlyCorrectValue_logBall', () => {
    const randoms = [1, 3, 5];
    mockRandoms(randoms);

    app.judgeInput('351');
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('3볼'));
  });
  test('judgeInput_hasCorrectValueAndIndex_logStrike', () => {
    const randoms = [1, 3, 5];
    mockRandoms(randoms);

    app.judgeInput('138');
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('2스트라이크'));
  });
  test('judgeInput_hasBothStrikeAndBall_logBallAndStrike', () => {
    const randoms = [1, 3, 5];
    mockRandoms(randoms);

    app.judgeInput('153');
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('2볼 1스트라이크'),
    );
  });
  test('judgeInput_has3Strike_endGame', () => {
    const randoms = [1, 3, 5];
    mockRandoms(randoms);

    app.judgeInput('135');
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('3개의 숫자를 모두 맞히셨습니다! 게임 종료'),
    );
  });

  test('checkRestartOrExit_input1_restartGame', () => {
    const answers = ['1'];
    mockQuestions(answers);

    app.checkRestartOrExit();
    expect(playSpy).toHaveBeenCalled();
  });
  test('checkRestartOrExit_input2_endGame', () => {
    const answers = ['2'];
    mockQuestions(answers);

    app.checkRestartOrExit();
    expect(endGameSpy).toHaveBeenCalled();
  });

  test('endGame_logEndGame', () => {
    app.endGame();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('숫자 야구 게임을 종료합니다.'),
    );
  });
});

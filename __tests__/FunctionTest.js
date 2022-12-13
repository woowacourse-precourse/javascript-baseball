const App = require('../src/App');
const BaseballNumberMaker = require('../src/BaseballNumberMaker');
const Controller = require('../src/Controller');
const InputValidator = require('../validators/InputValidator');
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

describe('기능 테스트', () => {
  test('[기능 1] 게임 시작 문구 출력', () => {
    const logSpy = getLogSpy();

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('숫자 야구 게임을 시작합니다.'),
    );
  });

  test('[기능 2] 랜덤 수 생성 및 저장', () => {
    const randoms = [1, 5, 5, 5, 8, 9];

    mockRandoms(randoms);

    expect(BaseballNumberMaker.createRandomNumber()).toStrictEqual([1, 5, 8]);
  });

  test('[기능 4] 게임 예상 숫자 입력 받은 후 예외사항 판단', () => {
    const answers = ['509'];

    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.handleInputAnswer();
    }).toThrow();
  });

  test('[기능 5] 입력 값이 랜덤수와 일치하는지 확인', () => {
    const randoms = [1, 3, 2];
    const answer = '132';

    const controller = new Controller();

    expect(controller.correctNumber(randoms, answer)).toBeTruthy();
  });

  test('[기능 6] 입력값에 따른 결과 값 출력', () => {
    const randoms = [1, 3, 2];
    const answers = ['134', '123'];
    const logSpy = getLogSpy();
    const messages = ['2스트라이크', '2볼 1스트라이크'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('[기능 7] 종료, 재시작 선택 입력받은 후 예외사항 판단', () => {
    const input = '0';

    const app = new App();

    expect(() => {
      InputValidator.checkInputRestartExit(input);
    }).toThrow('잘못입력함. 종료');
  });

  test('[기능 8] 1 or 2 입력 시 결과에 따라 돌아가거나, 종료', () => {
    const randoms = [1, 3, 2, 5, 6, 7];
    const answers = ['132', '1', '567', '2'];
    const logSpy = getLogSpy();
    const messages = [
      '숫자 야구 게임을 시작합니다.',
      '3스트라이크',
      '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
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
});

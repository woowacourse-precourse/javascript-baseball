const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');

const mockQuestions = answers => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = numbers => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getPrintSpy = () => {
  const printSpy = jest.spyOn(MissionUtils.Console, 'print');
  printSpy.mockClear();
  return printSpy;
};

describe('기능 단위 목록별 테스트', () => {
  test('기능1 게임시작 알림 테스트 (showStartMessage 메소드)', () => {
    const printSpy = getPrintSpy();
    const app = new App();

    app.showStartMessage();
    expect(printSpy).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
  });

  test('기능2 랜덤 숫자 생성 테스트 (setRandomDigit 메소드)', () => {
    const randoms = [1, 5, 5, 5, 8, 9];
    mockRandoms(randoms);

    const app = new App();
    expect(app.setRandomDigit()).toEqual([1, 5, 8]);
  });

  test('기능3 유저 숫자야구 입력 테스트 (setUserInput 메소드)', () => {
    const printSpy = getPrintSpy();
    const answers = ['246', '513', '152', '125', '135'];
    const messages = [
      [2, 4, 6],
      [5, 1, 3],
      [1, 5, 2],
      [1, 2, 5],
      [1, 3, 5],
    ];

    mockQuestions(answers);

    const app = new App();

    messages.forEach(output => {
      app.setUserInput();
      expect(printSpy).toHaveBeenCalledWith(expect.arrayContaining(output));
    });
  });

  test('기능4 숫자야구 입력값 유효성 테스트 (isDigitValidation 메소드)', () => {
    const inputException = ['1234', '130', '12', '133'];

    const app = new App();
    inputException.forEach(inputs =>
      expect(() => app.isDigitValidation(inputs)).toThrow('잘못된 값 입력됨'),
    );
  });

  test('기능5 유저 숫자야구 입력 테스트 (calcBaseBallDigit 메소드)', () => {
    const inputDigits = [
      [2, 4, 6],
      [1, 6, 2],
      [1, 3, 5],
      [6, 7, 8],
    ];
    const randomDigits = [
      [2, 4, 6],
      [1, 5, 6],
      [3, 5, 1],
      [5, 2, 3],
    ];
    const baseBallBoards = [
      { strike: 3, ball: 0 },
      { strike: 1, ball: 1 },
      { strike: 0, ball: 3 },
      { strike: 0, ball: 0 },
    ];

    const app = new App();
    baseBallBoards.forEach((Board, idx) => {
      expect(
        app.calcBaseBallDigit(inputDigits[idx], randomDigits[idx]),
      ).toEqual(Board);
    });
  });
});

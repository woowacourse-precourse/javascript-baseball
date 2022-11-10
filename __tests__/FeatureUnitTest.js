const App = require('../src/App');
const Computer = require('../src/Computer');
const { isThreeStrike } = require('../src/util/gemeProcess');
const { Console, Random } = require('@woowacourse/mission-utils');

const mockQuestions = (answers) => {
  Console.readLine = jest.fn();
  answers.reduce((acc, input) => acc.mockImplementationOnce((question, callback) => {
    callback(input);
  }), Console.readLine);
};

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), Random.pickNumberInRange);
};

const getPrintSpy = () => {
  const printSpy = jest.spyOn(Console, 'print');
  printSpy.mockClear();
  return printSpy;
};

describe('기능 단위 목록별 테스트', () => {
  test('기능1 게임시작 알림 테스트 (showStartMessage 메소드)', () => {
    const printSpy = getPrintSpy();
    const app = new App();

    app.play();
    expect(printSpy).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
  });

  test('기능2 랜덤 숫자 생성 테스트 (setRandomDigit 메소드)', () => {
    const randoms = [1, 5, 5, 5, 8, 9];

    mockRandoms(randoms);

    const computer = new Computer();
    computer.setRandomDigit();
    expect(computer.calcBaseBallDigit([1, 5, 8])).toEqual({
      strike: 3,
      ball: 0,
    });
  });

  test('기능3 유저 숫자야구 입력 테스트 (setUserInput 메소드)', () => {
    const printSpy = getPrintSpy();

    const randoms = [1, 3, 3, 3, 5];
    const answers = ['246', '513', '152', '125', '135'];
    const messages = [
      '낫싱',
      '3볼',
      '1볼 1스트라이크',
      '2스트라이크',
      '3스트라이크',
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(printSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('기능4 숫자야구 입력값 유효성 테스트 (validationDigit 메소드)', () => {
    const inputException = ['1234', '130', '12', '133'];

    const app = new App();
    inputException.forEach((inputs) => expect(() => app.validationDigit(inputs)).toThrow('[ERROR] 잘못된 값 입력됨'));
  });

  test('기능5 유저 숫자야구 입력 테스트 (calcBaseBallDigit 메소드)', () => {
    const randoms = [2, 4, 6, 1, 5, 6, 3, 5, 1, 5, 2, 3];

    const inputDigits = [
      [2, 4, 6],
      [1, 6, 2],
      [1, 3, 5],
      [6, 7, 8],
    ];

    const baseBallBoards = [
      { strike: 3, ball: 0 },
      { strike: 1, ball: 1 },
      { strike: 0, ball: 3 },
      { strike: 0, ball: 0 },
    ];

    mockRandoms(randoms);

    baseBallBoards.forEach((Board, idx) => {
      const computer = new Computer();
      computer.setRandomDigit();
      expect(computer.calcBaseBallDigit(inputDigits[idx])).toEqual(Board);
    });
  });

  test('기능6 3스트라이크시 반환되는 boolean 체크 (isThreeStrike 메소드)', () => {
    const baseBallBoards = [3, 0, 1, 2];
    const result = [true, false, false, false];

    baseBallBoards.forEach((board, idx) => {
      expect(isThreeStrike(board)).toEqual(result[idx]);
    });
  });

  test('기능6 3스트라이크시 게임종료 안내 (isThreeStrike 메소드)', () => {
    const printSpy = getPrintSpy();

    const randoms = [1, 3, 5];
    const answers = ['135'];
    const messages = ['게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();

    app.play();

    messages.forEach((output) => {
      expect(printSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('기능7 재시작 또는 종료 처리', () => {
    const printSpy = getPrintSpy();

    const randoms = [1, 3, 3, 3, 5, 1, 1, 3, 3, 5];
    const answers = ['135', '1', '135', '2'];
    const messages = [
      '3스트라이크',
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
      '3스트라이크',
      '게임 종료',
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(printSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('기능8 종료여부 입력값 유효성 검사', () => {
    const inputException = ['3', ' ', '12'];

    mockQuestions(inputException);

    const app = new App();
    inputException.forEach((_) => expect(() => app.getRestartInput()).toThrow('[ERROR] 잘못된 값 입력됨'));
  });
});

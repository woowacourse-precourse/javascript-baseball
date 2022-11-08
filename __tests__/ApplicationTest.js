const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');
const {
  EmptyInputException,
  WhiteSpaceInputException,
  DuplicateElementException,
  InvalidDigitException,
  InvalidCommandException,
  InputRangeException,
  InputTypeException,
} = require('../src/Error');

const NUMBERS = {
  MIN: 1,
  MAX: 9,
};
const NUMBERS_LIST_LENGTH = 3;

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

const getReadLineSpy = () => {
  const readLineSpy = jest.spyOn(MissionUtils.Console, 'readLine');
  readLineSpy.mockClear();

  return readLineSpy;
};

const getRandomSpy = () => {
  const randomSpy = jest.spyOn(MissionUtils.Random, 'pickNumberInRange');
  randomSpy.mockClear();

  return randomSpy;
};

const isRightRangeNumber = (array) =>
  array.every(
    (el) => typeof el === 'number' && el >= NUMBERS.MIN && el <= NUMBERS.MAX
  );

describe('숫자 야구 게임', () => {
  test('게임 시작 문구를 화면에 출력한다.', () => {
    const START_MESSAGE = '숫자 야구 게임을 시작합니다.';
    const logSpy = getLogSpy();

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(START_MESSAGE));
  });

  test('게임에 사용할 3자리 수를 생성한다.', () => {
    const randomSpy = getRandomSpy();

    const app = new App();
    app.play();

    expect(app.answer).toHaveLength(NUMBERS_LIST_LENGTH);
    expect(isRightRangeNumber(app.answer)).toBe(true);
    expect(randomSpy).toHaveBeenCalled();
    expect(randomSpy.mock.calls.length).toBeGreaterThanOrEqual(
      NUMBERS_LIST_LENGTH
    );
  });

  test('사용자의 숫자를 MissionUtils.Console.readLine 함수를 이용하여 입력받는다.', () => {
    const readLineSpy = getReadLineSpy();

    const app = new App();
    app.play();

    expect(readLineSpy).toHaveBeenCalled();
  });

  test('사용자의 숫자 입력을 받아 저장한다.', () => {
    const userInput = ['123'];
    const question = [1, 2, 3];

    mockQuestions(userInput);

    const app = new App();
    app.play();

    expect(app.question).toEqual(question);
  });

  test('아무 문자없이 입력이 일어난 경우 예외를 발생시키고 애플리케이션을 종료한다.', () => {
    const userInputs = [''];

    mockQuestions(userInputs);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(EmptyInputException);
  });

  test('공백문자만을 입력시 예외를 발생시키고 애플리케이션을 종료한다.', () => {
    const userInputs = [' '];

    mockQuestions(userInputs);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(WhiteSpaceInputException);
  });

  test('공백문자를 포함한 문자를 입력시 예외를 발생시키고 애플리케이션을 종료한다.', () => {
    const userInputs = ['abc '];

    mockQuestions(userInputs);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(WhiteSpaceInputException);
  });

  test('숫자 이외의 문자 입력시 예외를 발생시키고 애플리케이션을 종료한다.', () => {
    const userInputs = ['abc'];

    mockQuestions(userInputs);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(InputTypeException);
  });

  test('3자리를 초과하는 숫자 입력시 예외를 발생시키고 애플리케이션을 종료한다.', () => {
    const userInputs = ['1234'];

    mockQuestions(userInputs);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(InvalidDigitException);
  });

  test('각 자리수 중 같은 숫자가 있는 경우 예외를 발생시키고 애플리케이션을 종료한다.', () => {
    const userInputs = ['133'];

    mockQuestions(userInputs);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(DuplicateElementException);
  });

  test('각 자리수 중 1~9를 벗어난 숫자가 있는 경우 예외를 발생시키고 애플리케이션을 종료한다.', () => {
    const userInputs = ['012'];

    mockQuestions(userInputs);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(InputRangeException);
  });

  test('숫자비교 : 어떤 자릿수, 숫자도 불일치시 낫싱 표시', () => {
    const randoms = [1, 2, 3];
    const answers = ['456', '789'];
    const logSpy = getLogSpy();
    const messages = ['낫싱', '낫싱'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('게임종료 테스트', () => {
    const randoms = [1, 3, 5];
    const answers = ['246', '124', '145', '315', '351', '135'];
    const logSpy = getLogSpy();
    const messages = [
      '낫싱',
      '1스트라이크',
      '2스트라이크',
      '2볼 1스트라이크',
      '3볼',
      '3스트라이크\n3개의 숫자를 모두 맞히셨습니다!',
      '게임 종료',
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(output));
    });
  });

  test('게임 종료 후 재시작 여부 확인시 잘못된 입력이 있으면 예외가 발생되며 종료된다.', () => {
    const randoms = [1, 2, 3];
    const answers = ['123', 'a'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(InvalidCommandException);
  });

  test('게임 종료 후 재시작 여부 확인시 아무런 글자 없이 입력하면 예외가 발생되며 종료된다.', () => {
    const randoms = [1, 2, 3];
    const answers = ['123', ''];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(EmptyInputException);
  });

  test('게임 종료 후 재시작 여부 확인시 입력에 공백이 있으면 예외가 발생되며 종료된다.', () => {
    const randoms = [1, 2, 3];
    const answers = ['123', ' 1'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(WhiteSpaceInputException);
  });

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
    }).toThrow(InvalidDigitException);
  });
});
